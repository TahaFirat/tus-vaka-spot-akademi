#!/usr/bin/env ruby
# frozen_string_literal: true

require 'xcodeproj'

project_path = File.expand_path('App.xcodeproj', __dir__)
project = Xcodeproj::Project.open(project_path)

app_target = project.targets.find { |t| t.name == 'App' }
abort('App target not found in App.xcodeproj!') unless app_target

team_id = ENV['TEAM_ID'].to_s.strip
team_id = 'U3YT2CXH58' if team_id.empty?
app_profile = ENV['PROFILE_NAME'].to_s.strip
widget_profile = ENV['WIDGET_PROFILE_NAME'].to_s.strip
build_num = ENV['BUILD_NUMBER'].to_s.strip
build_num = '1' if build_num.empty?
marketing_ver = '1.4'

# 1. Shared group & TusSharedModels.swift
shared_group = project.main_group.children.find { |g| g.display_name == 'Shared' } ||
               project.main_group.new_group('Shared', 'Shared')
shared_file = shared_group.files.find { |f| f.path == 'TusSharedModels.swift' } ||
              shared_group.new_file('TusSharedModels.swift')

unless app_target.source_build_phase.files_references.include?(shared_file)
  app_target.add_file_references([shared_file])
end

# 2. TusWidgetExtension group & files
ext_group = project.main_group.children.find { |g| g.display_name == 'TusWidgetExtension' } ||
            project.main_group.new_group('TusWidgetExtension', 'TusWidgetExtension')
widgets_swift = ext_group.files.find { |f| f.path == 'TusWidgets.swift' } ||
                ext_group.new_file('TusWidgets.swift')
ext_group.files.find { |f| f.path == 'Info.plist' } || ext_group.new_file('Info.plist')
ext_group.files.find { |f| f.path == 'TusWidgetExtension.entitlements' } || ext_group.new_file('TusWidgetExtension.entitlements')

# 3. Create or reuse TusWidgetExtension target
widget_target = project.targets.find { |t| t.name == 'TusWidgetExtension' }
unless widget_target
  widget_target = project.new_target(:app_extension, 'TusWidgetExtension', :ios, '16.2')
end

[shared_file, widgets_swift].each do |file_ref|
  unless widget_target.source_build_phase.files_references.include?(file_ref)
    widget_target.add_file_references([file_ref])
  end
end

widget_target.add_system_framework(['WidgetKit', 'SwiftUI'])

# 4. Dependency & Embed App Extensions phase on App target
unless app_target.dependencies.any? { |d| d.target == widget_target }
  app_target.add_dependency(widget_target)
end

embed_phase = app_target.copy_files_build_phases.find { |p| p.name == 'Embed App Extensions' } ||
              app_target.new_copy_files_build_phase('Embed App Extensions')
embed_phase.symbol_dst_subfolder_spec = :plug_ins

unless embed_phase.files_references.include?(widget_target.product_reference)
  bf = embed_phase.add_file_reference(widget_target.product_reference, true)
  bf.settings = { 'ATTRIBUTES' => ['RemoveHeadersOnCopy'] }
end

# 5. Per-target Build Configurations (App + TusWidgetExtension)
app_target.build_configurations.each do |cfg|
  s = cfg.build_settings
  s['PRODUCT_BUNDLE_IDENTIFIER'] = 'com.tus.akademi'
  s['MARKETING_VERSION'] = marketing_ver
  s['CURRENT_PROJECT_VERSION'] = build_num
  s['CODE_SIGN_ENTITLEMENTS'] = 'App/App.entitlements'
  s['DEVELOPMENT_TEAM'] = team_id
  unless app_profile.empty?
    s['CODE_SIGN_STYLE'] = 'Manual'
    s['CODE_SIGN_IDENTITY'] = 'Apple Distribution'
    s['PROVISIONING_PROFILE_SPECIFIER'] = app_profile
  end
end

widget_target.build_configurations.each do |cfg|
  s = cfg.build_settings
  s['PRODUCT_BUNDLE_IDENTIFIER'] = 'com.tus.akademi.widget'
  s['PRODUCT_NAME'] = '$(TARGET_NAME)'
  s['INFOPLIST_FILE'] = 'TusWidgetExtension/Info.plist'
  s['GENERATE_INFOPLIST_FILE'] = 'NO'
  s['CODE_SIGN_ENTITLEMENTS'] = 'TusWidgetExtension/TusWidgetExtension.entitlements'
  s['IPHONEOS_DEPLOYMENT_TARGET'] = '16.2'
  s['SWIFT_VERSION'] = '5.0'
  s['MARKETING_VERSION'] = marketing_ver
  s['CURRENT_PROJECT_VERSION'] = build_num
  s['SKIP_INSTALL'] = 'YES'
  s['TARGETED_DEVICE_FAMILY'] = '1,2'
  s['CLANG_ENABLE_MODULES'] = 'YES'
  s['LD_RUNPATH_SEARCH_PATHS'] = [
    '$(inherited)',
    '@executable_path/Frameworks',
    '@executable_path/../../Frameworks'
  ]
  s['DEVELOPMENT_TEAM'] = team_id
  if widget_profile.empty?
    s['CODE_SIGN_STYLE'] = 'Automatic'
  else
    s['CODE_SIGN_STYLE'] = 'Manual'
    s['CODE_SIGN_IDENTITY'] = 'Apple Distribution'
    s['PROVISIONING_PROFILE_SPECIFIER'] = widget_profile
  end
end

target_attrs = project.root_object.attributes['TargetAttributes'] ||= {}
target_attrs[app_target.uuid] ||= {}
target_attrs[app_target.uuid]['ProvisioningStyle'] = app_profile.empty? ? 'Automatic' : 'Manual'
target_attrs[app_target.uuid]['DevelopmentTeam'] = team_id

target_attrs[widget_target.uuid] ||= {}
target_attrs[widget_target.uuid]['ProvisioningStyle'] = widget_profile.empty? ? 'Automatic' : 'Manual'
target_attrs[widget_target.uuid]['DevelopmentTeam'] = team_id

project.save
puts "Wired TusWidgetExtension (v#{marketing_ver}, build #{build_num}) into App.xcodeproj!"

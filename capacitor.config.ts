import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.tus.akademi',
  appName: 'TUS Vaka & Spot Akademi',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    iosScheme: 'capacitor',
  },
  ios: {
    contentInset: 'never',
    backgroundColor: '#09141A',
    preferredContentMode: 'mobile',
  },
};

export default config;

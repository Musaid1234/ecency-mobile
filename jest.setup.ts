import 'react-native-gesture-handler/jestSetup';

global.__DEV__ = false;

jest.mock('@sentry/react-native', () => ({
  init: jest.fn(),
  captureException: jest.fn(),
  captureMessage: jest.fn(),
  addBreadcrumb: jest.fn(),
  mobileReplayIntegration: jest.fn(() => ({})),
  feedbackIntegration: jest.fn(() => ({})),
  wrap: jest.fn((app) => app),
}));

jest.mock('react-native-device-info', () =>
  require('react-native-device-info/jest/react-native-device-info-mock'),
);

jest.mock('@react-native-community/netinfo', () =>
  require('@react-native-community/netinfo/jest/netinfo-mock'),
);

jest.mock('@react-native-firebase/messaging', () => ({
  getMessaging: jest.fn(() => ({
    onMessage: jest.fn(),
    setBackgroundMessageHandler: jest.fn(),
  })),
}));

jest.mock('react-native-version-number', () => ({
  appVersion: '0.0.0',
}));

jest.mock('react-native-receive-sharing-intent', () => ({
  getReceivedFiles: jest.fn(),
  clearReceivedFiles: jest.fn(),
}));

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

jest.mock('expo-crypto', () => ({
  digestStringAsync: jest.fn(),
}));

jest.mock('expo-image', () => ({
  Image: 'Image',
}));

jest.mock('react-native-orientation-locker', () => ({
  addOrientationListener: jest.fn(),
  removeOrientationListener: jest.fn(),
  getDeviceOrientation: jest.fn(),
  lockToPortrait: jest.fn(),
  lockToLandscape: jest.fn(),
  getInitialOrientation: jest.fn(() => 'PORTRAIT'),
}));

jest.mock('react-native-background-timer', () => ({
  runBackgroundTimer: jest.fn(),
  stopBackgroundTimer: jest.fn(),
}));

jest.mock('react-native-image-crop-picker', () => ({
  openPicker: jest.fn(),
  openCamera: jest.fn(),
  clean: jest.fn(),
}));

jest.mock('react-native-permissions', () => ({
  check: jest.fn(),
  request: jest.fn(),
  PERMISSIONS: {},
  RESULTS: {},
  openSettings: jest.fn(),
}));

jest.mock('react-native-create-thumbnail', () => ({
  createThumbnail: jest.fn(),
}));

jest.mock('expo-linear-gradient', () => ({
  LinearGradient: 'LinearGradient',
}));

jest.mock('@react-native-clipboard/clipboard', () => ({
  getString: jest.fn(),
  setString: jest.fn(),
}));

jest.mock('react-native-webview', () => 'WebView');

jest.mock('react-native-media-controls', () => ({
  __esModule: true,
  default: () => null,
  PLAYER_STATES: {},
}));

jest.mock('@react-native-camera-roll/camera-roll', () => ({
  CameraRoll: {
    save: jest.fn(),
    getPhotos: jest.fn(),
  },
}));

jest.mock('rn-fetch-blob', () => ({
  fs: { dirs: { DocumentDir: '' } },
  config: () => ({
    fetch: jest.fn(() => Promise.resolve({ path: () => '' })),
  }),
}));

jest.mock('react-native-vision-camera', () => ({
  Camera: 'Camera',
  useCameraDevices: jest.fn(() => ({ back: {}, front: {} })),
  useCameraPermission: jest.fn(() => ({ hasPermission: true, requestPermission: jest.fn() })),
}));

jest.mock('react-native-bootsplash', () => ({
  hide: jest.fn(),
  show: jest.fn(),
  getVisibilityStatus: jest.fn(() => 'visible'),
}));

jest.mock('expo-local-authentication', () => ({
  authenticateAsync: jest.fn(() => Promise.resolve({ success: true })),
  hasHardwareAsync: jest.fn(() => Promise.resolve(true)),
  isEnrolledAsync: jest.fn(() => Promise.resolve(true)),
}));

jest.mock('@notifee/react-native', () => ({
  __esModule: true,
  default: {
    onForegroundEvent: jest.fn(),
    setBackgroundMessageHandler: jest.fn(),
    displayNotification: jest.fn(),
    requestPermission: jest.fn(() => Promise.resolve()),
    getInitialNotification: jest.fn(() => Promise.resolve(null)),
  },
}));

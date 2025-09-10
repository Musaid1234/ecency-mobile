// // eslint-disable-next-line
import * as Sentry from '@sentry/react-native';
import App from './src/index';

Sentry.init({
  dsn: 'https://a7b0c5a49bdeae965767e2967411b7b0@o4507985141956608.ingest.de.sentry.io/4509786252116048',

  sendDefaultPii: true,

  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1,
  integrations: [Sentry.mobileReplayIntegration(), Sentry.feedbackIntegration()],
});

if (__DEV__) {
  import('./reactotron-config').then(() => {
    console.log('Reactotron Configured');
  });
}

export default Sentry.wrap(App);

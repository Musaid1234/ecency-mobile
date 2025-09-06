# Ecency Mobile

A blockchain-powered social blogging app built with React Native for iOS and Android devices.

## Overview

Ecency Mobile is a decentralized social blogging platform that empowers users to create, engage, and earn on the Hive blockchain. Experience Web3-style content creation and community building in a secure, open-source environment.

## Features

### 📝 Social Blogging & Content Publishing
- Write articles, blogs, and posts with rich formatting
- Share ideas, stories, and media freely
- Publish and host your content for free

### 💰 Cryptocurrency Rewards
- Earn real cryptocurrency for content creation
- Get rewarded for upvoting and curating content
- Convert earnings into goods, services, or transfer to others

### 🌐 Community Engagement
- Discover and join communities around specific interests
- Connect with like-minded creators
- Participate in topic-based discussions

### 🎯 Content Interaction
- Like, comment, and curate content
- Boost posts for better exposure and engagement
- Contribute to content visibility through community actions

### 🔐 Secure Wallet
- Private keys stored locally on your device
- No server access to your funds or keys
- PIN protection for additional security

### 👤 Profile & Notifications
- Customize your profile
- Bookmark favorite content
- Receive notifications about community activities

## Why Choose Ecency?

**🔗 True Decentralization**
Built on the Hive blockchain - no central authority controls your data or content. You own your account, posts, and communities.

**💎 Incentivized Engagement**
Unlike traditional social apps, Ecency rewards creators and curators with cryptocurrency for meaningful participation.

**🌟 Open Source & Web3**
Part of the broader Hive ecosystem with Web3 interoperability and community-driven development.

## Prerequisites

- [Node.js](https://nodejs.org/) >= 18
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) package manager
- Xcode (for iOS development)
- Android SDK (for Android development)

## Getting Started

### Installation

```bash
git clone https://github.com/Musaid1234/ecency-mobile.git
cd ecency-mobile
npm install
```

### Start Metro Bundler

```bash
npm start
```

### Run on iOS

```bash
npm run ios
```

### Run on Android

1. **Setup Firebase:**
   - Create a Firebase project
   - Add an Android app with package name `app.esteem.mobile.android`
   - Download `google-services.json` and place it in `android/app/`

2. **Start the app:**
   ```bash
   npm run android
   ```

Note: Installing dependencies automatically runs the Gradle patch script required by React Native 0.79. If you encounter Gradle errors after updating dependencies, run `bash patch-gradle.sh` to reapply the patch.

## Project Structure

```
├── src/                 # Application source code
│   ├── components/      # Reusable UI components
│   ├── screens/         # App screens
│   ├── navigation/      # Navigation configuration
│   └── redux/           # State management
├── android/             # Native Android project
├── ios/                 # Native iOS project
├── resources/           # Static assets
├── __tests__/           # Jest tests
└── patches/             # patch-package files
```

## Development

### Useful Commands

```bash
# Run linter
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format

# Run tests
npm test

# Clear cache and restart
npm run clear
```

### Debugging

**Reactotron Integration:**
1. [Install Reactotron](https://github.com/infinitered/reactotron) desktop app
2. For Android: `adb reverse tcp:9090 tcp:9090` then restart the app
3. iOS connects automatically

### Building for Production

**Android Release:**
```bash
npm run bundle:android
cd android
./gradlew assembleRelease
```

**iOS Release:**
```bash
npm run bundle:ios
# Then open ios/ecency.xcworkspace in Xcode and archive
```

## Environment Configuration

Create a `.env` file in the project root:

```env
NODE_ENV=development
# Add other environment variables as needed
```

## Contributing

We welcome contributions from the community! Here's how to get started:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests and linting
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Contribution Guidelines

- Follow the existing code style and conventions
- Write tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting

## Security

Security issues should be reported privately. Please contact the maintainers directly for security-related concerns.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Tech Stack

- **Framework:** React Native 0.79.5
- **Language:** TypeScript
- **State Management:** Redux Toolkit
- **Navigation:** React Navigation
- **Blockchain:** Hive
- **Testing:** Jest
- **Styling:** React Native Extended Stylesheet

## Support

If you encounter any issues or have questions:

1. Check existing [Issues](../../issues)
2. Create a new issue with detailed information
3. Join the community discussions

---

**Transform your mobile device into a gateway for decentralized, rewarding social blogging with Ecency Mobile.**
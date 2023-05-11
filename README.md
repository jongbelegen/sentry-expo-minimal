## Following steps have been taken to create a reproducible demo:

1. `$ expo npx create-expo-app --template bare-minimum`
2. `$ npm install "https://github.com/jongbelegen/sentry-expo.git#fix/update-sentry-android-support" --save`
3. `$ npm install @sentry/react-native --save`
4. Configured in App.js with Sentry.init
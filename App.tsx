// Installing: 
// yarn add react-native-vector-icons
// yarn add @types/react-native-vector-icons --dev
// yarn add react-native-video
// yarn add react-hook-form
// yarn add react-native-image-picker
// // npx install-expo-modules
// // yarn add expo-camera
// // npx expo install expo-camera
// yarn add @react-navigation/native react-native-screen react-native-safe-area-context
// npm install @react-navigation/native-stack
// yarn add @react-navigation/bottom-tabs
// yarn add react-native-screens
// for deep linking
// npx uri-scheme add notjustinsta --android
// npx uri-scheme open notjustinsta:// --android
// npx uri-scheme open notjustinsta://comments --android
// npx uri-scheme open notjustinsta://user --android
// npx uri-scheme open notjustinsta://user/123 --android
// 9:00



import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
// import HomeScreen from './src/screens/HomeScreen/HomeScreen';
// import CommentsScreen from './src/screens/CommentsScreen/CommentsScreen';
// import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';
// import EditProfileScreen from './src/screens/EditProfileScreen/EditProfileScreen';
// import PostUploadScreen from './src/screens/PostUploadScreen/PostUploadScreen';
// import PostUploadScreen1 from './src/screens/PostUploadScreen/PostUploadScreen1';

import Navigation from './src/navigation';



const App = () => {
  return (
    <Navigation />
  )
}

export default App;

const styles = StyleSheet.create({
  app: {
    flex: 1,
  }
})
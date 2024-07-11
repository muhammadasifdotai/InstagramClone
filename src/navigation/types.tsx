import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

export type RootNavigator = {
    Home: undefined;
    Comments: { postId: string }
};

export type BottomTabNavigatorParamList = {
    HomeStack: undefined;
    Search: undefined;
    Upload: undefined;
    Notifications: undefined;
    MyProfile: undefined
};

export type SearchTabNavigatorParamList = {
    Users: undefined;
    Posts: undefined;
};

export type MyProfileNavigationProp = BottomTabNavigationProp<
    BottomTabNavigatorParamList,
    'MyProfile'
>;

export type MyProfileRouteProp = RouteProp<
    BottomTabNavigatorParamList,
    'MyProfile'
>;

export type HomeStackNavigatorParamList = {
    Feed: undefined;
    userProfile: { userId: string };
};

export type UserProfileNavigationProp = NativeStackNavigationProp<
    HomeStackNavigatorParamList,
    'userProfile'
>;

export type UserProfileRouteProp = RouteProp<
    HomeStackNavigatorParamList,
    'userProfile'
>;

export type FeedNavigationProp = NativeStackNavigationProp<
    HomeStackNavigatorParamList,
    'Feed'
>;

export type ProfileStackNavigatorParamList = {
    Profile: undefined;
    'Edit Profile': undefined
};

export type ProfileNavigationProp = NativeStackNavigationProp<
    ProfileStackNavigatorParamList,
    'Profile'
>;
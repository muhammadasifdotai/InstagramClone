// yarn add @react-navigation/material-top-tabs react-native-tab-view
// yarn add react-native-pager-view
// Deep linking is the possibility to create a specific type of link, URL, that you can share on the internet, and whenever a person clicks on that URL, he will right away be redirected to your application, to the specific page or location in your application that you desire.

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CommentsScreen from "../screens/CommentsScreen/CommentsScreen";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import colors from "../theme/colors";
import { SearchTabNavigatorParamList } from "./types";
import UserSearchScreen from "../screens/UserSearchScreen/UserSearchScreen";

const Tab = createMaterialTopTabNavigator<SearchTabNavigatorParamList>();

const SearchTabNavigator = () => {
    const insets = useSafeAreaInsets();

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: { paddingTop: insets.top },
                tabBarIndicatorStyle: { backgroundColor: colors.primary },
            }}>
            <Tab.Screen name="Users" component={UserSearchScreen} />
            <Tab.Screen name="Posts" component={CommentsScreen} />
        </Tab.Navigator>
    );
};

export default SearchTabNavigator;
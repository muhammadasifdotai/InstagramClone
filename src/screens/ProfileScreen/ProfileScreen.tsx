import { Image, FlatList } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

import user from '../../assets/data/user.json';
import ProfileHeader from './ProfileHeader';
import FeedGridView from '../../components/FeedGridView/FeedGridView';
import {
    UserProfileNavigationProp,
    UserProfileRouteProp,
    MyProfileNavigationProp,
    MyProfileRouteProp,
} from '../../navigation/types';

const ProfileScreen = () => {
    const route = useRoute<UserProfileRouteProp | MyProfileRouteProp>();
    // console.log(route.params);
    const navigation = useNavigation<
        UserProfileNavigationProp | MyProfileNavigationProp
    >();

    const userId = route.params?.userId;
    console.warn('userid: ', userId);
    // query the user with userID
    // navigation.setOptions({ title: user.username })

    return (
        <FeedGridView
            data={user.posts}
            ListHeaderComponent={ProfileHeader}
        />
    );
};

export default ProfileScreen;
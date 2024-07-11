import { View, Text, Image } from 'react-native';
import styles from './styles';

import user from '../../assets/data/user.json';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { ProfileNavigationProp } from '../../navigation/types';

const ProfileHeader = () => {
    const navigation = useNavigation<ProfileNavigationProp>();
    return (
        <View style={styles.root}>
            <View style={styles.headerRow}>
                {/* Profile image */}
                <Image style={styles.avatar} source={{ uri: user.image }} />

                {/* Post, followers, following number */}
                <View style={styles.numberContainer}>
                    <Text style={styles.numberText}>98</Text>
                    <Text>Posts</Text>
                </View>

                <View style={styles.numberContainer}>
                    <Text style={styles.numberText}>198</Text>
                    <Text>Followers</Text>
                </View>

                <View style={styles.numberContainer}>
                    <Text style={styles.numberText}>298</Text>
                    <Text>Followers</Text>
                </View>
            </View>

            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.bio}>{user.bio}</Text>

            {/* Button */}
            <View style={{ flexDirection: 'row' }}>
                <Button text='Edit Profile'
                    onPress={() => navigation.navigate('Edit Profile')}
                />
                <Button text='Go back'
                    // onPress={() => console.warn('On Edit Profile')}
                    onPress={() => navigation.goBack()}
                // onPress={() => navigation.popToTop()} // popToTop: by this we go to the first one
                />
            </View>

        </View>
    );
};

export default ProfileHeader;
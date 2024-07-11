// Installing: 
// yarn add react-native-vector-icons
// yarn add @types/react-native-vector-icons --dev
// {}: curly brackets ko use hum javaScript ko get krnay kay leyee used krtay hay.

import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import Comment from '../Comment/Comment';
import { IPost } from '../../types/models';
import DoublePressable from '../DoublePressable';
import Carousal from '../Carousal';
import VideoPlayer from '../VideoPlayer';

import { useNavigation } from '@react-navigation/native';
import { FeedNavigationProp } from '../../navigation/types';

interface IFeedPost {
    post: IPost;
    isVisible?: boolean;
}


// from 'app.tsx' we are sending the post, in FeedPost component, we need to recieve this data. We recieve it as the first and only parameter of our functional component. So if we add the parameter props in 'FeedPost'
// const FeedPost = (props: IFeedPost) => {
//     const { post } = props
const FeedPost = ({ post, isVisible }: IFeedPost) => {
    //console.log('props', props)
    const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

    const navigation = useNavigation<FeedNavigationProp>();

    // navigate
    const navigateToUser = () => {
        navigation.navigate('UserProfile', { userId: post.user.id });
        // navigation.push('UserProfile')
    };

    const navigateToComments = () => {
        navigation.navigate('Comments', { postId: post.user.id });
    }

    const toggleDescriptionExpanded = () => {
        setIsDescriptionExpanded(v => !v) // jub button press ho to ya 'setIsDescriptionExpanded' krna hay or jub ya huva huva ho to isay call krna hay 'isDescriptionExpanded'
    };
    // we depend on existing value of state, it's better to pass there update function instead of value and invert it.

    const toggleLike = () => {
        setIsLiked(v => !v);
    };
    // below is image post and Carousal: that contain list of images
    let content = null;
    if (post.image) {
        content = (
            <DoublePressable onDoublePress={toggleLike}>
                <Image
                    source={{
                        uri: post.image
                    }}
                    style={styles.image}
                />
            </DoublePressable>
        );
    } else if (post.images) {
        content = <Carousal images={post.images} onDoublePress={toggleLike} />;
    } else if (post.video) {
        content = (
            <DoublePressable onDoublePress={toggleLike}>
                <VideoPlayer uri={post.video} paused={!isVisible} />
            </DoublePressable>
        )
    }

    return (
        <View style={styles.post}>
            {/* Header */}
            <View style={styles.header}>
                <Image
                    source={{
                        uri: post.user.image,
                    }}
                    style={styles.userAvatar}
                />
                <Text onPress={navigateToUser} style={styles.userName}>{post.user.username}</Text>

                <Entypo name='dots-three-horizontal' size={16} style={styles.threeDots} />
            </View>

            {/* Content */}
            {content}

            {/* Footer */}
            <View style={styles.footer}>
                <View style={styles.iconContainer}>
                    <Pressable onPress={toggleLike}>
                        <AntDesign name={isLiked ? 'heart' : 'hearto'}
                            size={24}
                            style={styles.icon}
                            color={isLiked ? colors.accent : colors.black}
                        />
                    </Pressable>
                    <Ionicons name='chatbubble-outline' size={24} style={styles.icon} color={colors.black} />
                    <Feather name='send' size={24} style={styles.icon} color={colors.black} />

                    <Feather name='bookmark' size={24} style={{ marginLeft: 'auto' }} color={colors.black} />

                </View>

                {/* Likes */}
                <Text style={styles.text}>Liked by {''}
                    <Text style={styles.bold}>Asif </Text>and
                    <Text style={styles.bold}> {post.nofLikes} others</Text>
                </Text>

                {/* Post description */}
                <Text style={styles.text} numberOfLines={isDescriptionExpanded ? 0 : 3}>
                    <Text style={styles.bold}>{post.user.username} </Text>
                    {post.description}
                </Text>
                <Text onPress={toggleDescriptionExpanded}>{isDescriptionExpanded ? 'less' : 'more'}</Text>

                {/* Comments */}
                <Text onPress={navigateToComments}>View all {post.nofComments} comments</Text>
                {post.comments.map(comment => (
                    <Comment key={comment.id} comment={comment} />
                ))}

                {/* Posted date */}
                <Text>{post.createdAt}</Text>
            </View>
        </View>
    )
}

export default FeedPost;


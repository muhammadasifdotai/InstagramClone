// yarn add react-native-video
// yarn add @types/react-native-video --dev


import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons'
import colors from '../../theme/colors';

interface IVideoPlayer {
    uri: string;
    paused: boolean;
}

// repeat: once video end its repeat again
const VideoPlayer = ({ uri, paused }: IVideoPlayer) => {
    const [muted, setMuted] = useState(true);
    return (
        <View>
            <Video
                source={{ uri }}
                style={styles.video}
                resizeMode='cover'
                repeat
                muted={muted}
                paused={paused}
            />

            <Pressable onPress={() => setMuted(v => !v)} style={styles.meteButton}>
                <Ionicons name={muted ? 'volume-mute' : 'volume-medium'} size={14} color='white' />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    video: {
        width: '100%',
        aspectRatio: 1,
    },
    meteButton: {
        backgroundColor: colors.black,
        padding: 5,
        borderRadius: 25,

        position: 'absolute',
        bottom: 10,
        right: 10,
    }
});

export default VideoPlayer;
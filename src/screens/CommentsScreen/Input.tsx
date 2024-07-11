import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import { useState } from 'react';

const Input = () => {
    const [newComment, setNewComment] = useState('');
    const onPost = () => {
        console.warn('Posting the comment:', newComment);
        // sending the data to backend
        setNewComment('');
    };
    return (
        <View style={styles.root}>
            <Image source={{
                uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg',
            }}
                style={styles.image}
            />
            <TextInput
                value={newComment}
                onChangeText={setNewComment}
                placeholder='Write your comment...'
                style={styles.input}
                multiline
            />

            <Text onPress={onPost} style={styles.button}>POST</Text>
        </View>
    );
};

export default Input;

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        padding: 5,
        borderWidth: 1,
        borderColor: colors.border,
        alignItems: 'flex-end'
    },
    image: {
        width: 40,
        aspectRatio: 1,
        borderRadius: 20,
    },
    input: {
        flex: 1,
        borderColor: colors.border,
        borderWidth: 1,
        borderRadius: 25,
        paddingRight: 50,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginLeft: 5,
    },
    button: {
        position: 'absolute',
        right: 15,
        bottom: 15,
        fontSize: fonts.size.s,
        fontWeight: fonts.weight.full,
        color: colors.primary,
    }
})
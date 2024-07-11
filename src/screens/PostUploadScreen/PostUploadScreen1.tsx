import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../theme/colors';
import { Camera, CameraType, FlashMode, CameraRecordingOptions, CameraPictureOptions, VideoQuality } from "expo-camera";

const flashModes = [
    FlashMode.off,
    FlashMode.on,
    FlashMode.auto,
    FlashMode.torch,
];

const flashModeToIcon = {
    [FlashMode.off]: 'flash-off',
    [FlashMode.on]: 'flash-on',
    [FlashMode.auto]: 'flash-auto',
    [FlashMode.torch]: 'highlight',
};

const PostUploadScreen1 = () => {
    const [hasPermissions, setHasPermissions] = useState<boolean | null>(null);
    const [cameraType, setCameraType] = useState(CameraType.back);
    const [flash, setFlash] = useState(FlashMode.off);
    const [isCameraReady, setIsCameraReady] = useState(false);

    useEffect(() => {
        const getPermission = async () => {
            const cameraPermission = await Camera.requestCameraPermissionsAsync();
            const microphonePermission =
                await Camera.requestMicrophonePermissionsAsync();
            setHasPermissions(
                cameraPermission.status === 'granted' &&
                microphonePermission.status === 'granted',
            );
        };
        getPermission();
    }, []);

    const flipCamera = () => {
        setCameraType(currentCameraType =>
            currentCameraType === CameraType.back
                ? CameraType.back
                : CameraType.back,
        );
    };

    const flipFlash = () => {
        const currentIndex = flashModes.indexOf(flash);
        const nextIndex =
            currentIndex === flashModes.length - 1 ? 0 : currentIndex + 1;
        setFlash(flashModes[nextIndex]);
    };

    if (hasPermissions === null) {
        return <Text>Loading...</Text>;
    }

    if (hasPermissions === false) {
        return <Text>No acess to the camera</Text>;
    }

    //console.warn(flash);

    return (
        <View style={styles.page}>
            <Camera
                style={styles.camera}
                type={cameraType}
                ratio='4:3'
                flashMode={flash}
                onCameraReady={() => setIsCameraReady(true)}
            />

            <View style={[styles.buttonsContainer, { top: 25 }]}>
                <MaterialIcons name='close' size={30} color={colors.white} />

                <Pressable onPress={flipFlash}>
                    <MaterialIcons
                        name={flashModeToIcon[flash]}
                        size={30}
                        color={colors.white}
                    />
                </Pressable>

                <MaterialIcons name='settings' size={30} color={colors.white} />
            </View>
            <View style={[styles.buttonsContainer, { bottom: 25 }]}>
                <MaterialIcons name='photo-library' size={30} color={colors.white} />
                {/* 45:00 hide the circle if our camera is not ready yet */}
                {isCameraReady && <View style={styles.circle} />}
                <Pressable onPress={flipCamera}>
                    <MaterialIcons name='flip-camera-ios' size={30} color={colors.white} />
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: colors.black,
    },
    camera: {
        width: '100%',
        aspectRatio: 3 / 4,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',

        position: 'absolute',
    },
    circle: {
        width: 75,
        aspectRatio: 1,
        borderRadius: 75,
        backgroundColor: colors.white
    }

})

export default PostUploadScreen1;
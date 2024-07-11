// 11: 35

import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { useForm, Controller, Control } from 'react-hook-form';
import React, { useState } from 'react';
import { Asset, launchCamera, launchImageLibrary } from 'react-native-image-picker';
import user from '../../assets/data/user.json';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import { IUser } from '../../types/models';

const URL_REGEX = /((http|https):\/\/)(www\.)?[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)/;


type IEditableUserField = 'name' | 'username' | 'website' | 'bio';
type IEditableUser = Pick<IUser, IEditableUserField>;

interface ICustomInput {
    control: Control<IEditableUser, object>;
    label: string;
    name: IEditableUserField;
    multiline?: boolean;
    rules?: object;
}

const CustomInput = ({
    control,
    name,
    label,
    multiline = false,
    rules = {},
}: ICustomInput) => (
    <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, value, onBlur }, fieldState: { error } }) => {
            return (
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>{label}</Text>
                    <View style={{ flex: 1 }}>
                        <TextInput
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            placeholder={label}
                            style={[
                                styles.input,
                                { borderColor: error ? colors.error : colors.border },
                            ]}
                            multiline={multiline}
                        />
                        {error && (
                            <Text style={{ color: colors.error }}>
                                {error.message || 'Error'}
                            </Text>
                        )}
                    </View>
                </View>
            )
        }}
    />

);

const EditProfileScreen = () => {
    const [selectedPhoto, setSelectedPhoto] = useState<null | Asset>(null);
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<IEditableUser>({
        defaultValues: {
            name: user.name,
            username: user.username,
            website: user.website,
            bio: user.bio,
        },
    });

    const onSubmit = (data: IEditableUser) => {
        console.log('submit', data);
    };

    // console.log(errors)

    const onChangePhoto = () => {
        launchImageLibrary(
            { mediaType: 'photo' },
            ({ didCancel, errorCode, errorMessage, assets }) => {
                if (!didCancel && !errorCode && assets && assets.length > 0) {
                    //console.log(assets);
                    setSelectedPhoto(assets[0]);
                }
            }
        );
    }

    return (
        <View style={styles.page}>
            <Image source={{ uri: selectedPhoto?.uri || user.image }} style={styles.avatar} />
            <Text onPress={onChangePhoto} style={styles.textButton}>Change profile photo</Text>

            <CustomInput
                name='name'
                control={control}
                rules={{ required: 'Name is required' }}
                label='Name'
            />
            <CustomInput
                name='Username'
                control={control}
                rules={{
                    required: 'Username is required',
                    minLength: {
                        value: 3,
                        message: 'Username should be more than 3 characters',
                    },
                }}
                label='Username'
            />
            <CustomInput
                name='Website'
                control={control}
                rules={{
                    required: 'Website is required',
                    pattern: {
                        value: URL_REGEX,
                        message: 'Invalid url',
                    },
                }}
                label='Website'
            />
            <CustomInput
                name='Bio'
                control={control}
                rules={{
                    maxLength: {
                        value: 200,
                        message: 'Bio should be less than 200 characters',
                    },
                }}
                label='Bio' multiline />

            <Text onPress={handleSubmit(onSubmit)} style={styles.textButton}>Submit</Text>
        </View>
    );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
    page: {
        alignItems: 'center',
        padding: 10,
    },
    avatar: {
        width: '33%',
        aspectRatio: 1,
        borderRadius: 100,
    },
    textButton: {
        color: colors.primary,
        fontSize: fonts.size.md,
        fontWeight: fonts.weight.semi,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    label: {
        width: 75,
    },
    input: {
        borderBottomWidth: 1,
    }
});
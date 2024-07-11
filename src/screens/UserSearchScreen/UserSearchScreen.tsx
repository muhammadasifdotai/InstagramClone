import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import users from '../../assets/data/users.json'
import { FlatList } from 'react-native';
import UserListItem from '../../components/UserListItem/UserListItem';

const UserSearchScreen = () => {
    return (
        <FlatList
            data={users}
            renderItem={({ item }) => <UserListItem user={item} />}
        />
    )
}

export default UserSearchScreen

const styles = StyleSheet.create({})
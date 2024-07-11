import { View, Text, FlatList, Image } from 'react-native';
import { IPost } from '../../types/models';
import React from 'react';
import FeedGridItem from './FeedGridItem';

interface IFeedGridView {
    data: IPost[];
    ListHeaderComponent?:
    | React.ComponentType<any>
    | null
    | undefined;
}

const FeedGridView = ({ data, ListHeaderComponent }: IFeedGridView) => {
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => <FeedGridItem post={item} />}
            numColumns={3}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={ListHeaderComponent}
            style={{ marginHorizontal: -1 }}
        />
    );
};

export default FeedGridView
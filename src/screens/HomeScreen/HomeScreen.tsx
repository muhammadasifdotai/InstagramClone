// Installing: 
// yarn add react-native-vector-icons
// yarn add @types/react-native-vector-icons --dev


import { FlatList, ViewToken, ViewabilityConfig } from 'react-native';
import FeedPost from '../../components/FeedPost';
import posts from '../../assets/data/posts.json';
import { useRef, useState } from 'react';


const HomeScreen = () => {
    const [activePostId, setActivePostId] = useState<string | null>(null);

    // console.log(props);
    // props.navigation.navigate('UserProfile')

    const viewabilityConfig: ViewabilityConfig = {
        itemVisiblePercentThreshold: 51,
    }

    const onViewableItemsChanged = useRef(
        ({ viewableItems }: { viewableItems: Array<ViewToken> }) => {
            if (viewableItems.length > 0) {
                setActivePostId(viewableItems[0].item.id);
            }
        }
    );

    return (
        <FlatList
            data={posts}
            renderItem={({ item }) =>
                <FeedPost isVisible={activePostId === item.id} post={item} />}
            showsVerticalScrollIndicator={false}
            viewabilityConfig={viewabilityConfig}
            onViewableItemsChanged={onViewableItemsChanged.current}
        />
    )
}

export default HomeScreen;

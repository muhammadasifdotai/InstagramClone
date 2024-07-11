import { useState, useRef } from 'react';
import { View, Text, FlatList, Image, useWindowDimensions, ViewabilityConfig, ViewToken } from 'react-native'
import colors from '../../theme/colors';
import DoublePressable from '../DoublePressable';

interface ICarousel {
    images: string[];
    onDoublePress?: () => void;
}

const Carousal = ({ images, onDoublePress = () => { } }: ICarousel) => {
    const { width } = useWindowDimensions();
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    // viewableItem: is an array that contain all the items that are visible on the screen, based on our config.
    const viewabilityConfig: ViewabilityConfig = {
        itemVisiblePercentThreshold: 51,
    }

    const onViewableItemsChanged = useRef(({ viewableItems }: { viewableItems: Array<ViewToken> }) => {
        //console.log(data)
        if (viewableItems.length > 0) {
            setActiveImageIndex(viewableItems[0].index || 0)
        }
    });

    return (
        <View>
            <FlatList
                data={images}
                renderItem={({ item }) => (
                    <DoublePressable onDoublePress={onDoublePress}>
                        <Image source={{ uri: item }} style={{ width, aspectRatio: 1 }} />
                    </DoublePressable>
                )}
                horizontal
                pagingEnabled
                onViewableItemsChanged={onViewableItemsChanged.current}
            />
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    position: 'absolute',
                    bottom: 0,
                    width: '100%'
                }}>
                {images.map((_, index) => (
                    <View
                        key={index}
                        style={{
                            width: 10,
                            aspectRatio: 1,
                            borderRadius: 5,
                            backgroundColor:
                                activeImageIndex === index ? colors.primary : colors.white,
                            margin: 10,
                            marginHorizontal: 5
                        }}
                    />
                ))}
            </View>
        </View>
    )
}

export default Carousal
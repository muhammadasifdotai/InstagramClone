import { ReactNode } from 'react';
import { Text, Pressable } from 'react-native';

interface IDoublePressable {
    onDoublePress?: () => void;
    children: ReactNode;
}

const DoublePressable = ({ onDoublePress = () => { }, children }: IDoublePressable) => {
    let lastTap = 0; //Its a simple javaScript variable and not a state variable because updating the last step should not rerender the component.So we not need as a state variable. 
    const handleDoublePress = () => {
        const now = Date.now(); // this will return timestamp of when this is happening.
        if (now - lastTap < 300) {
            onDoublePress();
        }
        lastTap = now;
    };

    return (
        <Pressable onPress={handleDoublePress}>{children}
        </Pressable>
    )
};

export default DoublePressable;
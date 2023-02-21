import { useEffect, useState } from "react"
import { View, Text } from "react-native";

export default function Clock() {
    let[time, setTime] = useState('00:00');

    // []: First time only
    // null: On every render
    // [a, b]: Watch for changes
    // return: On unmount

    useEffect(() => {
        let tick = setInterval(() =>{
            setTime(new Date().toLocaleTimeString());
            console.info('tick');
        }, 1000);
        return () => {
            clearInterval(tick);
        };
    }, []);

    return(
        <View>
            <Text>
                {time}
            </Text>
        </View>
    );
}
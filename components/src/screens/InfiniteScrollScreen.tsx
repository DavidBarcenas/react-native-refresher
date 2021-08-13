import React, { useState } from 'react'
import { View, FlatList, Text, Image, ActivityIndicator } from 'react-native';
import { FadeInImage } from '../components/FadeInImage';

export const InfiniteScrollScreen = () => {
    const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5])

    const loadInfo = () => {
        let newArray: number[] = []

        for(let i = 0; i < 5; i++) {
            newArray[i] = numbers.length + i
        }

        setNumbers([...numbers, ...newArray])
    }

    const renderItem = (item: number) => {
        return <FadeInImage 
            uri={`https://picsum.photos/id/${item}/200/300`} 
            style={{
                width: '100%',
                height: 300
            }}
        />
    }

    return (
        <View>
            <FlatList 
                data={numbers}
                keyExtractor={item => item.toString()}
                renderItem={({item}) => renderItem(item)}
                onEndReached={loadInfo}
                onEndReachedThreshold={0.5}
                ListFooterComponent={<ActivityIndicator size={25} color='blue' />}
            />
        </View>
    )
}

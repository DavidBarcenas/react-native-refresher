import React, { useState } from 'react'
import { View, ScrollView, RefreshControl } from 'react-native';

export const PullRefreshScreen = () => {
    const [refreshing, setRefreshing] = useState(false)

    const onRefresh = () => {
        setRefreshing(true)

        setTimeout(() => {
            console.log('ending...')
            setRefreshing(false)
        }, 1500);
    }

    return (
        <ScrollView refreshControl={
            <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
            />
        }>
            
        </ScrollView>
    )
}

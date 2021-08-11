import React from 'react'
import Icon from "react-native-vector-icons/Ionicons";
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { globalStyles } from '../theme/globalStyles';
import { TouchableOpacity } from 'react-native';

interface MenuItem {
    name: string;
    icon: string;
    component: string;
}

const menuItems: MenuItem[] = [
    {
        name: 'Animations',
        icon: 'cube-outline',
        component: 'AnimationScreen'
    },
    {
        name: 'Animations 2',
        icon: 'albums-outline',
        component: 'Animation2Screen'
    }
]

const Item = ({ name, icon }: MenuItem) => (
    <View style={styles.item}>
        <View style={{flexDirection: 'row'}}>
            <Icon name={icon} size={25} color="gray" />
            <Text style={styles.itemText}>{name}</Text>
        </View>
        <Icon name='chevron-forward-outline' size={25} color='gray' />
    </View>
  );
  

export const HomeScreen = ({navigation}: any) => {
    const renderItem = ({ item }: {item: MenuItem}) => (
        <TouchableOpacity onPress={() => navigation.navigate(item.component)}>
            <Item 
                name={item.name} 
                icon={item.icon} 
                component={item.component} 
            />
        </TouchableOpacity>
    )

    return (
        <FlatList
            data={menuItems}
            renderItem={renderItem}
            keyExtractor={item => item.icon}
            style={{...globalStyles.container}}
        />
    )
}

const styles = StyleSheet.create({
    container: {
      marginTop:  0,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    itemText: {
        fontSize: 16,
        marginLeft: 10
    }
  });
  
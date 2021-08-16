import React, { useState } from 'react'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { ImageSourcePropType, Text, View, Image } from 'react-native';
import { Dimensions } from 'react-native';

interface Slide {
    title: string;
    desc:  string;
    img:   ImageSourcePropType;
}

const slides: Slide[] = [
    {
        title: 'Titulo 1',
        desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
        img: require('../assets/slide-1.png')
    },
    {
        title: 'Titulo 2',
        desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
        img: require('../assets/slide-2.png')
    },
    {
        title: 'Titulo 3',
        desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
        img: require('../assets/slide-3.png')
    },
]

const {width} = Dimensions.get('window')

export const SlideScreen = () => {
    const [slideIndex, setslideIndex] = useState(0)

    const renderItem = (item: Slide) => {
        return (
            <View style={{
                flex: 1, 
                alignItems: 'center', 
                justifyContent: 'center', 
                backgroundColor: '#fff'
            }}>
                <>
                    <Image source={item.img} style={{width: 350, height: 300, resizeMode: 'center'}} />
                    <Text>{item.title}</Text>
                    <Text>{item.desc}</Text>
                </>
            </View>
        )
    }

    return (
        <>
            <Carousel
                data={slides}
                renderItem={({item}) => renderItem(item) }
                sliderWidth={width}
                itemWidth={width}
                layout='tinder'
                onSnapToItem={(index) => setslideIndex(index)}
            />
            <Pagination
                dotsLength={slides.length}
                activeDotIndex={slideIndex}
                dotStyle={{
                    backgroundColor: 'tomato'
                }}
            />
        </>
    )
}

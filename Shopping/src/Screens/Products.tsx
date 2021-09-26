import React, { useState } from 'react';
import { Button, Image, Text, View } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export const Products = () => {
  const [imgTemp, setImgTemp] = useState<string | undefined>(undefined);
  const openCamera = () => {
    launchCamera(
      {
        mediaType: 'photo',
        quality: 0.7,
      },
      resp => {
        if (resp.didCancel || !resp.assets) {
          return;
        }

        setImgTemp(resp.assets[0].uri);
      },
    );
  };

  const openGallery = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 0.7,
      },
      resp => {
        if (resp.didCancel || !resp.assets) {
          return;
        }

        setImgTemp(resp.assets[0].uri);
      },
    );
  };

  return (
    <View>
      <Text>Products</Text>
      <Button title="Camera" onPress={openCamera} />
      <Button title="Gallery" onPress={openGallery} />
      {imgTemp && (
        <Image
          source={{ uri: imgTemp }}
          style={{ width: '100%', height: 300 }}
        />
      )}
    </View>
  );
};

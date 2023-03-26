import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import {GalleryList} from '../../components/Gallery/GalleryList';
import {GalleryImage} from '../../components/Gallery/types';

import {colors} from '../../styles/base';

export const GalleryScreen = () => {
  const [images, setImages] = useState<GalleryImage[]>([
    {
      id: 1,
      src: 'text',
    },
    {
      id: 2,
      src: 'text',
    },
    {
      id: 3,
      src: 'text',
    },
    {
      id: 4,
      src: 'text',
    },
    {
      id: 5,
      src: 'text',
    },
    {
      id: 6,
      src: 'text',
    },
    {
      id: 7,
      src: 'text',
    },
    {
      id: 8,
      src: 'text',
    },
    {
      id: 9,
      src: 'text',
    },
    {
      id: 10,
      src: 'text',
    },
  ]);

  return (
    <View style={styles.container}>
      <GalleryList data={images} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

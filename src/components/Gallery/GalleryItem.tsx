import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {colors, radiuses} from '../../styles/base';

type GalleryItemProps = {
  src: string;
};

export const GalleryItem: React.FC<GalleryItemProps> = ({src}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: src}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    backgroundColor: colors.lightGray,
    shadowColor: colors.black,
    borderRadius: radiuses.md,
    elevation: 2,
  },
});

import React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import {GalleryItem} from './GalleryItem';
import {GalleryImage} from './types';

import {spacings} from '../../styles/base';

type GalleryListProps = {
  data: GalleryImage[];
};

const numColumns = 2;

export const GalleryList: React.FC<GalleryListProps> = ({data}) => {
  return (
    <FlatList
      data={data}
      columnWrapperStyle={styles.wrapperContainer}
      horizontal={false}
      numColumns={numColumns}
      renderItem={image => (
        <GalleryItem src={image.item.src} key={image.item.id} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: spacings.md,
  },
  wrapperContainer: {
    marginVertical: spacings.md / 2,
    gap: spacings.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

import React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import {colors, font, spacings} from '../../styles/base';

import {NewsItem} from './NewsItem';
import {News} from './types';

type NewsListProps = {
  data: News[];
};

export const NewsList: React.FC<NewsListProps> = ({data}) => {
  return (
    <FlatList
      data={data}
      style={styles.container}
      renderItem={newsData => (
        <NewsItem data={newsData.item} key={newsData.item.id} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacings.md,
  },
  title: {
    display: 'flex',
    color: colors.text,
    fontSize: font.h2,
    lineHeight: 50,
    height: 50,
    backgroundColor: colors.white,
  },
});

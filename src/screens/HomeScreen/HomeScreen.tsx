import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import {NewsList} from '../../components/News/NewsList';
import {News} from '../../components/News/types';

import {colors} from '../../styles/base';

const date = new Date().toLocaleDateString();

export const HomeScreen = () => {
  const [news, setNews] = useState<News[]>([
    {
      id: 1,
      title: 'Title',
      date: date,
      description: 'Description',
    },
    {
      id: 2,
      title: 'Title',
      date: date,
      description: 'Description',
    },
    {
      id: 3,
      title: 'Title',
      date: date,
      description: 'Description',
    },
    {
      id: 5,
      title: 'Title',
      date: date,
      description: 'Description',
    },
    {
      id: 6,
      title: 'Title',
      date: date,
      description: 'Description',
    },
    {
      id: 7,
      title: 'Title',
      date: date,
      description: 'Description',
    },
  ]);

  return (
    <View style={styles.container}>
      <NewsList data={news} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

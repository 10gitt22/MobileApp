import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {colors, font, radiuses, spacings} from '../../styles/base';
import {News} from './types';

type NewsItemProps = {
  data: News;
};

export const NewsItem: React.FC<NewsItemProps> = ({data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={[styles.text, styles.infoTitle]}>{data.title}</Text>
        <Text style={[styles.text, styles.infoDate]}>{data.date}</Text>
        <Text
          numberOfLines={3}
          ellipsizeMode={'tail'}
          style={[styles.text, styles.infoDescription]}>
          {data.description}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: spacings.md,
    alignItems: 'flex-end',
    width: '100%',
    height: 200,
    backgroundColor: colors.lightGray,
    position: 'relative',
    gap: spacings.md,
    borderRadius: radiuses.lg,
    marginVertical: spacings.sm,
  },
  photoText: {
    color: colors.text,
  },
  info: {},
  infoTitle: {
    fontWeight: '700',
    fontSize: font.lg,
  },
  infoDate: {
    color: colors.gray,
  },
  infoDescription: {
    fontWeight: '300',
  },
  text: {
    color: colors.text,
    fontSize: font.md,
  },
});

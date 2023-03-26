import {Text, StyleSheet} from 'react-native';
import React from 'react';
import {colors, font} from '../../styles/base';

export const Logo = () => {
  return <Text style={styles.logo}>MobileApp</Text>;
};

const styles = StyleSheet.create({
  logo: {
    color: colors.text,
    fontWeight: '700',
    fontSize: font.h1,
  },
});

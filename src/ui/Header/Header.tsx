import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {BottomTabHeaderProps} from '@react-navigation/bottom-tabs';
import {Logo} from '../Logo/Logo';
import {colors, font, paddings, sizes} from '../../styles/base';

export const Header: React.FC<BottomTabHeaderProps> = props => {
  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.screenText}>{props.route.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: sizes.header,
    width: '100%',
    paddingHorizontal: paddings.md,
    backgroundColor: colors.white,
  },
  screenText: {
    color: colors.text,
    fontSize: font.md,
  },
});

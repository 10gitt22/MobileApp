import React from 'react';
import {View, StyleSheet} from 'react-native';
import {BottomTabHeaderProps} from '@react-navigation/bottom-tabs';
import {Logo} from '../../ui/Logo/Logo';
import {colors, spacings, sizes} from '../../styles/base';

export const Header: React.FC<BottomTabHeaderProps> = props => {
  return (
    <View style={styles.container}>
      <Logo />
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
    paddingHorizontal: spacings.md,
    backgroundColor: colors.white,
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 0.5,
    shadowColor: colors.black,
    elevation: 3,
  },
});

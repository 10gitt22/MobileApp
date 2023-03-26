import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleSheet,
  TextStyle,
  StyleProp,
} from 'react-native';
import {colors, font, radiuses} from '../../styles/base';

type ButtonProps = {
  title: string;
  titleStyle?: StyleProp<TextStyle>;
} & TouchableOpacityProps;

export const Button: React.FC<ButtonProps> = ({
  title,
  titleStyle,
  style: parentStyles,
  ...props
}) => {
  return (
    <TouchableOpacity style={[styles.container, parentStyles]} {...props}>
      <Text style={[styles.text, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.text,
    fontSize: font.md,
    height: 50,
    borderRadius: radiuses.md,
  },
  text: {
    color: colors.white,
  },
});

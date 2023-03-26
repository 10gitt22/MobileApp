import React from 'react';
import {
  View,
  Text,
  TextInput,
  TextInputProps,
  StyleSheet,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {colors, font, radiuses, spacings} from '../../styles/base';

type InputProps = {
  label: string;
  labelStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
} & TextInputProps;

export const Input: React.FC<InputProps> = ({
  label,
  style: parentStyles,
  labelStyle,
  containerStyle,
  ...props
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
      <TextInput style={[styles.input, parentStyles]} {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  label: {
    color: colors.text,
    fontSize: font.md,
    marginBottom: 3,
  },
  input: {
    color: colors.text,
    width: '100%',
    borderColor: colors.gray,
    borderWidth: 1,
    height: 50,
    borderRadius: radiuses.md,
    fontSize: font.md,
    paddingHorizontal: spacings.md,
  },
});

import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {Button} from '../../ui/Button/Button';
import {Input} from '../../ui/Input/Input';

import {colors, font, spacings} from '../../styles/base';

export const RegistrationForm = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registration</Text>
      <Input label="Email" />
      <Input label="First name" />
      <Input label="Last name" />
      <Input label="Password" secureTextEntry={true} />
      <Input label="Confirm password" secureTextEntry={true} />
      <Button title="Apply" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: spacings.md,
    paddingHorizontal: spacings.md,
    gap: 10,
  },
  title: {
    color: colors.text,
    fontSize: font.h2,
    fontWeight: '500',
    marginBottom: spacings.md,
  },
});

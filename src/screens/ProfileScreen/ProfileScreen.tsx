import React from 'react';
import {StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {RegistrationForm} from '../../components/RegistrationForm/RegistrationForm';
import {colors} from '../../styles/base';

export const ProfileScreen = () => {
  return (
    <KeyboardAwareScrollView style={styles.container}>
      <RegistrationForm />
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

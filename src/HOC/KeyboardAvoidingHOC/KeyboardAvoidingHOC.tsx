import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { isIos } from 'utils';

export const KeyboardAvoidingHOC = ({
  children,
}: {
  children: JSX.Element;
}) => {
  return isIos ? (
    <KeyboardAvoidingView behavior="padding">{children}</KeyboardAvoidingView>
  ) : (
    children
  );
};

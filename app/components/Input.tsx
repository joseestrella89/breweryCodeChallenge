import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import { Input as InputBase } from '@ui-kitten/components';

interface Props {
    placeholder: string;
    value: string;
    styles: StyleProp<TextStyle>;
    onChangeText: (text: string) => void;
}

export const Input = ({ placeholder, value, styles, onChangeText}: Props) => (
    <InputBase
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={styles}
    />
);

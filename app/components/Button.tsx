import React, { ReactElement } from 'react';
import { TextProps } from 'react-native';
import { Button as ButtonBase } from '@ui-kitten/components';

export const SIZE_BUTTON = {
    tiny: 'tiny',
    small: 'small',
    medium: 'medium',
    large: 'large',
    giant: 'giant',
} as const;

type SIZES = typeof SIZE_BUTTON[keyof typeof SIZE_BUTTON];

export const TYPE_BUTTON = {
    solid: 'filled',
    outline: 'outline',
    clear: 'ghost',
} as const;

type TYPES = typeof TYPE_BUTTON[keyof typeof TYPE_BUTTON];

interface Props {
    type: TYPES;
    size?: SIZES;
    disabled?: boolean;
    children: ReactElement | ((TextProps) => ReactElement)
    onPress: () => void;
};

export const Button = ({ type, size, children, disabled, onPress }: Props) => (
    <ButtonBase
        appearance={type}
        size={size}
        onPress={onPress}
        style={disabled ? { backgroundColor: 'transparent' } : {}}
        disabled={disabled}
    >
        {children}
    </ButtonBase>
);
import React from 'react';
import { Icon as IconBase } from '@ui-kitten/components';

interface Props {
    name: string;
    color?: string;
    height?: string | number;
    width?: string | number;
}

export const Icon = ({ color, name, height, width }: Props) => (
  <IconBase name={name} height={height} width={width} fill={color} />
);

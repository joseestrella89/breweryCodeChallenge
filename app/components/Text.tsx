import { Text as TextBase } from '@ui-kitten/components';
import { StyleProp, TextStyle } from 'react-native';

export const CATEGORY = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    s1: 's1',
    s2: 's2',
    p1: 'p1',
    p2: 'p2',
    c1: 'c1',
    c2: 'c2',
    label: 'label',
} as const;

type CATEGORIES = typeof CATEGORY[keyof typeof CATEGORY];

interface Props {
    category: CATEGORIES;
    children: string;
    style?: StyleProp<TextStyle> 
}

export const Text = ({ category, children, style }: Props) => (
    <TextBase category={category} style={style}>{children}</TextBase>
);

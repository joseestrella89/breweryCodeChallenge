import React from 'react';
import { ListRenderItem, StyleProp, ViewStyle } from 'react-native';
import { Divider, List } from '@ui-kitten/components';

interface Item {
    id: string;
    name: string;
}

interface Props<T> {
    items: T[];
    renderItem: ListRenderItem<T>;
    styles?: StyleProp<ViewStyle>;
}

export const ListItems = <T extends Item>({
    items,
    styles,
    renderItem,
}: Props<T>) => (
    <List
        style={styles}
        data={items}
        ItemSeparatorComponent={Divider}
        renderItem={renderItem}
    />
);

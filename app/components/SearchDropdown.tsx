import React from 'react';
import { Autocomplete, AutocompleteItem } from '@ui-kitten/components';

interface Item {
    id: string;
    name: string;
}

export const SIZE = {
    small: 'small',
    medium: 'medium',
    large: 'large',
} as const;

type SIZES = typeof SIZE[keyof typeof SIZE];

interface Props<T> {
    items: T[];
    placeholder: string;
    size?: SIZES;
    value: string;
    onChangeText: (text: string) => void;
    onSelect: (item: T) => void;
}

export const SearchDropdown = <T extends Item>({
    items,
    placeholder,
    value,
    size,
    onSelect,
    onChangeText,
}: Props<T>) => {
    const renderOption = (item: T, index: number) => (
        <AutocompleteItem
            key={index}
            title={item.name}
        />
    );

    const onItemSelected = (index: number) => {
        onSelect(items[index]);
    };

    return (
        <Autocomplete
            placeholder={placeholder}
            value={value}
            onSelect={onItemSelected}
            size={size}
            onChangeText={onChangeText}>
            { items.map(renderOption) }
        </Autocomplete>
    );
};

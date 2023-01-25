import React from 'react';
import { View } from 'react-native';
import { ListItem } from '@ui-kitten/components';

import { Brewery } from '@Models/Brewery';
import { Text, CATEGORY } from '@Components/Text';
import { Button, TYPE_BUTTON, SIZE_BUTTON } from '@Components/Button';
import { Icon } from '@Components/Icon';
import Colors from '@Constants/colors';
import Styles from '@Screens/Breweries/styles/BreweryItemStyle';

interface Props {
    brewery: Brewery;
    onPress: (brewery: Brewery) => void;
    goUrl: (url: string) => void;
}

export const BreweryItem = ({ brewery, onPress, goUrl }: Props) => {
    const hasInValidWebsiteUrl = !brewery.websiteUrl;

    const handleOnSelectedItem = () => {
        onPress(brewery);
    };

    const handleOpenUrl = () => {
        goUrl(brewery.websiteUrl);
    }

    return (
        <ListItem
            onPress={handleOnSelectedItem}
        >
            <View style={Styles.container}>
                <View style={Styles.descriptionContainer}>
                    <Text style={Styles.textMargin} category={CATEGORY.s1}>{brewery.name}</Text>
                    <Text style={Styles.textMargin} category={CATEGORY.p1}>{brewery.breweryType}</Text>
                    <Text style={Styles.textMargin} category={CATEGORY.p2}>{`${brewery.city}, ${brewery.country}`}</Text>
                    <Text style={Styles.textMargin} category={CATEGORY.p2}>{brewery.phone}</Text>
                </View>
                <Button
                    type={TYPE_BUTTON.clear}
                    size={SIZE_BUTTON.small}
                    disabled={hasInValidWebsiteUrl}
                    onPress={handleOpenUrl}
                >
                    <Icon
                        name="globe-outline"
                        width={28}
                        height={28}
                        color={hasInValidWebsiteUrl ? Colors.DISABLED_TEXT_COLOR : Colors.PRIMARY_COLOR}
                    />
                </Button>
            </View>
        </ListItem>
    );
};
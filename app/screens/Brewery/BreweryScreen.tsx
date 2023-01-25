import React, { useEffect, useState } from 'react';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native'; 
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Container } from '@Components/Container';
import { NavigatorParamsList } from '@Navigators/AuthenticatedStack';
import { RouteNames } from '@Navigators/RouteNames';
import { getBreweryById } from '@Screens/Brewery/userCases/getBreweryById';
import { Brewery } from '@Models/Brewery';
import { Card, Spinner } from '@ui-kitten/components';
import { Text, CATEGORY } from '@Components/Text';
import Styles from '@Screens/Brewery/styles/BreweryScreenStyle';
import { Icon } from '@Components/Icon';
import Colors from '@Constants/colors';
import { Map } from '@Components/Map';
import { openURL } from '@Services/deeplinking/browser';

interface Props extends NativeStackScreenProps<NavigatorParamsList, RouteNames.Brewery> {};

const BreweryScreen = (props: Props): JSX.Element => {
    const [brewery, setBrewery] = useState<Brewery | null>(null);
    useEffect(() => {
        getBreweryById(props.route.params.breweryId)
            .then((brewery: Brewery) => {
                setBrewery(brewery);
            })
            .catch((e) => {
                // setError('Something wrong has happened');
            });
    }, []);

    if (brewery === null) {
        return (
            <Container>
                <Spinner></Spinner>
            </Container>
        );
    }

    const handleGoUrl = () => {
        openURL(brewery.websiteUrl);
    }

    const renderWebsiteUrl = () => (
        brewery.websiteUrl && (
            <Card>
                <TouchableOpacity onPress={handleGoUrl} style={Styles.websiteInfoContainer}>
                    <Icon
                        name="globe-outline"
                        width={28}
                        height={28}
                        color={Colors.PRIMARY_COLOR}
                    />
                    <Text style={Styles.websiteText} category='s1'>{brewery.websiteUrl}</Text>
                </TouchableOpacity>
            </Card>
        )
    )

    const getMarker = () => ({
        title: brewery.name,
        description: '',
        latlng: {
            latitude: Number(brewery.latitude),
            longitude: Number(brewery.longitude)
        }
    });

    const renderMap = () => {
        const marker = getMarker();
        return (
            <Map
                style={Styles.map}
                markers={[marker]}
                region={{
                    latitude: marker.latlng.latitude,
                    longitude: marker.latlng.longitude,
                    latitudeDelta: 0.02,
                    longitudeDelta: 0.01,
                }}
            />
        )
    };

    return (
        <ScrollView>
            <Container>
                <Image
                    source={require('@Assets/images/brewery.jpg')}
                    style={Styles.image}
                    resizeMode={'cover'}
                />
                <Card>
                    <Text category={CATEGORY.h6}>{brewery.name}</Text>
                    <Text category={CATEGORY.s1}>{`${brewery.street}, ${brewery.postalCode}, ${brewery.city}`}</Text>
                    <Text category={CATEGORY.s1}>{`${brewery.state}, ${brewery.country}`}</Text>
                </Card>
                {renderWebsiteUrl()}
                {renderMap()}
            </Container>
        </ScrollView>
    );
};

export default BreweryScreen;
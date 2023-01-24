import React, { useEffect } from 'react';
import { View } from 'react-native';
import BreweryRepositoryNetwork from '@Services/repositories/BreweryRepositoryNetwork';
import NetworkServiceFetch from '@Services/NetworkServiceFetch';

const BreweriesScreen = (): JSX.Element => {
    useEffect(() => {
        const repo = new BreweryRepositoryNetwork(new NetworkServiceFetch());
        repo.searchByKeyword({ query: 'bre',  perPage: 10 })
            .then((response) => {
                console.log(response);
            })
    }, []);

    return (
        <View />
    );
};

export default BreweriesScreen;
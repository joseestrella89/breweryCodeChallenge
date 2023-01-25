import MapView, { Marker, LatLng, PROVIDER_GOOGLE, Region } from 'react-native-maps';
import { StyleProp, ViewStyle } from 'react-native';

interface Point {
    latlng: LatLng;
    title?: string;
    description?: string;
}

interface Props {
    markers: Point[];
    region?: Region;
    style?: StyleProp<ViewStyle>
}

export const Map = ({ markers, region, style }: Props) => {
    return (        
        <MapView provider={PROVIDER_GOOGLE} style={style} region={region}>
            {markers.map((marker, index) => (
                <Marker
                    key={index}
                    coordinate={marker.latlng}
                    title={marker.title}
                    
                    description={marker.description}
                />
            ))}
        </MapView>
    );
};
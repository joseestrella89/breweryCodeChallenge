import { Linking } from 'react-native';

export const openURL = async (url: string): Promise<boolean> => {
    const supported = await Linking.canOpenURL(url);
    if (!supported) {
        return false;
    }
    try {
        await Linking.openURL(url);
    } catch (e) {
        return false;
    }
    return true;
};

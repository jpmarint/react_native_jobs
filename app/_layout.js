import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const Layout = () => {
    //Import fonts
    const [fontsLoaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf')
    });

    // Ensures that the fonts are applied
    const onLayoutRootView = useCallback(async () => {
        if(fontsLoaded){
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    // Otherwise it shows nothing
    if(!fontsLoaded) return null;

    return <Stack onLayout={onLayoutRootView} />;
}

export default Layout;


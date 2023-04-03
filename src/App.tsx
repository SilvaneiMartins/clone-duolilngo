/**
 * Data: 17 / 11 / 2021
 * Projeto: Duolingo Cursos
 * Developer: Silvanei Martins
 
 * Contato: silvaneimartins_rcc@hotmail.com
 */

/**
 * Componente criado pelo proprio framework;
 */
import React from "react";
import AppLoading from "expo-app-loading";
import { View, StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";

import {
    useFonts,
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";


/**
 * Componente criado pelo proprio desenvolvedor;
 */
import Routes from "../src/routes";
import theme from "./styles/theme";

const App: React.FC = () => {
    const [areFontLoading, error] = useFonts({
        Poppins_200ExtraLight,
        Poppins_300Light,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold,
        Poppins_800ExtraBold,
    });

    if (!areFontLoading) {
        if (error) {
            console.log("Erro ao carregar as fontes:" + error.message);
        }
        return <AppLoading />;
    }

    return (
        <ThemeProvider theme={theme}>
            <NavigationContainer>
                <StatusBar
                    translucent
                    barStyle="dark-content"
                    backgroundColor={theme.colorDuo.white}
                />

                <View
                    style={{
                        backgroundColor: theme.colorDuo.white,
                        flex: 1,
                    }}
                >
                    <Routes />
                </View>
            </NavigationContainer>
        </ThemeProvider>
    );
}

export default App;

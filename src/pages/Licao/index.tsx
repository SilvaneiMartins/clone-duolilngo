/**
 * Data: 17 / 11 / 2021
 * Projeto: Duolingo Cursos
 * Developer: Silvanei Martins
 
 * Contato: silvaneimartins_rcc@hotmail.com
 */

/**
 * Componente criado pelo proprio framework;
 */
import React, { useState } from "react";
import { Text } from "react-native";
import { useTheme } from "styled-components/native";

/**
 * Componente criado pelo proprio desenvolvedor;
 */
import PNGFIRE from "../../assets/png/fire.png";
import PNGCOROA from "../../assets/png/coroa.png";
import PNGCORACAO from "../../assets/png/coracao.png";
import PNGUSA from "../../assets/png/rectangule_usa.png";

import Bandeira from '../../components/bandeira';
import Coroa from '../../components/coroa';
import Fire from '../../components/fire';
import Diamont from '../../components/diamont';

import {
    Headers,
    ContentLeft,
    SvgBandedeira,
    ContentRight,
    SvgCoroa,
    SvgFire,
    SvgDiamont,
    Container,
    ButtonLeft,
    ButtonRight,
    QtdeCoroa,
    QtdeFire,
    QtdeDiamont,
} from "./styles";

const Loja: React.FC = () => {
    const theme = useTheme();

    const [isVisibleBandeira, setIsVisibleBandeira] = useState(false);
    const [isVisibleCoroa, setIsVisibleCoroa] = useState(false);
    const [isVisibleFire, setIsVisibleFire] = useState(false);
    const [isVisibleDiamont, setIsVisibleDiamont] = useState(false);

    const handleBandeira = () => {
        setIsVisibleBandeira(!isVisibleBandeira);
    };

    const handleCoroa = () => {
        setIsVisibleCoroa(!isVisibleCoroa);
    };

    const handleFire = () => {
        setIsVisibleFire(!isVisibleFire);
    };

    const handleDiamont = () => {
        setIsVisibleDiamont(!isVisibleDiamont);
    };

    return (
        <>
            <Headers>
                <ContentLeft>
                    <ButtonLeft onPress={handleBandeira}>
                        <SvgBandedeira source={PNGUSA} resizeMode="contain" />
                    </ButtonLeft>
                </ContentLeft>

                <ContentRight>
                    <ButtonRight onPress={handleCoroa}>
                        <SvgCoroa source={PNGCOROA} resizeMode="contain" />
                        <QtdeCoroa>78</QtdeCoroa>
                    </ButtonRight>
                    <ButtonRight onPress={handleFire}>
                        <SvgFire source={PNGFIRE} resizeMode="contain" />
                        <QtdeFire>654</QtdeFire>
                    </ButtonRight>
                    <ButtonRight onPress={handleDiamont}>
                        <SvgDiamont source={PNGCORACAO} resizeMode="contain" />
                        <QtdeDiamont>35</QtdeDiamont>
                    </ButtonRight>
                </ContentRight>
            </Headers>
            <Container>
                {isVisibleBandeira && (
                    <Bandeira />
                )}
                {isVisibleCoroa && (
                    <Coroa />
                )}
                {isVisibleFire && (
                    <Fire />
                )}
                {isVisibleDiamont && (
                    <Diamont />
                )}
                <Text>LICAO...</Text>
            </Container>
        </>
    );
};

export default Loja;

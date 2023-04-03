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
import { Text, View } from "react-native";

/**
 * Componente criado pelo proprio desenvolvedor;
 */
import SVGUSA from "../../assets/png/rectangule_usa.png";
import SVGBRASIL from "../../assets/png/rectangule_brasil.png";
import IMGTRIANGULO from "../../assets/png/triangulo.png";

import {
    ContentLeft,
    ButtonLeft,
    ViewButtonLeft,
    ViewButtonRight,
    ViewButtonCurso,
    ContentRight,
    SvgBandedeiraUSA,
    SvgBandedeiraBRASIL,
    ButtonRight,
    SvgIconSelecet,
    TitleUsa,
    TitleBrasil,
    TitleCurso,
    ImgTriangulo,
    Container,
    Content,
} from "./styles";
import theme from "../../styles/theme";

const fire: React.FC = () => {
    return (
        <Container>
            <ImgTriangulo source={IMGTRIANGULO} resizeMode="contain" />
            <Content>
                <Text>Componente Fire</Text>
            </Content>
        </Container>
    );
};

export default fire;

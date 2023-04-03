/**
 * Data: 17 / 11 / 2021
 * Projeto: Duolingo Cursos
 * Developer: Silvanei Martins
 
 * Contato: silvaneimartins_rcc@hotmail.com
 */

/**
 * Componente criado pelo proprio framework;
 */
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

/**
 * Estilização do header do componente;
 */
export const ContentLeft = styled.View`
    width: 70%;
    flex-direction: row;
    align-items: center;
    margin-left: ${RFValue(15)}px;
`;

export const SvgBandedeiraUSA = styled.Image`
    width: ${RFValue(50)}px;
    height: ${RFValue(50)}px;
`;

export const SvgBandedeiraBRASIL = styled.Image`
    width: ${RFValue(50)}px;
    height: ${RFValue(50)}px;
`;

export const ContentRight = styled.View`
    align-items: center;
    flex-direction: row;
    justify-content: center;
    margin-left: ${RFValue(5)}px;
    margin-right: ${RFValue(10)}px;
    margin-top: ${RFValue(10)}px;

    border-width: ${RFValue(0.5)}px;
    border-radius: ${RFValue(5)}px;
`;

export const ButtonLeft = styled(BorderlessButton)`
    padding: ${RFValue(5)}px ${RFValue(5)}px;
`;

export const ButtonRight = styled(BorderlessButton)`
    justify-content: center;
    padding: ${RFValue(0)}px ${RFValue(10)}px;
`;

export const SvgIconSelecet = styled(Ionicons)`
    font-size: ${RFValue(30)}px;
`;

export const ViewButtonLeft = styled.View`
    align-items: center;
`;

export const ViewButtonRight = styled.View`
    align-items: center;
`;

export const TitleUsa = styled.Text`
    font-size: ${RFValue(14)}px;
    margin-top: ${RFValue(-5)}px;
    font-family: ${({ theme }) => theme.fonts.light};
`;

export const TitleBrasil = styled.Text`
    font-size: ${RFValue(14)}px;
    margin-top: ${RFValue(-5)}px;
    font-family: ${({ theme }) => theme.fonts.light};
`;

export const ViewButtonCurso = styled.View`
    align-items: center;
`;

export const TitleCurso = styled.Text`
    font-size: ${RFValue(14)}px;
    margin-top: ${RFValue(5)}px;
    margin-right: ${RFValue(5)}px;
    font-family: ${({ theme }) => theme.fonts.light};
`;


/**
 * Estilização do container do componente;
 */
export const Container = styled.View`
    width: 100%;
    height: ${RFValue(320)}px;
    background-color: ${({ theme }) => theme.colorDuo.white};


    border-style: solid;
    border-top-width: ${RFValue(0.5)}px;
    border-top-color: ${({ theme }) => theme.colorDuo.grey_100};
`;

export const Content = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: ${RFValue(15)}px;
`;

export const ImgTriangulo = styled.Image`
    opacity: 0.3;
    width: ${RFValue(20)}px;
    height: ${RFValue(20)}px;
    margin-left: ${RFValue(277)}px;
    margin-top: ${RFValue(-15)}px;
`;

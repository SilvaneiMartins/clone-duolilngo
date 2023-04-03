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
import { BorderlessButton } from 'react-native-gesture-handler';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

/**
 * Estilização do header do componente;
 */
export const Headers = styled.View`
    flex-direction: row;
    padding: ${RFValue(5)}px;
    background-color: ${({ theme }) => theme.colorDuo.white};
`;

export const ContentLeft = styled.View`
    width: ${RFValue(20)}%;
    margin-left: ${RFValue(5)}px;
    margin-top: ${RFPercentage(5)}px;
`;

export const SvgBandedeira = styled.Image`
    width: ${RFValue(45)}px;
    height: ${RFValue(35)}px;
`;

export const ContentRight = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    margin-top: ${RFPercentage(5)}px;
`;

export const SvgCoroa = styled.Image`
    width: ${RFValue(35)}px;
    height: ${RFValue(35)}px;
`;

export const SvgFire = styled.Image`
    width: ${RFValue(35)}px;
    height: ${RFValue(35)}px;`;

export const SvgDiamont = styled.Image`
    width: ${RFValue(35)}px;
    height: ${RFValue(35)}px;
`;

export const ButtonLeft = styled(BorderlessButton)`
    padding: ${RFValue(5)}px ${RFValue(5)}px;
`;

export const ButtonRight = styled(BorderlessButton)`
    flex-direction: row;
    align-items: center;
    margin-right: ${RFValue(5)}px;
    padding: ${RFValue(5)}px ${RFValue(10)}px;
`;

export const QtdeCoroa = styled.Text`
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colorDuo.gray};
    font-family: ${({ theme }) => theme.fonts.light};
`;

export const QtdeFire = styled.Text`
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colorDuo.gray};
    font-family: ${({ theme }) => theme.fonts.light};
`;

export const QtdeDiamont = styled.Text`
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colorDuo.gray};
    font-family: ${({ theme }) => theme.fonts.light};
`;

/**
 * Estilização do corpo do componente;
 */
export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colorDuo.white_100};
`;

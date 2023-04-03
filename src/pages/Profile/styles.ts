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
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

/**
 * Estilização do header do componente;
 */
 export const Headers = styled.View`
    flex-direction: row;
    padding: ${RFPercentage(5)}px;
    background-color: ${({ theme }) => theme.colorDuo.white};
`;

/**
 * Estilização do corpo do componente;
 */
 export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colorDuo.white_100};
`;

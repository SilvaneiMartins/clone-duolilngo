import styled from 'styled-components/native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

export const Headers = styled.View`
    margin-top: ${RFPercentage(10)}px;
    flex-direction: row;
`;

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colorDuo.white};
`;

export const Button = styled.TouchableOpacity`
    width: 160px;
    height: 50px;
    padding-left: 30px;
    flex-direction: row;
    align-items: center;
`;

export const Crown = styled.View`
    height: auto;
    flex-direction: row;
`;

export const Heading = styled.Text`
    width: 80px;
    font-size: 17px;
    padding-left: 5px;
    color: ${({ theme }) => theme.colorDuo.orange};
    font-family: ${({ theme }) => theme.fonts.light};
`;

export const ContainerCourse = styled.TouchableOpacity`
    width: 70px;
    height: 60px;
    /* border : solid; */
    border-radius: 10px;
    border-width: 10px;
    margin-right: 20px;
    align-items: center;
    flex-direction: column;
    border-color : ${({ theme }) => theme.colorDuo.blue};
`;

export const Course = styled.Text`
    width: 90px;
    font-size: 17px;
    padding-left: 5px;
    color: ${({ theme }) => theme.colorDuo.white};
    font-family: ${({ theme }) => theme.fonts.light};
`;

export const Ofensive = styled.Text`
    width: 80px;
    font-size: 17px;
    padding-right: 20px;
    color: ${({ theme }) => theme.colorDuo.orange_black};
    font-family: ${({ theme }) => theme.fonts.light};
`;

export const Lingots = styled.Text`
    width: 80px;
    font-size: 17px;
    color: ${({ theme }) => theme.colorDuo.red_black};
    font-family: ${({ theme }) => theme.fonts.light};
`;

export const Line = styled.Text`
    height: 40px;
    width: 400px;
    background-color: red;
`;

export const ImgIdioma = styled.Image`
    width: ${RFValue(50)}px;
    height: ${RFValue(30)}px;
`;

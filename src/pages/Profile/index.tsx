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
import { Text } from "react-native";


/**
 * Componente criado pelo proprio desenvolvedor;
 */
import { Headers, Container } from "./styles";

const Profile: React.FC = () => {
    return (
        <>
            <Headers>
                <Text>Header do componente</Text>
            </Headers>
            <Container>
                <Text>PROFILE...</Text>
            </Container>
        </>
    );
};

export default Profile;

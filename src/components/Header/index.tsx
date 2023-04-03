/**
 * Componente criado pelo proprio desenvolvedor;
 */
import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";

import Constants from "expo-constants";
import { Platform } from "react-native";
import { SvgUri } from "react-native-svg";
// import { RectButton } from 'react-native-gesture-handler';
import Tooltip from "react-native-walkthrough-tooltip";
import { FontAwesome } from "@expo/vector-icons";

import SvgUsa from "../../assets/bandeira/usa.svg";

/**
 * Componente criado pelo proprio desenvolvedor;
 */
import {
    Headers,
    Container,
    Heading,
    Ofensive,
    Lingots,
    Button,
    Course,
    ContainerCourse,
    ImgIdioma,
} from "./styles";

const Header: React.FC = () => {
    return (
        <>
            <Headers>
                <ImgIdioma source={SvgUsa} resizeMode="contain" />

                <SvgUri
                    width="10%"
                    height="30%"
                    uri="http://d35aaqx5ub95lt.cloudfront.net/web-ui/images/b3ede3d53c932ee30d981064671c8032.svg"
                />
                <Heading> 207</Heading>

                <SvgUri
                    width="10%"
                    height="30%"
                    uri="http://d35aaqx5ub95lt.cloudfront.net/web-ui/images/icons/398e4298a3b39ce566050e5c041949ef.svg
    "
                />
                <Ofensive>1494</Ofensive>

                <SvgUri
                    width="10%"
                    height="30%"
                    uri="http://d35aaqx5ub95lt.cloudfront.net/web-ui/images/icons/aed279fcbad509208b45ca7a17f3e8dc.svg
    "
                    // viewBox="0 0 1460 352"
                />
                <Lingots>4544</Lingots>
            </Headers>
        </>
    );
};

export default Header;

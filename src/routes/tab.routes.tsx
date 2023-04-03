import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const { Navigator, Screen } = createBottomTabNavigator();

import { SvgUri } from "react-native-svg";

import theme from '../styles/theme';

/**
 * Paginas do aplicativo;
 */
import Licao from "../pages/Licao";
import Historia from "../pages/Historia";
import Profile from "../pages/Profile";
import Ranking from "../pages/Ranking";
import Loja from "../pages/Loja";

export default function Routes() {
    return (
        <Navigator
            tabBarOptions={{
                style: {
                    height: 90,
                    paddingTop: 15,
                    paddingBottom: 25,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: theme.colorDuo.white,
                },
                tabStyle: {},
            }}
        >
            <Screen
                name="Licao"
                component={Licao}
                options={{
                    tabBarIcon: ({ size, focused }) => {
                        return (
                            <SvgUri
                                width="60px"
                                height="55px"
                                uri={
                                    focused
                                        ? "http://d35aaqx5ub95lt.cloudfront.net/web-ui/images/icons/cfd882b7f367a1971c52d2da3b8c7f1e.svg"
                                        : "http://d35aaqx5ub95lt.cloudfront.net/web-ui/images/icons/1489ea739ce8ce0fa9ed1789a71d2c03.svg"
                                }
                                fill="transparent"
                                style={{
                                    marginLeft: 10,
                                }}
                            />
                        );
                    },
                    tabBarLabel: () => {
                        return false;
                    },
                }}
            />

            <Screen
                name="Historia"
                component={Historia}
                options={{
                    tabBarIcon: ({ size, focused }) => {
                        return (
                            <SvgUri
                                width="55px"
                                height="60px"
                                uri={
                                    focused
                                        ? "http://d35aaqx5ub95lt.cloudfront.net/web-ui/images/icons/8220ba27de1710bb0d20837f2c16de36.svg"
                                        : "http://d35aaqx5ub95lt.cloudfront.net/web-ui/images/icons/dacd918ee5c8169e442b7d10a6cbab5d.svg"
                                }
                            />
                        );
                    },
                    tabBarLabel: () => {
                        return false;
                    },
                }}
            />

            <Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ size, focused }) => {
                        return (
                            <SvgUri
                                width="100%"
                                height="100%"
                                uri={
                                    focused
                                        ? "http://d35aaqx5ub95lt.cloudfront.net/web-ui/images/icons/d5da7539ff6abe13a422c11f1178f1e9.svg"
                                        : "http://d35aaqx5ub95lt.cloudfront.net/web-ui/images/icons/34684767e8a869415794c37d3c62a0be.svg"
                                }
                            />
                        );
                    },
                    tabBarLabel: () => {
                        return false;
                    },
                }}
            />

            <Screen
                name="Ranking"
                component={Ranking}
                options={{
                    tabBarIcon: ({ size, focused }) => {
                        return (
                            <SvgUri
                                width="60px"
                                height="60px"
                                uri={
                                    focused
                                        ? "https://duolingo-forum-web.duolingo.com/web-ui/images/icons/15d397666ac937fc2ddc375634cbe14e.svg"
                                        : "http://d35aaqx5ub95lt.cloudfront.net/web-ui/images/icons/a72c8b2d799d5c2db221ffc84b292d98.svg"
                                }
                            />
                        );
                    },
                    tabBarLabel: () => {
                        return false;
                    },
                }}
            />

            <Screen
                name="Loja"
                component={Loja}
                options={{
                    tabBarIcon: ({ size, focused }) => {
                        return (
                            <SvgUri
                                width="55px"
                                height="55px"
                                uri={
                                    focused
                                        ? "http://d35aaqx5ub95lt.cloudfront.net/web-ui/images/icons/99e564726836ff5a0b7269063bbf4b1e.svg"
                                        : "https://raw.githubusercontent.com/KRochaS/NextLevelWeek2/3b34881ba2f8f9e546c9d2d628ad987961b2da26/mobile/assets/new_store.svg"
                                }
                                fill="#afafaf"
                                style={{
                                    marginRight: 15,
                                }}
                            />
                        );
                    },
                    tabBarLabel: () => {
                        return false;
                    },
                }}
            />
        </Navigator>
    );
}

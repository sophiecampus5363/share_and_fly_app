import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from "../screens/HomeScreen";
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import IntroScreen from "../screens/IntroScreen";
import IntroFormScreen from "../screens/IntroFormScreen";
import carpoolSearch from "../screens/carpoolSearch";
import Accueil from "../screens/Accueil";
import carpoolProposition from "../screens/carpoolProposition";
import myAccount from "../screens/myAccount";
import Ionicons from 'react-native-vector-icons/Ionicons';

const AppStack =
    createBottomTabNavigator({

        Home: {
            screen: Accueil,
            navigationOptions: {
                title: 'Accueil',
            }
        },

        carpoolSearch: {
            screen: carpoolSearch,
            navigationOptions: {
                title: "Rechercher",
            }
        },

        carpoolProposition: {
            screen: carpoolProposition,
            navigationOptions: {
                title: "Proposer",
            }
        },

        myAccount: {
            screen: myAccount,
            navigationOptions: {
                title: "Mon compte",
            }
        }


    },


        {
            defaultNavigationOptions: ({navigation}) => ({
                tabBarIcon: ({ focused, horizontal, tintColor}) => {
                    const { routeName } = navigation.state;
                    let IconComponent = Ionicons;
                    let iconName;
                    switch (routeName){
                        case 'Home':
                            iconName = `ios-car`;
                            break;
                        case 'carpoolSearch':
                            iconName= `ios-search`;
                            break;
                        case 'carpoolProposition':
                            iconName= `ios-add`;
                            break;
                        case 'myAccount':
                            iconName= `md-person`;
                            break;
                    }

                    return <IconComponent name={iconName} size={30} color={tintColor}/>;
                },
            }),

            tabBarOptions: {
                activeBackgroundColor: 'dimgrey',
                inactiveBackgroundColor: 'dimgrey',
                activeTintColor: 'white',
                inactiveTintColor: 'gold',
                showLabel: false,
                showIcon: true

            }
        })


const AuthStack = createStackNavigator({SignIn: IntroFormScreen, Welcome: IntroScreen});

export default createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
));
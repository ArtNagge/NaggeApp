import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './src/screens/Home';
import TopPlayersScreen from './src/screens/TopPlayers';
import ProfileScreen from './src/screens/Profile';
import SettingsScreen from './src/screens/Settings';
import UserScreen from './src/screens/User';

const ProfilePage = createStackNavigator({
    Profile: ProfileScreen,
    Settings: SettingsScreen
}, {headerMode: 'none'});

const TopPlayersPage = createStackNavigator({
    Top: TopPlayersScreen,
    User: UserScreen
}, {headerMode: 'none'});

const TabNavigator = createBottomTabNavigator({
        Home: HomeScreen,
        Top: TopPlayersPage,
        Profile: ProfilePage
    }, {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName = String(routeName).toLowerCase();
                switch (iconName) {
                    case "top":
                        iconName = 'trophy';
                        break;
                    case "profile":
                        iconName = 'user';
                        break;
                }
                return <Icon name={iconName} size={25} color={tintColor} />
            }
        }),
        tabBarOptions: {
            activeTintColor: '#fff',
            inactiveTintColor: '#ad3d29',
            style: {
                height: 60,
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: 'tomato',
            },
            labelStyle: {
                fontWeight: '600'
            },
            showLabel: false
        },
        initialRouteName: "Profile"}
);

const Navigation = createAppContainer(TabNavigator);

export default function AppNavigator() {
    return <Navigation/>
};
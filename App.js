import React from 'react';
import { Text, ScrollView, View, Button, SafeAreaView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

class HomeScreen extends React.Component {
    render() {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
                <ScrollView style={{
                    flex: 1,
                    backgroundColor: '#fff',
                }}>
                    <Text>Home!</Text>
                    <Text>Home!</Text>
                    <Text>Home!</Text>
                    <Text>Home!</Text>
                    <Text>Home!</Text>
                    <Text>Home!</Text>
                    <Text>Home!</Text>
                    <Text>Home!</Text>
                    <Text>Home!</Text>
                    <Text>Home!</Text>
                    <Text>Home!</Text>
                    <Text>Home!</Text>
                    <Text>Home!</Text>
                    <Text>Home!</Text>
                    <Text>Home!</Text>
                    <Text>Home!</Text>
                    <Text>Home!</Text>
                    <Text>Home!</Text>
                    <Text>Home!</Text>
                    <Text>Home!</Text>
                    <Text>Home!</Text>
                    <Text>Home!</Text>
                    <Text>Home!</Text>
                    <Text>Home!</Text>
                    <Text>Home!</Text>
                    <Text>Home!</Text>
                    <Text>Home!</Text>
                    <Text>Home!</Text>
                    <Text>Home!</Text>
                    <Text>Home!</Text>
                    <Text>Home!</Text>
                    <Text>Home!</Text>
                    <Text>Home!</Text>
                    <Text>Home!</Text>
                    <Text>Home!</Text>
                    <Text>Home!</Text>
                    <Text>Home!</Text>
                    <Text>Home!</Text>
                    <Text>Home!</Text>
                    <Text>Home!</Text>
                    <Text>Home!</Text>
                    <Text>Home!</Text>
                    <Text>Home!</Text>
                    <Text>Home!</Text>
                    <Text>Home!</Text>
                    <Text>Home!</Text>
                    <Text>Home!</Text>
                    <Text>Home!</Text>
                    <Text>Home!</Text>
                    <Text>Home!</Text>
                    <Text>Home!</Text>
                    <Text>Home!</Text>
                    <Text>Home!</Text>
                    <Text>Home!</Text>
                    <Text>Home!</Text>
                    <Text>Home!</Text>
                    <Text>Home!</Text>
                    <Text>Home!</Text>
                    <Text>Home!</Text>
                    <Text>Home!</Text>
                    <Button
                        title="LinkHome"
                        onPress={() => {
                            this.props.navigation.navigate('Settings');
                        }}
                    />
                </ScrollView>
            </SafeAreaView>
        );
    }
}

class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings!</Text>
                <Button
                    title="LinkHome"
                    onPress={() => {
                        this.props.navigation.navigate('Home');
                    }}
                />
            </View>
        );
    }
}
const TabNavigator = createBottomTabNavigator(
    {
        Home: HomeScreen,
        Settings: SettingsScreen,
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                    // Sometimes we want to add badges to some icons.
                    // You can check the implementation below.
                    IconComponent = ;
                } else if (routeName === 'Settings') {
                    iconName = `ios-options`;
                }

                // You can return any component that you like here!
                return <IconComponent name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'blue',
            inactiveTintColor: 'white',
            labelStyle: {
                fontSize: 25,
            },
            style: {
                backgroundColor: 'tomato',
                height: 40
            },
        }
    }
);

export default createAppContainer(TabNavigator);

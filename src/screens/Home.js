import React, {Component} from 'react';
import { ScrollView, View, Text } from "react-native";
import { glS } from '../styles';
import MainHeader from "../components/MainHeader/MainHeader";

export default class HomeScreen extends Component {
    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flexDirection: 'column', alignItems: 'center', paddingBottom: 30}} style={ glS.container } alwaysBounceVertical={false} bounces={false} snapToAlignment="center">
                <MainHeader title={'Главная'}/>
                <View>
                    <Text>
                        Я еще не придумал, что сюда запихать
                    </Text>
                </View>
            </ScrollView>
        );
    }
}
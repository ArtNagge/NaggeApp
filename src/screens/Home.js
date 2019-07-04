import React, {Component} from 'react';
import { View, Text } from "react-native";
import MainHeader from "../components/MainHeader/MainHeader";
import Content from "../components/Content/Content";

export default class HomeScreen extends Component {
    render() {
        return (
            <Content>
                <MainHeader title={'Главная'}/>
                <View>
                    <Text>
                        Я еще не придумал, что сюда запихать
                    </Text>
                </View>
            </Content>
        );
    }
}
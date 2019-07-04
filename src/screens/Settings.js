import React, {Component} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { mnS, glS, shS } from '../styles';
import BoxShadow from "react-native-shadow/lib/BoxShadow";

export default class SettingsScreen extends Component {
    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flexDirection: 'column', alignItems: 'center', paddingBottom: 30}} style={ glS.container } alwaysBounceVertical={false} bounces={false} snapToAlignment="center">
                <BoxShadow setting={ shS.headerSettingShadow }>
                    <View style={ mnS.mainHeaderSettings }>
                        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} activeOpacity={0.8} onPress={() => this.props.navigation.goBack()}>
                            <Icon name="angle-left" size={30} color="#fff" />
                            <Text style={ [ glS.mL10, glS.fw600, glS.f20, {color: '#fff'} ] }>
                                Настройки
                            </Text>
                        </TouchableOpacity>
                    </View>
                </BoxShadow>
            </ScrollView>
        );
    }
}
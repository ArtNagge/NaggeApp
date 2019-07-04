import React, {Component} from 'react';
import { ScrollView } from "react-native";
import { glS } from '../styles';
import ListTopPlayers from "../components/ListTopPlayers/ListTopPlayers";
import MainHeader from "../components/MainHeader/MainHeader";

export default class TopPlayersScreen extends Component {
    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flexDirection: 'column', alignItems: 'center', paddingBottom: 0}} style={ glS.container } alwaysBounceVertical={false} bounces={false} snapToAlignment="center">
                <MainHeader title={'Топ пользователей'}/>
                <ListTopPlayers nav={this.props.navigation} />
            </ScrollView>
        );
    }
}
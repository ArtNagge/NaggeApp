import React, {Component} from 'react';
import ListTopPlayers from "../components/ListTopPlayers/ListTopPlayers";
import MainHeader from "../components/MainHeader/MainHeader";
import Content from "../components/Content/Content";

export default class TopPlayersScreen extends Component {
    render() {
        return (
            <Content>
                <MainHeader title={'Топ пользователей'}/>
                <ListTopPlayers nav={this.props.navigation} />
            </Content>
        );
    }
}
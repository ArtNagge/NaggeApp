import React, {Component} from 'react';
import {mnS} from "../../styles";
import {FlatList, TouchableOpacity, View} from "react-native";
import TopListItem from "../ListItem/ListItem";
import ApiWorker from "../ApiWorker";

export default class ListTopPlayers extends Component {

    apiWorker = new ApiWorker();

    state = {
        data: [],
    };

    componentDidMount() {
        // ДАДА Я ЗНАЮ ЧТО НЕТУ TRY...CATCH
        this.apiWorker.getAllUsers()
            .then((data) => this.setState({data}));
    }

    render() {
        const { nav } = this.props;
        return (
            <View style={ mnS.topUserContainer }>
                <FlatList
                    data={ this.state.data }
                    renderItem={({item}) => (
                        <TouchableOpacity activeOpacity={0.8} onPress={() => nav.navigate('User')}>
                            <TopListItem name={item.name} email={item.mail} picture={item.picture}/>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.mail}
                />
            </View>
        );
    }
}
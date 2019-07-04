import React, {Component} from 'react';
import {View, Text, Image} from "react-native";
import {glS, mnS} from '../../styles';

export default class TopListItem extends Component {

    render() {
        const {name, email, picture} = this.props;
        return (
            <View style={ mnS.TopListItem }>
                <Image style={ [ glS.avaS, {marginRight: 15} ] } source={{uri: picture}}/>
                <View>
                    <Text style={ [ glS.fw600, glS.f18 ] }>{name}</Text>
                    <Text>{email}</Text>
                </View>
            </View>
        );
    }

}
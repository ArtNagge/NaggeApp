import React, {Component} from "react";
import {glS, mnS, shS} from "../../styles";
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text, TouchableOpacity, View} from "react-native";
import BoxShadow from "react-native-shadow/lib/BoxShadow";

export default class BackHeader extends Component{
    render() {
        return (
            <BoxShadow setting={ shS.headerSettingShadow }>
                <View style={ mnS.mainHeaderSettings }>
                    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} activeOpacity={0.8} onPress={this.props.callBack}>
                        <Icon name="angle-left" size={30} color="#fff" />
                        <Text style={ [ glS.mL10, glS.fw600, glS.f20, {color: '#fff'} ] }>
                            {this.props.title}
                        </Text>
                    </TouchableOpacity>
                </View>
            </BoxShadow>
        );
    }
}
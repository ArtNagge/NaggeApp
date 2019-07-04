import React, {Component} from "react";
import {TextInput, View, Text} from "react-native";
import {mnS, glS} from "../../styles";

export default class Input extends Component{
    render() {
        return (
            <View style={ [mnS.Input] }>
                <Text style={ [glS.f16, glS.fw600, mnS.InputText] }>{this.props.title}</Text>
                <TextInput
                    {...this.props}
                    style={ mnS.TextInput }
                    maxLength = {15}
                />
            </View>
        )
    }
}
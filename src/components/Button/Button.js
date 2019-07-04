import React from "react";
import { glS } from "../../styles";
import {View, Text, TouchableOpacity} from "react-native";

const Button = ({title, callBack}) => (
    <TouchableOpacity activeOpacity={0.8} onPress={callBack}>
        <View style={glS.Button}>
            <Text style={[glS.fw600, glS.f16, {color: '#fff'}]}>{title}</Text>
        </View>
    </TouchableOpacity>
);

export default Button;
import React from "react";
import {Text, View} from "react-native";
import {glS, mnS, shS} from "../../styles";
import BoxShadow from "react-native-shadow/lib/BoxShadow";

const MainHeader = ({title}) => {
    return (
        <BoxShadow setting={ shS.headerSettingShadow }>
            <View style={ [ mnS.mainHeaderSettings, glS.tAC ] }>
                <Text style={ [ glS.fw600, glS.f20, {color: '#fff'} ] }>{title}</Text>
            </View>
        </BoxShadow>
    )
};

export default MainHeader;
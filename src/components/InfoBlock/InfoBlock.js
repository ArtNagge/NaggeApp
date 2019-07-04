import React, {Component} from 'react';
import {View, Text} from "react-native";
import {BoxShadow} from 'react-native-shadow';
import Icon from 'react-native-vector-icons/FontAwesome';
import {glS, mnS} from '../../styles';

export default class InfoBlock extends Component {
    render() {
        const {title, description, height, icon} = this.props;
        const infoBlock = {
            width: mnS.infoBlockContainer.width,
            height: height,
            padding: 20,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            backgroundColor: '#fff',
            borderRadius: 10,
        };
        const infoBlockShadow = {
            width: infoBlock.width,
            height: infoBlock.height,
            color:"#000",
            border: 10,
            radius: 10,
            opacity:0.05,
            x:0,
            y:3,
        };
        const headerStyle = {
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'flex-start'
        };

        return (
            <View style={ mnS.infoBlockContainer }>
                <BoxShadow setting={ infoBlockShadow }>
                    <View style={ infoBlock }>
                        <View style={ headerStyle }>
                            {(icon) ? <Icon name={icon} size={18} color="#000" /> : null}
                            <Text style={ [ glS.f18, glS.fw800, (icon) ? glS.mL10 : null ] }>{title}</Text>
                        </View>
                        <Text style={ [ glS.f14, glS.fw400, glS.mT10 ] }>
                            {description}
                        </Text>
                    </View>
                </BoxShadow>
            </View>
        );
    }
}
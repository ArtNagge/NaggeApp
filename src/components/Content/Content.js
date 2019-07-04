import React, {Component} from "react";
import {glS} from "../../styles";
import {ScrollView} from "react-native";

export default class Content extends Component{
    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flexDirection: 'column', alignItems: 'center', paddingBottom: 30}} style={ glS.container } alwaysBounceVertical={false} bounces={false} snapToAlignment="center">
                {this.props.children}
            </ScrollView>
        );
    }
}
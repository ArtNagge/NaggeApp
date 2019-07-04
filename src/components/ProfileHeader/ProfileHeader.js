import React from 'react';
import {glS, mnS, shS} from "../../styles";
import {Image, Text, View} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import {Badge} from "react-native-elements";
import BoxShadow from "react-native-shadow/lib/BoxShadow";

const ProfileHeader = ({store, nav}) => {
    return (
        <BoxShadow setting={ shS.headerShadow }>
            <View style={ mnS.header }>
                <View style={ { flexDirection: 'row' } }>
                    <View>
                        <Image style={ glS.avaS } source={{uri: store.infoUser.img}}/>
                        <Badge
                            status="warning"
                            value={120}
                            containerStyle={{ position: 'absolute', top: -4, right: -4 }}
                        />
                    </View>
                    <View style={ { marginLeft: 10 } }>
                        <Text style={ glS.nickName }>
                            {store.infoUser.name}
                        </Text>
                        <Text style={ glS.description }>
                            {store.infoUser.description}
                        </Text>
                    </View>
                </View>
                <Icon name="cogs" size={24} color="#fff" onPress={() => nav.navigate('Settings')} />
            </View>
        </BoxShadow>
    )
};

export default ProfileHeader;
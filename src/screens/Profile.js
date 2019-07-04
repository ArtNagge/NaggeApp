import React from 'react';
import {ScrollView} from "react-native";
import {glS} from '../styles';
import {inject, observer} from 'mobx-react';
import ProfileHeader from "../components/ProfileHeader";
import UserInfoBlocks from '../components/UserInfoBlocks';

const ProfileScreen = inject('store')(observer(({store, navigation}) => {
    return (
        <ScrollView  showsVerticalScrollIndicator={false} contentContainerStyle={{flexDirection: 'column', alignItems: 'center', paddingBottom: 30}} style={ glS.container } alwaysBounceVertical={false} bounces={false} snapToAlignment="center">
            <ProfileHeader store={store} nav={navigation}/>
            <UserInfoBlocks store={store}/>
        </ScrollView>
    );
}));

export default ProfileScreen;
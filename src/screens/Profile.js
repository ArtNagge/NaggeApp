import React from 'react';
import {inject, observer} from 'mobx-react';
import ProfileHeader from "../components/ProfileHeader";
import UserInfoBlocks from '../components/UserInfoBlocks';
import Content from "../components/Content/Content";

const ProfileScreen = inject('store')(observer(({store, navigation}) => {
    return (
        <Content>
            <ProfileHeader store={store} nav={navigation}/>
            <UserInfoBlocks store={store}/>
        </Content>
    );
}));

export default ProfileScreen;
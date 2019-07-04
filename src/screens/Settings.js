import React, {Component} from 'react';
import Input from "../components/Input";
import {inject, observer} from 'mobx-react';
import Button from "../components/Button";
import Content from "../components/Content/Content";
import BackHeader from "../components/BackHeader/BackHeader";

const SettingsScreen = inject("store")(
    observer(
        class Screen extends Component {

            pressButton() {
                this.props.store.changeUserInfo(this.name, this.desc);
                this.props.navigation.goBack()
            }

            render() {
                const {store} = this.props;
                return (
                    <Content>
                        <BackHeader title={"Настройки"} callBack={() => this.props.navigation.goBack()} />
                        <Input title="Имя" onChangeText={(text) => this.name = text} placeholder={store.user.name}/>
                        <Input title="Описание" onChangeText={(text) => this.desc = text} placeholder={store.user.description}/>
                        <Button title={"Сохраннить"} callBack={() => this.pressButton(this.name, this.desc)}/>
                    </Content>
                );
            }
        }
    )
);

export default SettingsScreen
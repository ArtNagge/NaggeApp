import { observable, computed, action } from 'mobx';

class AppStore {

    @observable user = {
        name: "Nagge",
        description: "Front-end Developer",
        img: "https://pp.userapi.com/c851336/v851336611/1602c0/o7dXH6-HdPY.jpg",
        blocks: [
            {
                title: 'Quotation',
                icon: 'quote-right',
                description: 'If it looks like a duck, swims like a duck and quacks like a duck, then it probably is a duck (who cares what it really is)',
                height: 130
            },
            {
                title: 'Phone',
                icon: 'mobile',
                description: '+7 (999) 999-99-99',
                height: 90
            }
        ]
    };

    @action changeUserInfo(name = this.user.name, description = this.user.description) {
        this.user = {
            ...this.user,
            name,
            description
        }
    }

    @computed get infoUser() {
        return this.user
    }

}
export default new AppStore();
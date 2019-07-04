export default class ApiWorker {

    _url = 'https://randomuser.me/api/?results=40';

    async getSource() {
        let result = await fetch(this._url);
        return result.json();
    }

    async getAllUsers() {
        let result = await this.getSource();
        return result.results.map(this._transformItems);
    }

    _transformItems = (item) => {
        return {
            name: item.login.username,
            mail: item.email,
            picture: item.picture.thumbnail
        };
    }

}
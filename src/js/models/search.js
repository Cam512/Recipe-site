import axios from 'axios';
import * as secretKey from '../secret';
export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        try {
            const res = await axios(`${secretKey.proxy}https://www.food2fork.com/api/search?key=${secretKey.key}&q=${this.query}`);
            this.result = res.data.recipes;
            //console.log(this.result);
         } catch (error) {
           alert(error);
        }
    }
}


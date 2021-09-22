import {Users} from "../types";

export class UsersStore {
    constructor() {}

    /**
     * login. Currently there is no database and just one user.
     * */
    async authenticate(username: string, password: string): Promise<Users | null> {
        if(username === "username" && password === "udac1ty") {
            return {
                id:1,
                username:"username"
            };
        }
        return null;
    }

}

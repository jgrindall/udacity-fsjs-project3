
/**
 * Represents a user
 */

export type Users = {
    id: number;
    username: string;
};

export class UsersStore {
    constructor() {}

    /**
     * login.
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

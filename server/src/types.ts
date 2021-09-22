export type Users = {
    id: number;
    username: string;
};

export type TokenPayload = {
    user:Users;
    exp:number;
};
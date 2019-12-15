export class User {
    username: string;
    password: string;
    token: string;
    admin: boolean;
    constructor(username: string, password: string, admin?: boolean) {
        this.username = username;
        this.password = password;
        this.admin = admin || false;
    }
}
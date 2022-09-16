export enum USER_ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

class UserModel{
    constructor(
        private id:string, 
        private name:string,
        private email:string,
        private password:string,
        private role:USER_ROLES
    ){}
    
    public getId(){
        return this.id
    }

    public getName(){
        return this.name
    }

    public getEmail(){
        return this.email
    }

    public getPassword(){
        return this.password
    }

    public getRole(){
        return this.role
    }
}

export default UserModel
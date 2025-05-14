import { isThisISOWeek } from "date-fns";
import Users from "../models/Users";

interface ICreateUserDTO{
    id: string;
    name: string;
    email: string;
    cpf: string;
}

interface IUpdateUserDTO{
    id: string;
    data: {
    name: string;
    email: string;
    }
}

class UsersRepository{
    private users = Users[];

    constructor(){
        this.users = [];
    }

    public findUserById(id: String): Users | null {
        return this.users.find((user: Users) => user.id == id);
    }

    public findUserByCPF(cpf: String): Users | undefined {
        return this.users.find((user: Users) => user.cpf == cpf);
    }

    public findUserByEmail(email: String): Users | undefined {
        return this.users.find((user: Users) => user.email == email);
    }

    public create(data: ICreateUserDTO): Users{
        const user = new Users(data);

        this.users.push(user);

        return user;
    }

    public getAll(): Users[] {
        return this.users;
    }

    public getById(id: String): Users | undefined {
        return this.users.find((users: Users) => users.id == id);
    }

    public update(data: IUpdateUserDTO): Users {
        const index = this.users.findIndex((user: Users) => user.id == data.id);

        return (this.users[index] = { ...this.users[index], ...data.data, updated_at: new Date});
    }

    public findIndexById(id: String): number {
        const index = this.users.findIndex((user: Users) => user.id == data.id);

        return index;
    }

    public delete(index: number){
        this.users.splice(index, 1);
    }
}

export default UsersRepository;
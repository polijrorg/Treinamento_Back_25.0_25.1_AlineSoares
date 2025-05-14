class Users {
    id: string;

    name: string;

    email: string;

    cpf: string;

    created_at: Date;

    updated_at: Date;

    constructor({
        id,
        name,
        email,
        cpf,
    }: Omit <Users, 'created-at' | 'updated_at'>) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.cpf = cpf;
        this.created_at = new Date;
        this.updated_at = new Date;

    }
}

export default Users;
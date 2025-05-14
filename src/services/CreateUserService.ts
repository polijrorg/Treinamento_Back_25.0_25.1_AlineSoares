import Users from "../models/Users";
import UsersRepository from "../repositories/UsersRepository";

interface IRequest{
    id: string;
    name: string;
    email: string;
    cpf: string;
}

class CreateUserService {
    private usersRepository: UsersRepository;

    constructor(usersRepository: UsersRepository){
        this.usersRepository = usersRepository;
    }

    public execute(data: IRequest){
        const userwithCPF = this.usersRepository.findUserByCPF(data.cpf);
        if(userwithCPF) { throw Error('Já existe um usuário com esse cpf');}

        const userwithemail = this.usersRepository.findUserByEmail(data.email);
        if(userwithemail) { throw Error('Já existe um usuário com esse email');}

        const user = this.usersRepository.create(data);

        return user;
    }
}

export default CreateUserService;
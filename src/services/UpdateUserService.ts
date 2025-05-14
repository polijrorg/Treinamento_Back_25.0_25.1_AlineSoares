import Users from "../models/Users";
import usersRepository from "../repositories/UsersRepository";

interface IRequest{
    id: string;
    data: {
    name: string;
    email: string;
    }
}

class UpdateUserService {
    private usersRepository: usersRepository;

    constructor(usersRepository: usersRepository){
        this.usersRepository = usersRepository;
    }

    public execute(data: IRequest){
        const userwithId = this.usersRepository.getById(data.id);

        if(!userwithId){ throw Error('Esse usuário não existe');}

        const userwithemail = this.usersRepository.findUserByEmail(data.data.email);
        if(userwithemail) { throw Error('Já existe um usuário com esse email');}

        const user = this.usersRepository.update(data);

        return user;
    }
}

export default UpdateUserService;
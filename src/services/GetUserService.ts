import Users from "../models/Users";
import usersRepository from "../repositories/UsersRepository";

interface IRequest{
    id: string;
}

class GetUserService {
    private usersRepository: usersRepository;

    constructor(usersRepository: usersRepository){
        this.usersRepository = usersRepository;
    }

    public execute(data: IRequest){
        const user = this.usersRepository.getById(data.id)

        if(!user){ throw Error('Esse usuário não existe');}

        return user;
    }
}

export default GetUserService;
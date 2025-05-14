import Users from "../models/Users";
import UsersRepository from "../repositories/UsersRepository";

interface IRequest{
    id: string;
}

class DeleteUserService {
    private usersRepository: UsersRepository;

    constructor(usersRepository: UsersRepository){
        this.usersRepository = usersRepository;
    }

    public async execute(data: IRequest){
        const userwithId = this.usersRepository.getById(data.id);

        if(!userwithId){ throw Error('Esse usuário não existe');}

        const index = this.usersRepository.findIndexById(data.id);

        this.usersRepository.delete(index);

        return userwithId;
    }
}

export default DeleteUserService;
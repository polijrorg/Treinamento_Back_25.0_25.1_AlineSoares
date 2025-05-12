import Users from "../models/users";
import usersRepository from "../repositories/UsersRepository";

interface IRequest{
    id: string;
}

class DeleteUserService {
    private usersRepository: usersRepository;

    constructor(usersRepository: usersRepository){
        this.usersRepository = usersRepository;
    }

    public async execute(data: IRequest){
        const userwithId = this.usersRepository.getById(data.id);

        if(!userwithId){ throw Error('Esse usuário não existe');}

        const index = this.usersRepository.findUserById(data.id);

        this.usersRepository.delete(index);

        return userwithId;
    }
}

export default DeleteUserService;
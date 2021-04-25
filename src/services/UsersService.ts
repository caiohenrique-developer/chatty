import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositoreis/UsersRepository";

class UsersService {
  private usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
  }

  async create(email: string) {
    const userExists = await this.usersRepository.findOne({ email });

    if (userExists) return userExists;

    if (!email) return "Please, fill your email!";

    const user = this.usersRepository.create({ email });

    await this.usersRepository.save(user);

    return user;
  }
}

export { UsersService };

import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositoreis/UsersRepository";

class UsersService {
  async create(email: string) {
    const usersRepository = getCustomRepository(UsersRepository);

    const userExists = await usersRepository.findOne({ email });

    if (userExists) return userExists;

    if (!email) return "Please, fill your email!";

    const user = usersRepository.create({ email });

    await usersRepository.save(user);

    return user;
  }
}

export { UsersService };

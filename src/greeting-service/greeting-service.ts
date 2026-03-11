export class UserRepository {
  getNameById(id: string) {
    return 'Bhumika';
  }
}

export class GreetingService {
  public constructor(private userRepository: UserRepository) {}
  greet(userId: string): string {
    const name = this.userRepository.getNameById(userId);
    return `Hello, ${name}!`;
  }
}

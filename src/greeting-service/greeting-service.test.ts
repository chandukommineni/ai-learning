import { beforeEach, describe, expect, it } from 'vitest';
import { GreetingService, UserRepository } from './greeting-service';
import { vi } from 'vitest';
describe('GreetingService', () => {
  let mockUserRepository: UserRepository;
  let service: GreetingService;

  beforeEach(() => {
    mockUserRepository = {
      getNameById: vi.fn(),
    };
    service = new GreetingService(mockUserRepository);
  });

  it('should return personalised greeting for a user', () => {
    vi.mocked(mockUserRepository.getNameById).mockReturnValue('Bhumika');
    let result = service.greet('user-123');
    expect(result).toBe('Hello, Bhumika!');

    vi.mocked(mockUserRepository.getNameById).mockReturnValue('Chandu');
    result = service.greet('user-13');
    expect(result).toBe('Hello, Chandu!');
  });

  it('should call the user repository with correct user id ', () => {
    vi.mocked(mockUserRepository.getNameById).mockReturnValue('Bhumika');
    service.greet('user-123');
    expect(mockUserRepository.getNameById).toHaveBeenCalledWith('user-123');
  });
});

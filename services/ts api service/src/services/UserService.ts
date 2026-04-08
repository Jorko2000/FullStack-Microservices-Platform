// Example service placeholder
export class UserService {
  private users: any[] = [];
  getAll() { return this.users; }
  create(user:any){ this.users.push(user); return user; }
}

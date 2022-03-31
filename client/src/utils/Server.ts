import Fetch from "./Fetch";

interface User {
  id: number;
  email: string;
  login: string;
  language: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

const Server = {
  User: {
    authenticate: (login: string, password: string): Promise<{ id: string, login: string, connexionToken: string }> => Fetch('/api/user/authenticate', {
      login,
      password
    }, 'POST'),
    list: (): Promise<User[]> => Fetch('/api/user/list', {}, 'GET'),
  }
};

export default Server;

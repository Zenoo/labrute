import Fetch from "./Fetch";

const Server = {
  User: {
    authenticate: (login: string, password: string): Promise<{ id: string, login: string, connexionToken: string }> => Fetch('/api/app-user/authenticate', {
      login,
      password
    }, 'POST'),
  }
};

export default Server;

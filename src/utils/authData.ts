class AuthData {
  token: string | undefined = undefined;
  userId: string | null = null;
  userData: any = null;

  getToken = () => this.token;
  getUserId = () => this.userId;
  getUserData = () => this.userData;

  setToken = (token: string) => {
    this.token = token;
  };

  setUserId = (userId: string) => {
    this.userId = userId;
  };

  setUserData = (userData: Record<string, string>) => {
    this.userData = userData;
  };

  removeToken = () => {
    this.token = '';
  };

  removeUserId = () => {
    this.userId = '';
  };

  removeUserData = () => {
    this.userData = null;
  };
}

const authData = new AuthData();

export default authData;

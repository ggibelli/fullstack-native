import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  namespace: string;
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    return AsyncStorage.getItem(`${this.namespace}`);
  }

  async setAccessToken(accessToken: string) {
    await AsyncStorage.setItem(`${this.namespace}`, accessToken);
  }

  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}`);
  }
}

export default AuthStorage;

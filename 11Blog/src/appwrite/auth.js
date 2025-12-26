import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client;
  account;

  constructor() {
    if (!conf.appwriteUrl || !conf.appwriteProjectId) {
      throw new Error("❌ Missing Appwrite environment variables");
    }

    this.client = new Client()
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.account = new Account(this.client);
  }

  // Signup
  async createAccount({ email, password, name }) {
    try {
      await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      // Auto login after signup
      return await this.login({ email, password });
    } catch (error) {
      console.error("Appwrite :: createAccount :: ", error);
      throw error;
    }
  }

  // Login
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(
        email,
        password
      );
    } catch (error) {
      console.error("Appwrite :: login :: ", error);
      throw error;
    }
  }

  // Get current logged-in user
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      return null;
    }
  }

  // Logout (current session)
  async logout() {
    try {
      await this.account.deleteSession("current");
    } catch (error) {
      console.error("Appwrite :: logout :: ", error);
    }
  }
}

const authService = new AuthService();
export default authService;

// src/services/AuthService.ts
import type { IUser, IUserAuth } from "./interfaces/iuser";

export class AuthService {
  private static readonly USERS_STORAGE_KEY = "list_users";
  private static readonly AUTH_STORAGE_KEY = "userAuth";

  /**
   * Guarda un usuario en localStorage.
   * Si no existe "list_users", lo crea. Si existe, añade el nuevo usuario.
   */
  public register(user: IUser): boolean {
    const users = this.getUsers();

    // Verificar si el email ya está registrado
    if (users.some((u) => u.email === user.email)) {
      console.warn("El correo electrónico ya está registrado.");
      return false;
    }

    users.push(user);
    localStorage.setItem(AuthService.USERS_STORAGE_KEY, JSON.stringify(users));
    console.log("Usuario registrado exitosamente:", user.email);
    return true;
  }

  /**
   * Inicia sesión de un usuario.
   * Busca al usuario en "list_users" y si las credenciales son correctas,
   * registra "userAuth" en localStorage.
   */
  public login(email: string, password: string): IUserAuth | null {
    const users = this.getUsers();
    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      const userAuth: IUserAuth = {
        email: foundUser.email,
        name: foundUser.name,
      };
      localStorage.setItem(
        AuthService.AUTH_STORAGE_KEY,
        JSON.stringify(userAuth)
      );
      console.log("Inicio de sesión exitoso para:", foundUser.email);
      return userAuth;
    }

    console.warn("Credenciales inválidas.");
    return null;
  }

  /**
   * Cierra la sesión del usuario.
   * Elimina el campo "userAuth" de localStorage.
   */
  public logout(): void {
    localStorage.removeItem(AuthService.AUTH_STORAGE_KEY);
    console.log("Sesión cerrada.");
  }

  /**
   * Obtiene el usuario autenticado actualmente desde localStorage.
   */
  public getAuthenticatedUser(): IUserAuth | null {
    const userAuthString = localStorage.getItem(AuthService.AUTH_STORAGE_KEY);
    return userAuthString ? (JSON.parse(userAuthString) as IUserAuth) : null;
  }

  /**
   * Obtiene la lista de usuarios registrados de localStorage.
   */
  private getUsers(): IUser[] {
    const usersString = localStorage.getItem(AuthService.USERS_STORAGE_KEY);
    return usersString ? (JSON.parse(usersString) as IUser[]) : [];
  }
}

// Exportamos una instancia para usarla directamente
export const authService = new AuthService();

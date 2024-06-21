import { IToken } from "@/interfaces/auth";
import * as SecureStore from "expo-secure-store";

const TOKEN_KEY = "eFTOKEN";

export async function storeToken(encodedToken: IToken | null) {
  try {
    if (!encodedToken) return;
    await SecureStore.setItemAsync(TOKEN_KEY, JSON.stringify(encodedToken));
  } catch {}
}

export async function getToken(): Promise<IToken | null> {
  try {
    const token = await SecureStore.getItemAsync(TOKEN_KEY);
    if (!token) return null;
    return JSON.parse(token);
  } catch (error) {
    console.log("Could not retrieve token from local storage");
    return null;
  }
}

export async function deleteToken() {
  try {
    await SecureStore.deleteItemAsync(TOKEN_KEY);
  } catch (error) {}
}

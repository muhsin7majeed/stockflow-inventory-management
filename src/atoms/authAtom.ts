import { atom, useAtom, useAtomValue, useSetAtom } from "jotai";
import type { Auth } from "../types/user";

const authAtom = atom<Auth>({
  isAuthenticated: true,
});

export const useAuthAtomValue = () => useAtomValue(authAtom);
export const useSetAuthAtom = () => useSetAtom(authAtom);
export const useAuthAtom = () => useAtom(authAtom);

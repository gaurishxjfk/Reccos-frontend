import create from "zustand";


interface UserState {
  isLoggedIn: boolean;
  toggleSidebar: () => void;
  updateUserInfo: (data: any) => void;
  name: string;
  email: string;
  avatarUrl: string;
}


export const userData = create<UserState>(set => ({
  isLoggedIn: false,
  name: "",
  email: "",
  avatarUrl: "",
  updateUserInfo: (data) => set(state => ({
    name: data.name,
    email: data.email,
    avatarUrl: data.picture,
    })),
  toggleSidebar: () => set(state => ({ isLoggedIn: !state.isLoggedIn }))
}))
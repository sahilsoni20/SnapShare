import { User } from "firebase/auth";
import { create } from "zustand";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../firebase/firebaseConfig"; // Your Firebase config

type StoreType = {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
};

export const useUserStore = create<StoreType>((set) => ({
  currentUser: null,
  setCurrentUser: (user) => set({ currentUser: user }),
}));

// Listen for changes in authentication state when app starts
onAuthStateChanged(firebaseAuth, (user) => {
  const setCurrentUser = useUserStore.getState().setCurrentUser;
  setCurrentUser(user); // Set the user in Zustand store
});

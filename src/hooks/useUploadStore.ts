import { create } from "zustand";

type UploadStoreProps = {
  images: File[];
  setImages: (images: File[]) => void;
};

export const useUploadStore = create<UploadStoreProps>((set) => ({
  images: [],
  setImages: (images) => set({ images }),
}));

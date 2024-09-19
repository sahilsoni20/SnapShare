import { create } from "zustand";

type ImageData = {
  image: string;
  timestamp: number;
};

type ImageStore = {
  images: Record<string, ImageData>;
  addImage: (id: string, image: string) => void;
  removeImage: (id: string) => void;
};

export const useImageStore = create<ImageStore>((set) => ({
  images: {},
  addImage: (id: string, image: string) =>
    set((state) => ({
      images: { ...state.images, [id]: { image, timestamp: Date.now() } },
    })),
  removeImage: (id: string) =>
    set((state) => {
      const newImages = { ...state.images };
      delete newImages[id];
      return { images: newImages };
    }),
}));

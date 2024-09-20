import { create } from "zustand";
import { persist } from "zustand/middleware";

type ImageData = {
  image: string;
  timestamp: number;
};

type ImageStore = {
  images: Record<string, ImageData>;
  uploadImage: (id: string, image: string) => void;
};

export const useImageStore = create<ImageStore>()(
  persist(
    (set) => ({
      images: {},

      uploadImage: (id: string, image: string) => {
        set((state) => ({
          images: { ...state.images, [id]: { image, timestamp: Date.now() } },
        }));

        setTimeout(() => {
          set((state) => {
            const newImages = { ...state.images };
            delete newImages[id];
            return { images: newImages };
          });
        }, 5 * 60 * 1000);
      },
    }),
    {
      name: "foto-link",
    }
  )
);

import { useState, useEffect } from "react";
import { AutoTypeProps } from "./types";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";

export const AutoTypeText = ({ text, speed = 50 }: AutoTypeProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeoutId);
    }
  }, [index, text, speed]);

  return <h1>Hello hello heelo {displayedText}</h1>;
};

export const UniqueId = () => {
  return uuidv4().slice(0, 6);
};

export const ImageExpiry = (
  uploadedTime: Date,
  expiryDuration: number
): boolean => {
  const currentTime = new Date();
  expiryDuration   = 5 * 60 * 1000;
  const expiryTime = new Date(uploadedTime.getTime() + expiryDuration);
  return currentTime >= expiryTime;
};

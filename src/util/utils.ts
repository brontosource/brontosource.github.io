import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { createClient } from "contentful";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
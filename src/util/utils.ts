import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// export const client = createClient({
//   space: process.env.CONTENTFUL_SPACE_ID || "",
//   accessToken: process.env.CONTENTFUL_ACCESS_KEY || "",
// });
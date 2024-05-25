import { Playfair_Display, Roboto } from "next/font/google";

const _Roboto_init = Roboto({ subsets: ["latin"], weight: ["400", "500"] });
const _Playfair_init = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const _Roboto = _Roboto_init.className;
export const _Playfair = _Playfair_init.className;

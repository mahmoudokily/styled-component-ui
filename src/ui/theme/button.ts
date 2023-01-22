import { Coordinator, ThemeVariable } from "../helpers/types";

export interface Button {
  fixedSize: ThemeVariable<string>;
  padding: ThemeVariable<Coordinator<string> & { xHalf: string }>;
  radius: ThemeVariable<string>;
  fontSize: ThemeVariable<string>;
  disabledOpacity?: number;
  transition?: string;
}

export const button: Button = {
  fixedSize: {
    small: "22px",
    default: "32px",
    large: "40px",
  },
  padding: {
    small: {
      x: "0.4rem",
      y: "0.2rem",
      xHalf: ".2rem",
    },
    default: {
      x: ".6rem",
      y: ".3rem",
      xHalf: ".35rem",
    },
    large: {
      x: "1rem",
      y: ".5rem",
      xHalf: ".4rem",
    },
  },
  fontSize: {
    small: "0.6rem",
    default: "0.7rem",
    large: "0.9rem",
  },
  radius: {
    default: "0.3rem",
    square: "0",
    rounded: "2rem",
    circle: "50%",
  },
  disabledOpacity: 0.7,
};

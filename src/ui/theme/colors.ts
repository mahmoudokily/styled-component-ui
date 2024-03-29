export interface Colors {
  primary: string;
  primaryDark: string;
  accent: string;
  secondary: string;
  rosaLight: string;
  darkWhite: string;
  borderBlueLight: string;
  borderBlueDark: string;
  borderBlueRegular: string;
  borderOrangeDark: string;
  borderYellowDark: string;
  black: string;
  white: string;
  orange: string;
  success: string;
  error: string;
  warning: string;
}

export const colors: Colors = {
  primary: "#3D729C",
  primaryDark: "#122967",
  accent: "#FFC700",
  secondary: "#E8EFF3",
  rosaLight: "#F4EEEE",
  darkWhite: "#FAFAFA",
  borderBlueLight: "#3D729C",
  borderBlueDark: "#3D729C",
  borderBlueRegular: "#008FDD",
  borderOrangeDark: "#E84120",
  borderYellowDark: "#FFC700",
  black: "#000000",
  white: "#FFFFFF",
  orange: "#F69100",
  success: "#78931A",
  error: "#B00020",
  warning: "#FCBD00",
};

export type Color = keyof Colors;

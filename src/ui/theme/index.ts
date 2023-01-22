import { ObjectOrArray, Theme } from "styled-system";
import { BreakPoints, breakpoints } from "./breakpoints";
import { colors, Colors as ColorsTypes } from "./colors";
import { Typographies, typography } from "./typography";
import "styled-components";
import { fontSizes, FontSizes as FontSizesTypes } from "./fonts";
import { Button as ButtonProps, button } from "./button";
import { type, Types } from "./type";
import { form, Form } from "./form";
import { Popover, popover } from "./popover";
import { zIndex, ZIndex } from "./zIndex";
import { Alert, alert } from "./alert";
import { ThemeVariable } from "../helpers/types";
import { Value } from "../helpers/CssHelper";
import { iconSize, IconSize } from "./iconSize";
export interface CustomTheme {
  colors: ColorsTypes;
  breakpoints: BreakPoints;
  typography: Typographies;
  fontSizes: FontSizesTypes;
  button: ButtonProps;
  type: Types;
  form: Form;
  popover: Popover;
  zIndex: ZIndex;
  alert: Alert;
  iconSize: IconSize

}

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme { }
  export interface Colors extends ColorsTypes { }
  export interface FontSizes extends FontSizesTypes { }
}

const theme: CustomTheme = {
  typography,
  breakpoints,
  colors,
  fontSizes,
  button,
  type,
  form,
  popover,
  zIndex,
  alert,
  iconSize
};

export default theme;

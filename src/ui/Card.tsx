import { PropsWithChildren } from "react";
import styled, { css } from "styled-components";
// import Small_BOX_IMG from "../assets/small_box_effect.png";

import { Box } from "./Box";
import { Color } from "./theme/colors";

type CardProps = {
  flex?: number;
  withEffect?: boolean;
};
export const Card = styled(Box)<PropsWithChildren<CardProps>>`
  border: 1px solid
    ${({ borderColor, theme }) =>
      borderColor ? (borderColor as any) : theme.colors.primaryDark};
  max-width: 100%;
  max-height: 100%;
  border-radius: 10px;
  ${({ withEffect }) =>
    withEffect &&
    css`
      /* background-image: url(${Small_BOX_IMG}); */
      background-repeat: no-repeat;
      background-position: bottom;
      background-size: content;
    `};
`;

Card.defaultProps = {};

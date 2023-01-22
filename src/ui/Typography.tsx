import { PropsWithChildren, useMemo } from "react";
import styled, { css } from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { CopyToClipboard } from "./CopyToClipboard";
import { VariantType } from "./helpers";
import { DefaultProps, defaultProps } from "./helpers/styledSystem";
import { TypographyType } from "./theme/typography";
import { Tooltip } from "./Tooltip";
interface Props
  extends React.HTMLAttributes<HTMLParagraphElement>,
    Omit<DefaultProps, "color"> {
  variant?: VariantType["typography"];
  onClick?: any;
  onCopy?: any;
  clipboardText?: string;
  tooltipId?: string;
  tooltipText?: string;
  capitalizeFirstLetter?: boolean;
  ellipsis?: boolean;
}

const TypographyElement = styled.span<Props>`
  display: inline-block;
  ${({ variant = "h6", theme, color }) =>
    css`
      color: ${color ? color : theme.colors.primaryDark};
      font-size: ${theme.typography[variant as TypographyType].fontSize};
      font-weight: ${theme.typography[variant as TypographyType].fontWeight};
      // line-height: ${theme.typography[variant as TypographyType].lineHeight};
    `};
  ${defaultProps}
`;
export const Typography = ({
  tooltipId,
  tooltipText,
  onCopy,
  clipboardText,
  capitalizeFirstLetter,
  children,
  ...props
}: PropsWithChildren<Props>) => {
  const { variant, ellipsis } = props;

  let ellipsisStyle = {};
  if (ellipsis) {
    ellipsisStyle = {
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis"
    };
  }
  const tooltipIdInner = useMemo(() => uuidv4(), []);
  const tooltipProps = useMemo(
    () =>
      tooltipId || tooltipText
        ? { "data-for": tooltipId || tooltipIdInner, "data-tip": true }
        : {},
    [tooltipId, tooltipText, tooltipIdInner]
  );
  const clipboardProps = useMemo(
    () =>
      clipboardText
        ? {
            onClick: (e: React.MouseEvent<HTMLDivElement>) => {
              const el = e.target;
              if (props.onClick) props.onClick();
              const range = document.createRange();
              if (!(el && el instanceof Node && el.contains(el))) {
                range.selectNodeContents(el as Node);
                const sel = window?.getSelection();
                sel?.removeAllRanges();
                sel?.addRange(range);
              }
            }
          }
        : {},
    [clipboardText]
  );
  let text = children;
  if (capitalizeFirstLetter && typeof text === "string") {
    text = text[0].toUpperCase() + text.slice(1, text.length);
  }

  const childrenText = useMemo(
    () => (
      <TypographyElement
        variant={variant}
        {...clipboardProps}
        {...tooltipProps}
        {...ellipsisStyle}
        {...props}
      >
        {text}
      </TypographyElement>
    ),
    [Text, variant, tooltipProps, props, ellipsisStyle, clipboardProps]
  );
  return (
    <>
      {tooltipText && (
        <Tooltip id={tooltipId || tooltipIdInner}>{tooltipText}</Tooltip>
      )}
      {clipboardText ? (
        <CopyToClipboard onCopy={onCopy} textToCopy={clipboardText}>
          {childrenText}
        </CopyToClipboard>
      ) : (
        childrenText
      )}
    </>
  );
};

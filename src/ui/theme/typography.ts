export interface Typographies {
  h1: {
    fontSize: string;
    fontWeight: string;
    lineHeight: string;
  };
  h2: {
    fontSize: string;
    fontWeight: string;
    lineHeight: string;
  };
  h3: {
    fontSize: string;
    fontWeight: string;
    lineHeight: string;
  };
  h4: {
    fontSize: string;
    fontWeight: string;
    lineHeight: string;
  };
  h5: {
    fontSize: string;
    fontWeight: string;
    lineHeight: string;
  };
  h6: {
    fontSize: string;
    fontWeight: string;
    lineHeight: string;
  };
  body_price: {
    fontSize: string;
    fontWeight: string;
    lineHeight: string;
  };
  body_price2: {
    fontSize: string;
    fontWeight: string;
    lineHeight: string;
  };
  body_label: {
    fontSize: string;
    fontWeight: string;
    lineHeight: string;
  };
  button_rect: {
    fontSize: string;
    fontWeight: string;
    lineHeight: string;
  };
  body_small: {
    fontSize: string;
    fontWeight: string;
    lineHeight: string;
  };

}

export const typography: Typographies = {
  h1: {
    fontSize: "40px",
    fontWeight: "700",
    lineHeight: "48px",
  },
  h2: {
    fontSize: "30px",
    fontWeight: "700",
    lineHeight: "30px",
  },
  h3: {
    fontSize: "24px",
    fontWeight: "700",
    lineHeight: "30px",
  },
  h4: {
    fontSize: "20px",
    fontWeight: "600",
    lineHeight: "13px",
  },
  h5: {
    fontSize: "18px",
    fontWeight: "400",
    lineHeight: "13px",
  },
  h6: {
    fontSize: "12px",
    fontWeight: "400",
    lineHeight: "13px",
  },
  body_price: {
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "34px",
  },
  body_price2: {
    fontSize: "21px",
    fontWeight: "400",
    lineHeight: "25px",
  },
  body_label: {
    fontSize: '0.7rem',
    fontWeight: '900',
    lineHeight: "18px",
  },
  button_rect: {
    fontSize: "15px",
    fontWeight: "400",
    lineHeight: "18px",
  },
  body_small: {
    fontSize: "8px",
    fontWeight: "400",
    lineHeight: "18px",
  },

};

export type TypographyType = keyof Typographies;

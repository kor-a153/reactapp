// UI / UX 가이드에 따른 디자인 토큰 정의
const theme = {};

// ─────────────────────────────────────────
// COLOR
// ─────────────────────────────────────────

// Brand Colors
theme.PALETTE = {
  primary: {
    light:      "#DBEAFE",  // Primary Light
    main:       "#027DF0"  // Prima
  },
  secondary: {
    main:  "#00B53F",       // Secondary (green)
    light: "#D1FFE1",       // Secondary Light
  },
  third: {
    main:  "#AB47FF",       // Third (purple)
    light: "#F3E8FF",       // Third Light
  },
  fourth: {
    main:  "#F53102",       // Fourth (red)
    light: "#FFE4E6",       // Fourth Light
  },
  fifth: {
    main:  "#FF34C5",       // Fifth (pink)
    light: "#FFEBFA",       // Fifth Light
  },
  yellow:   "#F5EE03",         // Primary Yellow
  white: "#FFFFFF",
  black: "#333333",
};

// Gradient Colors
theme.GRADIENT = {
  lightBlue: "linear-gradient(135deg, #A7B5FF 0%, #4359FC 100%)",
  deepBlue:  "linear-gradient(135deg, #4359FC 0%, #0014A9 100%)",
  blue:      "linear-gradient(135deg, #5B6EFD 0%, #0014A9 100%)",
};

// Greyscale (1: 밝음 → 10: 어두움 / 11: 배경용 밝은 계열)
theme.GRAYSCALE = {
  1:  "#F2F2F2",
  2:  "#E6E6E6",
  3:  "#D9D9D9",
  4:  "#CCCCCC",
  5:  "#C0C0C0",
  6:  "#B3B3B3",
  7:  "#A6A6A6",
  8:  "#999999",
  9:  "#8D8D8D", 
  10: "#555555", 
};



// Text Colors
theme.TEXT_COLOR = {
  basic:     "#333333",
  primary:   "#4359FC",
  secondary: "#129D1B",
  warning:   "#FF8004",
};

// ─────────────────────────────────────────
// TYPOGRAPHY
// ─────────────────────────────────────────

// h1~h11: 사이즈 기준 / FONT_WEIGHT와 조합하여 사용
// 예) fontSize: theme.FONT_SIZE.h9, fontWeight: theme.FONT_WEIGHT.bold
theme.FONT_SIZE = {
  h1:  "80px",   // Heading1  (bold / regular / extrabold)
  h2:  "60px",   // Heading2  (bold / regular / extrabold)
  h3:  "45px",   // Heading3  (bold / regular / extrabold)
  h3_2:  "36px",   // Heading3-2  (bold / regular / extrabold)
  h4:  "32px",   // Heading4 (bold / regular / extrabold)
  h5:  "28px",   // Heading5 (bold / regular / extrabold)
  h6:  "24px",   // Heading6 (bold / regular / extrabold)
  h7:  "20px",   // Heading7  (bold / regular / extrabold)
  h8:  "16px",   // Heading8  (bold / regular / extrabold)
  h9:  "14px",   // Heading9  (bold / regular / extrabold)
  h10: "12px",   // Heading10 (bold / regular / extrabold)
  h11: "10px",   // Heading11 (bold / regular / extrabold)
};

theme.FONT_WEIGHT = {
  regular: "400",
  bold:    "700",
  extrabold:    "800",
};

// 행간
theme.FONT_LINE = {
  h1:  "98px",
  h2:  "78px",
  h3:  "60px",
  h3_2:  "48px",
  h4:  "46px",
  h5:  "38px",
  h6:  "34px",
  h7:  "30px",
  h8:  "24px",
  h9:  "22px",
  h10: "20px",
};

export default theme;

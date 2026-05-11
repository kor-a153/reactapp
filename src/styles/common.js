<<<<<<< HEAD
// 재사용 CSS 조각 (믹스인) 모음
import { css } from "styled-components";

// ─────────────────────────────────────────
// FLEX
// ─────────────────────────────────────────

=======
// 공통적인 css를 변수에 담아 사용할 수 있도록 제공하는 파일
import { css } from "styled-components";

>>>>>>> 17daae0710bc1cb9efcfcd5d94e80a749f342c24
export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
<<<<<<< HEAD
`;
=======
`

export const flexBeetweenRow = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`

export const flexBeetweenColumn = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`
>>>>>>> 17daae0710bc1cb9efcfcd5d94e80a749f342c24

export const flexCenterRow = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
<<<<<<< HEAD
`;
=======
`
>>>>>>> 17daae0710bc1cb9efcfcd5d94e80a749f342c24

export const flexCenterColumn = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
<<<<<<< HEAD
`;

export const flexBetweenRow = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const flexBetweenColumn = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const flexStartRow = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
`;

export const flexEndRow = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
`;

// ─────────────────────────────────────────
// TYPOGRAPHY — h1 (80px) · extrabold / bold / regular
// ─────────────────────────────────────────

export const h1Extrabold = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h1};
  line-height: ${({ theme }) => theme.FONT_LINE.h1};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.extrabold};
  letter-spacing: -0.03em;
`;

export const h1Bold = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h1};
  line-height: ${({ theme }) => theme.FONT_LINE.h1};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  letter-spacing: -0.03em;
`;

export const h1Regular = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h1};
  line-height: ${({ theme }) => theme.FONT_LINE.h1};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  letter-spacing: -0.03em;
`;

// ─────────────────────────────────────────
// TYPOGRAPHY — h2 (60px) · extrabold / bold / regular
// ─────────────────────────────────────────

export const h2Extrabold = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h2};
  line-height: ${({ theme }) => theme.FONT_LINE.h2};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.extrabold};
  letter-spacing: -0.03em;
`;

export const h2Bold = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h2};
  line-height: ${({ theme }) => theme.FONT_LINE.h2};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  letter-spacing: -0.03em;
`;

export const h2Regular = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h2};
  line-height: ${({ theme }) => theme.FONT_LINE.h2};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  letter-spacing: -0.03em;
`;

// ─────────────────────────────────────────
// TYPOGRAPHY — h3 (45px) · extrabold / bold / regular
// ─────────────────────────────────────────

export const h3Extrabold = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h3};
  line-height: ${({ theme }) => theme.FONT_LINE.h3};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.extrabold};
  letter-spacing: -0.03em;
`;

export const h3Bold = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h3};
  line-height: ${({ theme }) => theme.FONT_LINE.h3};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  letter-spacing: -0.03em;
`;

export const h3Regular = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h3};
  line-height: ${({ theme }) => theme.FONT_LINE.h3};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  letter-spacing: -0.03em;
`;

// ─────────────────────────────────────────
// TYPOGRAPHY — h3_2 (36px) · extrabold / bold / regular
// ─────────────────────────────────────────

export const h3_2Extrabold = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h3_2};
  line-height: ${({ theme }) => theme.FONT_LINE.h3_2};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.extrabold};
  letter-spacing: -0.03em;
`;

export const h3_2Bold = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h3_2};
  line-height: ${({ theme }) => theme.FONT_LINE.h3_2};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  letter-spacing: -0.03em;
`;

export const h3_2Regular = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h3_2};
  line-height: ${({ theme }) => theme.FONT_LINE.h3_2};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  letter-spacing: -0.03em;
`;

// ─────────────────────────────────────────
// TYPOGRAPHY — h4 (32px) · extrabold / bold / regular
// ─────────────────────────────────────────

export const h4Extrabold = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h4};
  line-height: ${({ theme }) => theme.FONT_LINE.h4};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.extrabold};
  letter-spacing: -0.03em;
`;

export const h4Bold = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h4};
  line-height: ${({ theme }) => theme.FONT_LINE.h4};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  letter-spacing: -0.03em;
`;

export const h4Regular = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h4};
  line-height: ${({ theme }) => theme.FONT_LINE.h4};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  letter-spacing: -0.03em;
`;

// ─────────────────────────────────────────
// TYPOGRAPHY — h5 (28px) · extrabold / bold / regular
// ─────────────────────────────────────────

export const h5Extrabold = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h5};
  line-height: ${({ theme }) => theme.FONT_LINE.h5};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.extrabold};
  letter-spacing: -0.03em;
`;

export const h5Bold = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h5};
  line-height: ${({ theme }) => theme.FONT_LINE.h5};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  letter-spacing: -0.03em;
`;

export const h5Regular = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h5};
  line-height: ${({ theme }) => theme.FONT_LINE.h5};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  letter-spacing: -0.03em;
`;

// ─────────────────────────────────────────
// TYPOGRAPHY — h6 (24px) · extrabold / bold / regular
// ─────────────────────────────────────────

export const h6Extrabold = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h6};
  line-height: ${({ theme }) => theme.FONT_LINE.h6};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.extrabold};
  letter-spacing: -0.03em;
`;

export const h6Bold = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h6};
  line-height: ${({ theme }) => theme.FONT_LINE.h6};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  letter-spacing: -0.03em;
`;

export const h6Regular = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h6};
  line-height: ${({ theme }) => theme.FONT_LINE.h6};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  letter-spacing: -0.03em;
`;

// ─────────────────────────────────────────
// TYPOGRAPHY — h7 (20px) · extrabold / bold / regular
// ─────────────────────────────────────────

export const h7Extrabold = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h7};
  line-height: ${({ theme }) => theme.FONT_LINE.h7};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.extrabold};
  letter-spacing: -0.03em;
`;

export const h7Bold = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h7};
  line-height: ${({ theme }) => theme.FONT_LINE.h7};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  letter-spacing: -0.03em;
`;

export const h7Regular = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h7};
  line-height: ${({ theme }) => theme.FONT_LINE.h7};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  letter-spacing: -0.03em;
`;

// ─────────────────────────────────────────
// TYPOGRAPHY — h8 (16px) · extrabold / bold / regular
// ─────────────────────────────────────────

export const h8Extrabold = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h8};
  line-height: ${({ theme }) => theme.FONT_LINE.h8};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.extrabold};
  letter-spacing: -0.03em;
`;

export const h8Bold = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h8};
  line-height: ${({ theme }) => theme.FONT_LINE.h8};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  letter-spacing: -0.03em;
`;

export const h8Regular = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h8};
  line-height: ${({ theme }) => theme.FONT_LINE.h8};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  letter-spacing: -0.03em;
`;

// ─────────────────────────────────────────
// TYPOGRAPHY — h9 (14px) · extrabold / bold / regular
// ─────────────────────────────────────────

export const h9Extrabold = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h9};
  line-height: ${({ theme }) => theme.FONT_LINE.h9};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.extrabold};
  letter-spacing: -0.03em;
`;

export const h9Bold = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h9};
  line-height: ${({ theme }) => theme.FONT_LINE.h9};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  letter-spacing: -0.03em;
`;

export const h9Regular = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h9};
  line-height: ${({ theme }) => theme.FONT_LINE.h9};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  letter-spacing: -0.03em;
`;

// ─────────────────────────────────────────
// TYPOGRAPHY — h10 (12px) · extrabold / bold / regular
// ─────────────────────────────────────────

export const h10Extrabold = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h10};
  line-height: ${({ theme }) => theme.FONT_LINE.h10};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.extrabold};
  letter-spacing: -0.03em;
`;

export const h10Bold = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h10};
  line-height: ${({ theme }) => theme.FONT_LINE.h10};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  letter-spacing: -0.03em;
`;

export const h10Regular = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h10};
  line-height: ${({ theme }) => theme.FONT_LINE.h10};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  letter-spacing: -0.03em;
`;

// ─────────────────────────────────────────
// TYPOGRAPHY — h11 (10px) · extrabold / bold / regular
// ─────────────────────────────────────────

export const h11Extrabold = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h11};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.extrabold};
  letter-spacing: -0.03em;
`;

export const h11Bold = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h11};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  letter-spacing: -0.03em;
`;

export const h11Regular = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h11};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  letter-spacing: -0.03em;
`;
=======
`

export const h1ExBold = css`
  font-size: ${({theme}) => theme.FONT_SIZE["h1"]};
  line-height: ${({theme}) => theme.FONT_LINE["h1"]};
  font-weight: ${({theme}) => theme.FONT_WEIGHT["Exbold"]};
`

export const h1Bold = css`
  font-size: ${({theme}) => theme.FONT_SIZE["h1"]};
  line-height: ${({theme}) => theme.FONT_LINE["h1"]};
  font-weight: ${({theme}) => theme.FONT_WEIGHT["bold"]};
`

export const h1Medium = css`
  font-size: ${({theme}) => theme.FONT_SIZE["h1"]};
  line-height: ${({theme}) => theme.FONT_LINE["h1"]};
  font-weight: ${({theme}) => theme.FONT_WEIGHT["Medium"]};
`

export const h1Regular = css`
  font-size: ${({theme}) => theme.FONT_SIZE["h1"]};
  line-height: ${({theme}) => theme.FONT_LINE["h1"]};
  font-weight: ${({theme}) => theme.FONT_WEIGHT["Regular"]};
`
>>>>>>> 17daae0710bc1cb9efcfcd5d94e80a749f342c24

import styled from "styled-components";
import { desktopMinWidth, tabletMinWidth } from "./theme";

export const displayLarge = styled.div`
  font-family: "Playfair Display", sans-serif;
  font-weight: 400;
  line-height: 150%;
  font-size: 48px;

  @media (min-width: ${tabletMinWidth}) {
    font-size: 64px;
  }

  @media (min-width: ${desktopMinWidth}) {
    font-size: 96px;
  }
`;

export const displayMedium = styled.div`
  font-family: "Playfair Display", sans-serif;
  font-weight: 500;
  line-height: 150%;
  font-size: 24px;

  @media (min-width: ${tabletMinWidth}) {
    font-size: 32px;
  }

  @media (min-width: ${desktopMinWidth}) {
    font-size: 48px;
  }
`;

export const headlineLarge = styled.div`
  font-family: "Playfair Display", sans-serif;
  font-weight: 700;
  line-height: 150%;
  font-size: 24px;

  @media (min-width: ${tabletMinWidth}) {
    font-size: 32px;
  }

  @media (min-width: ${desktopMinWidth}) {
    font-size: 40px;
  }
`;

export const headlineMedium = styled.div`
  font-family: "Playfair Display", sans-serif;
  font-weight: 700;
  line-height: 150%;
  font-size: 20px;

  @media (min-width: ${tabletMinWidth}) {
    font-size: 24px;
  }

  @media (min-width: ${desktopMinWidth}) {
    font-size: 32px;
  }
`;

export const headlineSmall = styled.div`
  font-family: "Playfair Display", sans-serif;
  font-weight: 700;
  line-height: 150%;
  font-size: 18px;

  @media (min-width: ${tabletMinWidth}) {
    font-size: 20px;
  }

  @media (min-width: ${desktopMinWidth}) {
    font-size: 24px;
  }
`;

export const titleLarge = styled.div`
  font-family: "Playfair Display", sans-serif;
  font-weight: 700;
  line-height: 150%;
  font-size: 20px;

  @media (min-width: ${tabletMinWidth}) {
    font-size: 24px;
  }

  @media (min-width: ${desktopMinWidth}) {
    font-size: 28px;
  }
`;

export const titleMedium = styled.div`
  font-family: "Playfair Display", sans-serif;
  font-weight: 700;
  line-height: 150%;
  font-size: 18px;

  @media (min-width: ${tabletMinWidth}) {
    font-size: 20px;
  }

  @media (min-width: ${desktopMinWidth}) {
    font-size: 24px;
  }
`;

export const titleSmall = styled.div`
  font-family: "Playfair Display", sans-serif;
  font-weight: 700;
  line-height: 150%;
  font-size: 16px;

  @media (min-width: ${tabletMinWidth}) {
    font-size: 18px;
  }

  @media (min-width: ${desktopMinWidth}) {
    font-size: 20px;
  }
`;

export const labelLarge = styled.div`
  font-family: "Playfair Display", sans-serif;
  font-weight: 500;
  line-height: 140%;
  font-size: 16px;

  @media (min-width: ${tabletMinWidth}) {
    font-size: 18px;
  }

  @media (min-width: ${desktopMinWidth}) {
    font-size: 20px;
  }
`;

export const labelMedium = styled.div`
  font-family: "Playfair Display", sans-serif;
  font-weight: 500;
  line-height: 140%;
  font-size: 14px;

  @media (min-width: ${tabletMinWidth}) {
    font-size: 16px;
  }

  @media (min-width: ${desktopMinWidth}) {
    font-size: 18px;
  }
`;

export const labelSmall = styled.div`
  font-family: "Playfair Display", sans-serif;
  font-weight: 500;
  line-height: 140%;
  font-size: 12px;

  @media (min-width: ${tabletMinWidth}) {
    font-size: 14px;
  }

  @media (min-width: ${desktopMinWidth}) {
    font-size: 16px;
  }
`;

export const bodyLarge = styled.div`
  font-family: "Playfair Display", sans-serif;
  font-weight: 400;
  line-height: 135%;
  font-size: 16px;

  @media (min-width: ${tabletMinWidth}) {
    font-size: 18px;
  }

  @media (min-width: ${desktopMinWidth}) {
    font-size: 20px;
  }
`;

export const bodyMedium = styled.div`
  font-family: "Playfair Display", sans-serif;
  font-weight: 400;
  line-height: 135%;
  font-size: 14px;

  @media (min-width: ${tabletMinWidth}) {
    font-size: 16px;
  }

  @media (min-width: ${desktopMinWidth}) {
    font-size: 18px;
  }
`;

export const bodySmall = styled.div`
  font-family: "Playfair Display", sans-serif;
  font-weight: 400;
  line-height: 135%;
  font-size: 12px;

  @media (min-width: ${tabletMinWidth}) {
    font-size: 14px;
  }

  @media (min-width: ${desktopMinWidth}) {
    font-size: 16px;
  }
`;

export const mono_displayLarge = styled.div`
  font-family: "Lora", sans-serif;
  font-weight: 400;
  line-height: 150%;
  font-size: 48px;

  @media (min-width: ${tabletMinWidth}) {
    font-size: 64px;
  }

  @media (min-width: ${desktopMinWidth}) {
    font-size: 96px;
  }
`;

export const mono_displayMedium = styled.div`
  font-family: "Lora", sans-serif;
  font-weight: 500;
  line-height: 150%;
  font-size: 24px;

  @media (min-width: ${tabletMinWidth}) {
    font-size: 32px;
  }

  @media (min-width: ${desktopMinWidth}) {
    font-size: 48px;
  }
`;

export const mono_headlineLarge = styled.div`
  font-family: "Lora", sans-serif;
  font-weight: 700;
  line-height: 150%;
  font-size: 24px;

  @media (min-width: ${tabletMinWidth}) {
    font-size: 32px;
  }

  @media (min-width: ${desktopMinWidth}) {
    font-size: 40px;
  }
`;

export const mono_headlineMedium = styled.div`
  font-family: "Lora", sans-serif;
  font-weight: 700;
  line-height: 150%;
  font-size: 20px;

  @media (min-width: ${tabletMinWidth}) {
    font-size: 24px;
  }

  @media (min-width: ${desktopMinWidth}) {
    font-size: 32px;
  }
`;

export const mono_headlineSmall = styled.div`
  font-family: "Lora", sans-serif;
  font-weight: 700;
  line-height: 150%;
  font-size: 18px;

  @media (min-width: ${tabletMinWidth}) {
    font-size: 20px;
  }

  @media (min-width: ${desktopMinWidth}) {
    font-size: 24px;
  }
`;

export const mono_titleLarge = styled.div`
  font-family: "Lora", sans-serif;
  font-weight: 700;
  line-height: 150%;
  font-size: 20px;

  @media (min-width: ${tabletMinWidth}) {
    font-size: 24px;
  }

  @media (min-width: ${desktopMinWidth}) {
    font-size: 28px;
  }
`;

export const mono_titleMedium = styled.div`
  font-family: "Lora", sans-serif;
  font-weight: 700;
  line-height: 150%;
  font-size: 18px;

  @media (min-width: ${tabletMinWidth}) {
    font-size: 20px;
  }

  @media (min-width: ${desktopMinWidth}) {
    font-size: 24px;
  }
`;

export const mono_titleSmall = styled.div`
  font-family: "Lora", sans-serif;
  font-weight: 700;
  line-height: 150%;
  font-size: 16px;

  @media (min-width: ${tabletMinWidth}) {
    font-size: 18px;
  }

  @media (min-width: ${desktopMinWidth}) {
    font-size: 20px;
  }
`;

export const mono_labelLarge = styled.div`
  font-family: "Lora", sans-serif;
  font-weight: 500;
  line-height: 140%;
  font-size: 16px;

  @media (min-width: ${tabletMinWidth}) {
    font-size: 18px;
  }

  @media (min-width: ${desktopMinWidth}) {
    font-size: 20px;
  }
`;

export const mono_labelMedium = styled.div`
  font-family: "Lora", sans-serif;
  font-weight: 500;
  line-height: 140%;
  font-size: 14px;

  @media (min-width: ${tabletMinWidth}) {
    font-size: 16px;
  }

  @media (min-width: ${desktopMinWidth}) {
    font-size: 18px;
  }
`;

export const mono_labelSmall = styled.div`
  font-family: "Lora", sans-serif;
  font-weight: 500;
  line-height: 140%;
  font-size: 12px;

  @media (min-width: ${tabletMinWidth}) {
    font-size: 14px;
  }

  @media (min-width: ${desktopMinWidth}) {
    font-size: 16px;
  }
`;

export const mono_bodyLarge = styled.div`
  font-family: "Lora", sans-serif;
  font-weight: 400;
  line-height: 135%;
  font-size: 16px;

  @media (min-width: ${tabletMinWidth}) {
    font-size: 18px;
  }

  @media (min-width: ${desktopMinWidth}) {
    font-size: 20px;
  }
`;

export const mono_bodyMedium = styled.div`
  font-family: "Lora", sans-serif;
  font-weight: 400;
  line-height: 135%;
  font-size: 14px;

  @media (min-width: ${tabletMinWidth}) {
    font-size: 16px;
  }

  @media (min-width: ${desktopMinWidth}) {
    font-size: 18px;
  }
`;

export const mono_bodySmall = styled.div`
  font-family: "Lora", sans-serif;
  font-weight: 400;
  line-height: 135%;
  font-size: 12px;

  @media (min-width: ${tabletMinWidth}) {
    font-size: 14px;
  }

  @media (min-width: ${desktopMinWidth}) {
    font-size: 16px;
  }
`;
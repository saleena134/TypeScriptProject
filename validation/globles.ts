import { Dimensions, Platform, PixelRatio } from "react-native";

export const WINDOW = Dimensions.get("window");

export const percent = (percentage) => {
  return (percentage / 100) * WINDOW.width - 20;
};

const { width: screenWidth, height: screenHeight } = WINDOW;

export const deviceWidth = screenWidth;
export const deviceHeight = screenHeight;

export const fontFamily = {
  regular: "OpenSans-Regular",
  black: "OpenSans-Bold",
  extraBold: "OpenSans-ExtraBold",
  extraLight: "OpenSans-Light",
  light: "OpenSans-Light",
  bold: "OpenSans-Bold",
  medium: "OpenSans-Medium",
  semiBold: "OpenSans-SemiBold",
  thin: "OpenSans-Light",
  italic: "OpenSans-Italic",
  boldItalic: "OpenSans-BoldItalic",
  lightItalic: "OpenSans-LightItalic",
  extraBoldItalic: "OpenSans-ExtraBoldItalic",
  mediumItalic: "OpenSans-MediumItalic",
  semiBoldItalic: "OpenSans-SemiBoldItalic",
};

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 414;

export function normalize(size) {
  const newSize = size * scale;
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
}

const scale1 = SCREEN_HEIGHT / 784;

export function normalizeHeight(size) {
  const newSize = size * scale1;
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
}

export const textSizes = {
  h1: normalize(38),
  h2: normalize(36),
  h3: normalize(34),
  h4: normalize(32),
  h5: normalize(29),
  h6: normalize(27),
  h7: normalize(25),
  h8: normalize(20),
  h9: normalize(18),
  h10: normalize(16),
  h11: normalize(14),
  h12: normalize(12),
  h13: normalize(10),
};
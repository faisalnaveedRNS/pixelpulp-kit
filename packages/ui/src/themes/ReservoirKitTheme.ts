export interface ReservoirKitTheme {
  radii: {
    borderRadius: string
  }
  fonts: {
    body: string
    button: string
    headline: string
  }
  colors: ReservoirKitThemeColors
  assets: {
    ethIcon: 'glyph' | 'gray' | 'purple'
  }
}

export interface ReservoirKitThemeColors {
  // accent colors
  accentBase: string
  accentBgSubtle: string
  accentBg: string
  accentBgHover: string
  accentBgActive: string
  accentLine: string
  accentBorder: string
  accentBorderHover: string
  accentSolid: string
  accentSolidHover: string
  accentText: string
  accentTextContrast: string

  // neutral colors
  neutralBase: string
  neutralBgSubtle: string
  neutralBg: string
  neutralBgHover: string
  neutralBgActive: string
  neutalLine: string
  neutralBorder: string
  neutralBorderHover: string
  neutralSolid: string
  neutralSolidHover: string
  neutralText: string
  neutralTextContrast: string

  // secondary colors
  secondaryBase: string
  secondaryBgSubtle: string
  secondaryBg: string
  secondaryBgHover: string
  secondaryBgActive: string
  secondaryLine: string
  secondaryBorder: string
  secondaryBorderHover: string
  secondarySolid: string
  secondarySolidHover: string
  secondaryText: string
  secondaryTextContrast: string

  // general colors
  borderColor: string
  textColor: string
  focusColor: string
  errorText: string
  errorAccent: string
  successAccent: string
  subtitleColor: string
  blackwhiteColor: string
  dotInactiveColor: string
  dotActiveColor: string

  // component colors
  reservoirLogoColor: string
  inputBackground: string
  buttonTextColor: string
  buttonTextHoverColor: string
  overlayBackground: string
  headerBackground: string
  footerBackground: string
  contentBackground: string
  priceBackground?: string
  wellBackground: string
  popoverBackground: string
  closeBorder: string
  pColor: string
  boxBackground: string
  switchBorder: string
}

export type ReservoirKitOverrides = {
  borderRadius?: string
  font?: string
  buttonFont?: string
  buttonTextColor?: string
  buttonTextHoverColor?: string
  headlineFont?: string
  primaryColor?: string
  primaryHoverColor?: string
  wellBackground?: string
  textColor?: string
  headerBackground?: string
  contentBackground?: string
  priceBackground?: string
  footerBackground?: string
  overlayBackground?: string
  popoverBackground?: string
  borderColor?: string
  closeBorder?: string
  pColor?: string
  boxBackground?: string
  dotInactiveColor?: string
  dotActiveColor?: string
  switchBorder?: string
  ethIcon?: ReservoirKitTheme['assets']['ethIcon']
}

type ReservoirKitSharedTheme = Pick<ReservoirKitTheme, 'fonts' | 'radii'>

export const sharedThemeConfig = (
  overrides?: ReservoirKitOverrides
): ReservoirKitSharedTheme => {
  return {
    radii: {
      borderRadius: overrides?.borderRadius || '4px',
    },
    fonts: {
      body: overrides?.font || 'Poppins',
      button: overrides?.buttonFont || overrides?.font || 'Poppins',
      headline: overrides?.headlineFont || overrides?.font || 'Poppins',
    },
  }
}

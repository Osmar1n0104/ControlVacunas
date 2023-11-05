// TODO: write documentation about fonts and typography along with guides on how to add custom fonts in own
// markdown file and add links from here

import { Platform } from 'react-native'
import {
  SpaceGrotesk_300Light,
  SpaceGrotesk_400Regular,
  SpaceGrotesk_500Medium,
  SpaceGrotesk_600SemiBold,
  SpaceGrotesk_700Bold,
} from '@expo-google-fonts/space-grotesk'

import {
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from '@expo-google-fonts/poppins'

export const customFontsToLoad = {
  SpaceGrotesk_300Light,
  SpaceGrotesk_400Regular,
  SpaceGrotesk_500Medium,
  SpaceGrotesk_600SemiBold,
  SpaceGrotesk_700Bold,

  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
}

const fonts = {
  spaceGrotesk: {
    // Cross-platform Google font.
    light: 'SpaceGrotesk_300Light',
    normal: 'SpaceGrotesk_400Regular',
    medium: 'SpaceGrotesk_500Medium',
    semiBold: 'SpaceGrotesk_600SemiBold',
    bold: 'SpaceGrotesk_700Bold',
  },
  helveticaNeue: {
    // iOS only font.
    thin: 'HelveticaNeue-Thin',
    light: 'HelveticaNeue-Light',
    normal: 'Helvetica Neue',
    medium: 'HelveticaNeue-Medium',
  },
  courier: {
    // iOS only font.
    normal: 'Courier',
  },
  sansSerif: {
    // Android only font.
    thin: 'sans-serif-thin',
    light: 'sans-serif-light',
    normal: 'sans-serif',
    medium: 'sans-serif-medium',
  },
  monospace: {
    // Android only font.
    normal: 'monospace',
  },
}

export const typography = {
  /**
   * The fonts are available to use, but prefer using the semantic name.
   */
  fonts,
  /**
   * The primary font. Used in most places.
   */
  primary: fonts.spaceGrotesk,
  /**
   * An alternate font used for perhaps titles and stuff.
   */
  secondary: Platform.select({ ios: fonts.helveticaNeue, android: fonts.sansSerif }),
  /**
   * Lets get fancy with a monospace font!
   */
  code: Platform.select({ ios: fonts.courier, android: fonts.monospace }),
}

export const poppins = {
  '100_thin': Poppins_100Thin,
  '100_thin_italic': Poppins_100Thin_Italic,
  '200_extra_light': Poppins_200ExtraLight,
  '200_extra_light_italic': Poppins_200ExtraLight_Italic,
  '300_light': Poppins_300Light,
  '300_light_italic': Poppins_300Light_Italic,
  '400_regular': Poppins_400Regular,
  '400_regular_italic': Poppins_400Regular_Italic,
  '500_medium': Poppins_500Medium,
  '500_medium_italic': Poppins_500Medium_Italic,
  '600_semi_bold': Poppins_600SemiBold,
  '600_semi_bold_italic': Poppins_600SemiBold_Italic,
  '700_bold': Poppins_700Bold,
  '700_bold_italic': Poppins_700Bold_Italic,
  '800_extra_bold': Poppins_800ExtraBold,
  '800_extra_bold_italic': Poppins_800ExtraBold_Italic,
  '900_black': Poppins_900Black,
  '900_black_italic': Poppins_900Black_Italic,
}

export const spaceGrotesk = {
  '300_light': SpaceGrotesk_300Light,
  '400_regular': SpaceGrotesk_400Regular,
  '500_medium': SpaceGrotesk_500Medium,
  '600_semi_bold': SpaceGrotesk_600SemiBold,
  '700_bold': SpaceGrotesk_700Bold,
}

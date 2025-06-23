import { colors } from '@/theme/colors';
import { fonts } from '@/theme/fonts';
import { spacing } from '@/theme/spacing';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButtonLabel: {
    color: colors.text,
    marginTop: spacing.xl,
    fontSize: fonts.size.small,
    fontFamily: fonts.family.regular,
  },
});

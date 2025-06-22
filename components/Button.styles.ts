import { colors } from '@/theme/colors';
import { fonts } from '@/theme/fonts';
import { spacing } from '@/theme/spacing';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: spacing.xxl,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.xs,
  },
  button: {
    borderRadius: spacing.lg,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: spacing.sm,
  },
  buttonLabel: {
    color: colors.text,
    fontSize: fonts.size.small,
    fontFamily: fonts.family.regular,
  },
});

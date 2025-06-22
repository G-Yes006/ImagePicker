import { colors } from '@/theme/colors';
import { fonts } from '@/theme/fonts';
import { spacing } from '@/theme/spacing';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  modalContent: {
    height: '25%',
    width: '100%',
    backgroundColor: colors.background,
    borderTopRightRadius: spacing.xl,
    borderTopLeftRadius: spacing.xl,
    position: 'absolute',
    bottom: 0,
  },
  titleContainer: {
    height: '16%',
    backgroundColor: colors.backgroundSecondary,
    borderTopRightRadius: spacing.lg,
    borderTopLeftRadius: spacing.lg,
    paddingHorizontal: spacing.xxl,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: colors.text,
    fontSize: fonts.size.small,
    fontFamily: fonts.family.regular,
  },
});

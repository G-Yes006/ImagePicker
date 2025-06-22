import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  circleButtonContainer: {
    width: 84,
    height: 84,
    marginHorizontal: spacing.massive,
    borderWidth: 4,
    borderColor: colors.primary,
    borderRadius: spacing.huge,
    padding: spacing.xs,
  },
  circleButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: spacing.huge,
    backgroundColor: colors.accent,
  },
});

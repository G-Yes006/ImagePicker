import { spacing } from '@/theme/spacing';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: spacing.lg,
    borderTopLeftRadius: spacing.lg,
    paddingHorizontal: spacing.xxl,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: spacing.xxl,
  },
});

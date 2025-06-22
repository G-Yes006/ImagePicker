import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Pressable, Text, View } from 'react-native';
import { styles } from './Button.styles';

type Props = {
  label: string;
  theme?: 'primary';
  onPress?: () => void;
};

export default function Button({ label, theme, onPress }: Props) {
  if (theme === 'primary') {
    return (
      <View
        style={[
          styles.buttonContainer,
          { borderWidth: 4, borderColor: colors.primary, borderRadius: spacing.xl },
        ]}
      >
        <Pressable
          style={[styles.button, { backgroundColor: colors.accent }]}
          onPress={onPress}
        >
          <FontAwesome
            name="picture-o"
            size={18}
            color={colors.textDark}
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel, { color: colors.textDark }]}>
            {label}
          </Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

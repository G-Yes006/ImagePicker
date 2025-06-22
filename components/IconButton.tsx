import { colors } from '@/theme/colors';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Pressable, Text } from 'react-native';
import { styles } from './IconButton.styles';

type Props = {
  icon: keyof typeof MaterialIcons.glyphMap;
  label: string;
  onPress: () => void;
};

export default function IconButton({ icon, label, onPress }: Props) {
  return (
    <Pressable style={styles.iconButton} onPress={onPress}>
      <MaterialIcons name={icon} size={24} color={colors.text} />
      <Text style={styles.iconButtonLabel}>{label}</Text>
    </Pressable>
  );
}

import { Image } from 'expo-image';
import { ImageSourcePropType } from 'react-native';
import { styles } from './ImageViewer.styles';

type Props = {
  imgSource: ImageSourcePropType;
  selectedImage?: string;
};

export default function ImageViewer({ imgSource, selectedImage }: Props) {
  const imageSource = selectedImage ? { uri: selectedImage } : imgSource;

  return <Image source={imageSource} style={styles.image} />;
}

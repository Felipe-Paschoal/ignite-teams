import logoImg from '@assets/logo.png';
import { Image, View } from 'react-native';

export function Header() {
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image style={{ width: 46, height: 55 }} source={logoImg} />
    </View>
  );
}

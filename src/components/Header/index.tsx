import logoImg from '@assets/logo.png';
import { CaretLeftIcon } from 'phosphor-react-native';
import { Image, TouchableOpacity, View } from 'react-native';
import { useTheme } from 'styled-components';

type Props = {
  showBackButton?: boolean;
};

export function Header({ showBackButton }: Props) {
  const { WHITE } = useTheme().COLORS;
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {showBackButton && (
        <TouchableOpacity style={{ flex: 1 }}>
          <CaretLeftIcon color={WHITE} size={32} />
        </TouchableOpacity>
      )}
      <Image style={{ width: 46, height: 55 }} source={logoImg} />
    </View>
  );
}

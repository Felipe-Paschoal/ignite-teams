import { Header } from '@components/Header';
import { View } from 'react-native';
import { useTheme } from 'styled-components';

export function Groups() {
  const { GRAY_600 } = useTheme().COLORS;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: GRAY_600,
        padding: 24,
      }}
    >
      <Header />
    </View>
  );
}

import { ActivityIndicator, View } from 'react-native';
import { useTheme } from 'styled-components';

export function Loading() {
  const { GREEN_700 } = useTheme().COLORS;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121214',
      }}
    >
      <ActivityIndicator color={GREEN_700} />
    </View>
  );
}

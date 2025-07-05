import { StyleSheet, Text, View } from 'react-native';
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
    ></View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

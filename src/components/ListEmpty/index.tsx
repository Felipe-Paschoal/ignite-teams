import { View, Text } from 'react-native';
import { useTheme } from 'styled-components';

type Props = {
  message: string;
};

export function ListEmpty({ message }: Props) {
  const theme = useTheme();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontSize: theme.FONT_SIZE.SM,
          fontFamily: theme.FONT_FAMILY.REGULAR,
          color: theme.COLORS.GRAY_300,
        }}
      >
        {message}
      </Text>
    </View>
  );
}

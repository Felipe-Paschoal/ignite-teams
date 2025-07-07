import { Text, View } from 'react-native';
import { useTheme } from 'styled-components';

type Props = {
  title: string;
  subtitle: string;
};

export function Highlight({ title, subtitle }: Props) {
  const theme = useTheme();
  return (
    <View style={{ width: '100%', marginVertical: 32 }}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: theme.FONT_SIZE.XL,
          fontFamily: theme.FONT_FAMILY.BOLD,
          color: theme.COLORS.WHITE,
        }}
      >
        {title}
      </Text>

      <Text
        style={{
          textAlign: 'center',
          fontSize: theme.FONT_SIZE.MD,
          fontFamily: theme.FONT_FAMILY.REGULAR,
          color: theme.COLORS.GRAY_300,
        }}
      >
        {subtitle}
      </Text>
    </View>
  );
}

import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components';

type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
};

export function Button({ title, type = 'PRIMARY', ...rest }: Props) {
  const theme = useTheme();

  const backgroundColor =
    type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK;

  return (
    <TouchableOpacity
      {...rest}
      style={{
        flex: 1,
        minHeight: 56,
        maxHeight: 56,
        backgroundColor,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        ...(rest.style && typeof rest.style === 'object' ? rest.style : {}),
      }}
    >
      <Text
        style={{
          fontSize: theme.FONT_SIZE.MD,
          color: theme.COLORS.WHITE,
          fontFamily: theme.FONT_FAMILY.BOLD,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components';

type FilterStyleProps = {
  isActive?: boolean;
};

type Props = TouchableOpacityProps &
  FilterStyleProps & {
    title: string;
  };

export function Filter({ title, isActive = false, ...rest }: Props) {
  const theme = useTheme();

  return (
    <TouchableOpacity
      {...rest}
      style={{
        borderWidth: isActive ? 1 : 0,
        borderColor: isActive ? theme.COLORS.GREEN_700 : 'transparent',
        borderRadius: 4,
        marginRight: 12,
        height: 38,
        width: 70,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text
        style={{
          textTransform: 'uppercase',
          fontFamily: theme.FONT_FAMILY.BOLD,
          fontSize: theme.FONT_SIZE.SM,
          color: theme.COLORS.WHITE,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

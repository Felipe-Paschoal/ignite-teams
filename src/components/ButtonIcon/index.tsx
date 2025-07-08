import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

type ButtonIconTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconTypeStyleProps;
};

export function ButtonIcon({ icon, type = 'PRIMARY', ...rest }: Props) {
  const theme = useTheme();

  const iconColor =
    type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED;

  return (
    <TouchableOpacity
      {...rest}
      style={{
        width: 56,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 12,
      }}
    >
      <MaterialIcons name={icon} size={24} color={iconColor} />
    </TouchableOpacity>
  );
}

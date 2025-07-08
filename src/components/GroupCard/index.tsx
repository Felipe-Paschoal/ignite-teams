import {
  TouchableOpacity,
  Text,
  View,
  TouchableOpacityProps,
} from 'react-native';
import { UsersThreeIcon } from 'phosphor-react-native';
import { useTheme } from 'styled-components';

type Props = TouchableOpacityProps & {
  title: string;
};

export function GroupCard({ title, ...rest }: Props) {
  const theme = useTheme();

  return (
    <TouchableOpacity
      {...rest}
      style={{
        width: '100%',
        height: 90,
        backgroundColor: theme.COLORS.GRAY_500,
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 24,
        marginBottom: 12,
      }}
    >
      <UsersThreeIcon
        size={32}
        color={theme.COLORS.GREEN_700}
        weight="fill"
        style={{ marginRight: 20 }}
      />
      <Text
        style={{
          fontSize: theme.FONT_SIZE.MD,
          color: theme.COLORS.GRAY_200,
          fontFamily: theme.FONT_FAMILY.REGULAR,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

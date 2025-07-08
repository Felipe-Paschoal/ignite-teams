import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import { ButtonIcon } from '@components/ButtonIcon';

type Props = {
  name: string;
  onRemove: () => void;
};

export function PlayerCard({ name, onRemove }: Props) {
  const theme = useTheme();

  return (
    <View
      style={{
        width: '100%',
        height: 56,
        backgroundColor: theme.COLORS.GRAY_500,
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
      }}
    >
      <MaterialIcons
        name="person"
        size={24}
        color={theme.COLORS.GRAY_200}
        style={{ marginLeft: 16, marginRight: 4 }}
      />

      <Text
        style={{
          flex: 1,
          fontSize: theme.FONT_SIZE.MD,
          color: theme.COLORS.GRAY_200,
          fontFamily: theme.FONT_FAMILY.REGULAR,
        }}
      >
        {name}
      </Text>

      <ButtonIcon icon="close" type="SECONDARY" onPress={onRemove} />
    </View>
  );
}

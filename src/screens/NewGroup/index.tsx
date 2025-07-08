import { View } from 'react-native';
import { UsersThreeIcon } from 'phosphor-react-native';
import { useTheme } from 'styled-components';

import { Header } from '@components/Header';
import { Button } from '@components/Button';
import { Highlight } from '@components/Highlight';

export function NewGroup() {
  const theme = useTheme();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.COLORS.GRAY_600,
        padding: 24,
      }}
    >
      <Header showBackButton />

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <UsersThreeIcon
          size={56}
          color={theme.COLORS.GREEN_700}
          style={{ alignSelf: 'center' }}
        />

        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />

        <Button title="Criar" />
      </View>
    </View>
  );
}

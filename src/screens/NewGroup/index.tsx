import { View } from 'react-native';
import { UsersThreeIcon } from 'phosphor-react-native';
import { useTheme } from 'styled-components';

import { Header } from '@components/Header';
import { Button } from '@components/Button';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';

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

        <Input placeholder="Nome da turma" />

        <Button title="Criar" style={{ marginTop: 20 }} />
      </View>
    </View>
  );
}

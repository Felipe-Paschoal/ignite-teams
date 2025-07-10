import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { UsersThreeIcon } from 'phosphor-react-native';
import { useTheme } from 'styled-components';

import { Header } from '@components/Header';
import { Button } from '@components/Button';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export function NewGroup() {
  const [group, setGroup] = useState('');
  const theme = useTheme();
  const navigation = useNavigation();

  function handleNew() {
    navigation.navigate('players', { group });
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.COLORS.GRAY_600,
      }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={{ flex: 1, padding: 24 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <Header showBackButton />

          <View style={{ flex: 1, justifyContent: 'center' }}>
            <UsersThreeIcon
              size={56}
              color={theme.COLORS.GREEN_700}
              style={{ alignSelf: 'center' }}
            />

            <Highlight
              title="Nova turma"
              subtitle="crie a turma para adicionar as pessoas"
            />

            <Input placeholder="Nome da turma" onChangeText={setGroup} />

            <Button
              title="Criar"
              style={{ marginTop: 20 }}
              onPress={handleNew}
            />
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

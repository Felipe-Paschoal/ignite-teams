import { Button } from '@components/Button';
import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { ListEmpty } from '@components/ListEmpty';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components';

export function Groups() {
  const [groups, setGroups] = useState<string[]>(['Galera da Rocket']);
  const { GRAY_600 } = useTheme().COLORS;
  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate('new');
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: GRAY_600,
        padding: 24,
      }}
    >
      <Header />
      <Highlight title="Turmas" subtitle="jogue com sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
      />

      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </SafeAreaView>
  );
}

import { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { useTheme } from 'styled-components';

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { ButtonIcon } from '@components/ButtonIcon';
import { Filter } from '@components/Filter';
import { Input } from '@components/Input';
import { PlayerCard } from '@components/PlayerCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

export function Players() {
  const theme = useTheme();
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState(['Rodrigo', 'Vini']);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.COLORS.GRAY_600,
        padding: 24,
      }}
    >
      <Header showBackButton />

      <Highlight
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />

      <View
        style={{
          width: '100%',
          backgroundColor: theme.COLORS.GRAY_700,
          flexDirection: 'row',
          justifyContent: 'center',
          borderRadius: 6,
        }}
      >
        <Input placeholder="Nome da pessoa" autoCorrect={false} />

        <ButtonIcon icon="add" />
      </View>

      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 32,
          marginBottom: 12,
        }}
      >
        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />

        <Text
          style={{
            color: theme.COLORS.GRAY_200,
            fontFamily: theme.FONT_FAMILY.BOLD,
            fontSize: theme.FONT_SIZE.SM,
            marginLeft: 8,
          }}
        >
          {players.length}
        </Text>
      </View>
      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time" />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
      />

      <Button title="Remover Turma" type="SECONDARY" />
    </View>
  );
}

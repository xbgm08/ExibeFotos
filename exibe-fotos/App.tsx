import { StatusBar } from 'expo-status-bar';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image
} from 'react-native';
import { useState } from 'react';

interface Imagem {
  id?: string;
  url: string;
}

export default function App() {
  const [imagens, setImagens] = useState<Imagem[]>([])

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Aplicativo de Exibição de Fotos de Gatos</Text><br />
      <Pressable
        style={styles.button}
      // onPress={função que vai acionar o consumo da api}  
      >
        <Text
          style={styles.buttonText}>
          Exibir fotos
        </Text>
      </Pressable>

      {imagens.length > 0 ?? 
        <FlatList
          style={styles.list}
          keyExtractor={item => item.id!}
          data={imagens}
          renderItem={imagem => (
            <View
              style={styles.listItem}>
              <Image
                style={styles.listItemImage}
                source={{
                  uri: imagem.item.url,
                }}
              />              
            </View>
          )}
        />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titulo: {
    color: 'red',
    alignItems: 'center',
    fontFamily: 'fantasy',
  },
  button: {
    width: '80%',
    backgroundColor: '#0096F3',
    padding: 8,
    borderRadius: 4,
    marginBottom: 4,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  },
  list: {
    borderWidth: 1,
    borderColor: 'lightgray',
    width: '80%',
    borderRadius: 4,
    marginBottom: 8
  },
  listItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBlockColor: 'gray',
    borderRadius: 8,
    backgroundColor: '#F0F0F0',
    margin: 8,
    flexDirection: 'row',
    alignItems: 'center'
  },
  listItemImage: {
  },
});
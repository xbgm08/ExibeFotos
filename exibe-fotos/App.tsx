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
import dotenv from 'dotenv';

const CAT_KEY = process.env.CAT_KEY;
const api_url = `https://api.thecatapi.com/v1/images/search?limit=5&api_key=${CAT_KEY}`;

interface Imagem {
  id?: string;
  url: string;
}

export default function App() {
  const [imagens, setImagens] = useState<Imagem[]>([])

  const exbirFotos = () => {
    fetch(api_url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setImagens(imagensAnteriores => [...imagensAnteriores, ...data]);
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Aplicativo de Exibição de Fotos de Gatos</Text><br />
      <Pressable
        style={styles.button}
        onPress={exbirFotos}
      >
        <Text
          style={styles.buttonText}>
          Exibir fotos
        </Text>
      </Pressable>  

      {imagens.length > 0 &&
        <FlatList
          style={styles.list}
          keyExtractor={item => item.id!}
          data={imagens}
          renderItem={imagem => (
            <View
              style={styles.listItem}>
              <Image
                style={styles.listItemImage}
                key = {imagem.item.id}
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
    marginBottom: 8,
  },
  listItem: {
    padding: 8,
    borderBottomWidth: 1,
    borderBlockColor: 'gray',
    borderRadius: 6,
    backgroundColor: '#F0F0F0',
    margin: 6,
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex'    
  },
  listItemImage: {
    width: 300, 
    height: 300,
    resizeMode: 'stretch',    
    flexGrow: 1,
    flexBasis: 200,
  },
});
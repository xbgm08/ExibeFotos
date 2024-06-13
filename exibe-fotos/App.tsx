import { StatusBar } from 'expo-status-bar';
import { 
  Pressable,
  StyleSheet, 
  Text, 
  View 
} from 'react-native';

export default function App() { 
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Aplicativo de Exibição de Fotos de Gatos</Text><br/>
      <Pressable
        style={styles.button}
        // onPress={função que vai acionar o consumo da api}  
        >
        <Text
          style={styles.buttonText}>          
          Exibir fotos
        </Text>
      </Pressable>
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
  button:{ 
    width: '80%',
    backgroundColor: '#0096F3', 
    padding: 8,
    borderRadius: 4,
    marginBottom: 4,
  },
  buttonText:{
    color: 'white',
    textAlign: 'center'
  },  
});
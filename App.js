import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

export default function App() {
  const [opponent, setOpponent] = useState(null)
  const [result, setResult] = useState(null)

  const hands = {
    pedra: "🗿",
    papel: "📃",
    tesoura: "✂"
  };

  const choices = Object.keys(hands);

  function move(choice) {
    const index = Math.floor(Math.random() * choices.length);
    const pc = choices[index];
    
    const win1 = choice == 'pedra' && pc == 'tesoura';
    const win2 = choice == 'papel' && pc == 'pedra';
    const win3 = choice == 'tesoura' && pc == 'papel';

    if (choice == pc){
      setResult('empate')
    } else if (win1 || win2 || win3) {
      setResult('Vitoria! 👑')
    } else {
      setResult('derrota!!!!!! ❌')
    }

    setOpponent(pc);

  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jankenpon!</Text>

      <View>
        <View><Text style={styles.title1}>Oponente</Text>
        <Text style={styles.title3}>{opponent == null ? '?' : hands[opponent]}</Text></View>
        <View style={styles.title1}>X</View>
        <View><Text style={styles.title1}>Você:</Text></View>
        <View style={styles.container1}>
          {choices.map((item) => <TouchableOpacity key={item} onPress={() => move(item)}><Text style={styles.title2}>{hands[item]}</Text></TouchableOpacity>)}
        </View>
      </View>
      <Text style={styles.title1}>Resultado:</Text>
      <Text style={styles.title3}>{result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBC2D5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    flexDirection: 'row'
  },

  title: {
    color: '#A41153',
    fontWeight: 'bold',
    fontSize: 40,
  },
  title1: {
    color: '#A44073',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 20,
    textAlign: 'center'
  },
  title2: {
    color: '#A45053',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 5,
    textAlign: 'center',
    paddingLeft: 15
  },
  title3: {
    color: '#A45053',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 5,
    textAlign: 'center',
  },
});

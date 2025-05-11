import guitarbg from '@/assets/images/guitarbg.png';
import React, { useState } from 'react';
import { Alert, Button, ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const NOTES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const CHORDS_LOC = [0, 2, 2, 1, 2, 2, 2];
const MAJ_MIN_MAP = [1, 0, 0, 1, 1, 0, 2];
const CH_NUM = ["I", "ii", "iii", "IV", "V", "vi", "vii°"];

export default function Index() {
  
  const [ key, setKey ] = useState('');
  
  const handleKeyInput = () => {

    console.log("Key of " + key + " entered")

    if (!NOTES.includes(key.toUpperCase())) {
      Alert.alert("Invalid Key: " + key)
      return;
    } 

    let chords = [];
    let root = NOTES.indexOf(key.toUpperCase());
    console.log(root);


  }

  return (


    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ImageBackground
          source={guitarbg}
          resizeMode='cover'
          style={styles.image}
        >
          <View style={styles.overlay} />
          <Text style={styles.text}>Find my Chords</Text>
          <TextInput
            style={styles.input}
            placeholder='Type Key '
            placeholderTextColor={'grey'}
            value={key}
            onChangeText={setKey}
          />
          <Pressable style={styles.button} onPress={handleKeyInput} >
            <Text style={styles.buttonText}>Get Chords</Text>
          </Pressable>
 
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  safeArea: {
    backgroundColor: 'black',
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'start',
    paddingTop: 50,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  text: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 40,
    margin: 40,
    zIndex: 1,
  },
  input: {
    borderColor: 'white',
    width: '70%',
    height: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    color: 'white',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 16,
    marginBottom: 20,
    zIndex: 1,
  },
  results: {
    width: '80%',
    zIndex: 1,
  },
  resultText: {
    color: 'white',
    fontSize: 18,
    marginBottom: 6,
  },
  button: {
    padding: 9,
    backgroundColor: 'rgba(200, 200, 200, 0.9)',
    borderRadius: 7,
    color: "white",
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 500,
    paddingHorizontal: 10
  },

});

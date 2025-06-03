import guitarbg from '@/assets/images/guitarbg.png';
import React, { useState } from 'react';
import { Alert, ImageBackground, StyleSheet, Text, TextInput, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const NOTES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const MINOR_NOTES = ["Cm", "C#m", "Dm", "D#m", "Em", "Fm", "F#m", "Gm", "G#m", "Am", "A#m", "Bm"];

export default function Index() {
  
  const [ chords, setChords ] = useState('');
  const [ transposedChordList, setTransposedChordList ] = useState([]);
  const [ transpose, setTranspose ] = useState('');
  
  const handleChordsInput = () => {
    console.log("You entered the chords: " + chords + "\nTranspose: " + transpose)
    let transposedChordList = []

    let chordList = chords.trim().split(/\s+/);
    console.log(chordList);

    for (let chordIndex = 0; chordIndex < chordList.length; chordIndex++) {
      let currentNoteIndex = NOTES.indexOf(chordList[chordIndex].toUpperCase())
      if (currentNoteIndex === -1) {
        console.log("Trying with minor")
        currentNoteIndex = MINOR_NOTES.indexOf(chordList[chordIndex])
        if (currentNoteIndex === -1) {
          Alert.alert("Not a Chord!");
          return;
        }
        console.log(currentNoteIndex)
        transposedChordList.push(MINOR_NOTES[(currentNoteIndex - transpose + MINOR_NOTES.length) % MINOR_NOTES.length])
        console.log(transposedChordList)

      } else {
        console.log(currentNoteIndex)
        transposedChordList.push(NOTES[(currentNoteIndex - transpose + NOTES.length) % NOTES.length])
        console.log(transposedChordList)
      }
    }
    
    
    setTransposedChordList(transposedChordList)

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
          <Text style={styles.text}>Transpose</Text>
          <TextInput
            style={styles.input}
            placeholder='Enter Chords '
            placeholderTextColor={'grey'}
            value={chords}
            onChangeText={setChords}
          />

          
          <TextInput
            style={styles.input}
            placeholder='Enter Transpose (in half-steps)'
            placeholderTextColor={'grey'}
            inputMode='numeric'
            maxLength={2}
            value={transpose}
            onChangeText={setTranspose}
          />
          
          <Pressable style={styles.button} onPress={handleChordsInput}>
            <Text style={styles.buttonText}>Get Chords</Text>
          </Pressable>

          <View style={styles.results}>

            {transposedChordList.map((val, index) => (
              
              <Text key={index} style={styles.resultText}>
                val {"-->"} {val}
              </Text>
            ))}
          </View>

          <Text style={{   color: 'white', fontSize: 16, fontWeight: 600, margin: 20, padding: 10, width: "70%"}} >
            Transpose: what fret the capo will be
          </Text>
 
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

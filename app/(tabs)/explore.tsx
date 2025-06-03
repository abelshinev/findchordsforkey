import guitarbg from '@/assets/images/guitarbg.png';
import React, { useState } from 'react';
import { Alert, Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Index() {
  
  const [ key, setKey ] = useState('');
  
  const handleChordsInput = () => {
    Alert.alert("You entered the chords: " + key)
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
            value={key}
            onChangeText={setKey}
          />
          <Text style={styles.text} >Work In Progress..</Text>
 
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
    padding: 50,
    backgroundColor: 'rgba(50, 50, 50, 0.5)',
    borderRadius: 10,
    width: 100,
  }
});

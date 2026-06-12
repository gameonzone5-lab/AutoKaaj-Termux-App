import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';

export default function App() {
  const [history, setHistory] = useState(['AutoKaaj Shell Ready', 'Type help']);
  const [input, setInput] = useState('');

  const handleCommand = (cmd) => {
    let output = cmd === 'ls' ? 'bin/  home/  scripts/' : 'Command: ' + cmd;
    setHistory([...history, '> ' + cmd, output]);
    setInput('');
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.output}>
        {history.map((line, i) => <Text key={i} style={styles.logText}>{line}</Text>)}
      </ScrollView>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={setInput}
        onSubmitEditing={() => handleCommand(input)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 20 },
  output: { flex: 1 },
  logText: { color: '#0f0', fontSize: 16 },
  input: { color: '#fff', borderTopWidth: 1, borderColor: '#333' }
});

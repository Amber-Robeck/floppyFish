import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import entities from './entities/index.js';
import gamePhysics from './game-physics/index.js';
export default function App() {
  return (
    <View style={styles.container}>
      <GameEngine
        systems={[gamePhysics]}
        entities={entities()}
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        }}
      >

      </GameEngine>
      <StatusBar style="auto" hidden={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

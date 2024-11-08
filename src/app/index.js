import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View, FlatList} from 'react-native';
import exercises from '../../assets/data/exercises.json'
import {ExerciseListItem} from "../../src/components/ExerciseListItem";

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={exercises}
        contentContainerStyle={styles.list}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => <ExerciseListItem item={item} />}
      />
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'ghostwhite',
    justifyContent: 'center',
    padding: 10,
  },
  list: {
    gap: 5
  }
});

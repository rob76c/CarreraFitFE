import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from "react-native";
import exercises from "../../assets/data/exercises.json";
import ExerciseListItem from "../components/ExerciseListItem";
import { useEffect, useState } from "react";
import { listWorkouts } from "../lib/api/workouts";
import { useQuery } from "@tanstack/react-query";

export default function ExercisesScreen() {
  const {data, isLoading, error} = useQuery ({
    queryKey: ['exercises'],
    queryFn: listWorkouts
    });

  if (isLoading) {
    return <ActivityIndicator/>;
  }

  if (error) {
    return <Text>Failed to fetch exercise</Text>;
  }
    return (
    <View style={styles.container}>
      <FlatList
        data={data}
        contentContainerStyle= {{gap:5}}
        //Use Key in the database: workoutId
        keyExtractor={(item) => item.workoutId}
        renderItem={({ item }) => <ExerciseListItem item={item}/>}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "ghostwhite",
    justifyContent: "center",
    padding: 10,
  },
});

import { StyleSheet, View, Text } from "react-native";
// import { Text, View } from "@/components/Themed";
import { StatusBar } from "expo-status-bar";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View className="flex-1 items-center justify-center bg-white">
        <Text>Uber</Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

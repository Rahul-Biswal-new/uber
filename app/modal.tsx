import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, View } from 'react-native';
import { Stack } from "expo-router";



export default function ModalScreen() {
  return (
    <Stack>
          <Stack.Screen name="index"  />
    </Stack>
  );
}

{/* <Stack.Screen name="index" options={{ headerShown: false }} />
<Stack.Screen name="(auth)" options={{ headerShown: false }} />
<Stack.Screen name="(root)" options={{ headerShown: false }} />
<Stack.Screen name="+not-found" /> */}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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


{/* <View style={styles.container}>
<Text style={styles.title}>Modal</Text>
<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
<EditScreenInfo path="app/modal.tsx" /> */}

{/* Use a light status bar on iOS to account for the black space above the modal */}
{/* <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
</View> */}
import { View, Text, StyleSheet } from 'react-native'

export default function SignIn() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SignIn</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    justifyContent: 'center',
    gap: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
})

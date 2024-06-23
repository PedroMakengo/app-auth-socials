import { useEffect } from 'react'
import { Slot, router } from 'expo-router'
import { ActivityIndicator, StyleSheet } from 'react-native'
import { ClerkProvider, useAuth } from '@clerk/clerk-expo'

const PUBLIC_CLERK_PUBLISHABLE_KEY =
  process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY ?? ''

function InitialLayout() {
  const { isSignedIn, isLoaded } = useAuth()

  useEffect(() => {
    if (!isLoaded) return

    if (isSignedIn) {
      router.replace('(auth)')
    } else {
      router.replace('(public)')
    }
  }, [isSignedIn])

  return isLoaded ? <Slot /> : <ActivityIndicator style={styles.loading} />
}

export default function Layout() {
  return (
    <ClerkProvider publishableKey={PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <InitialLayout />
    </ClerkProvider>
  )
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

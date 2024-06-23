import { Slot } from 'expo-router'
import { ClerkProvider } from '@clerk/clerk-expo'

const PUBLIC_CLERK_PUBLISHABLE_KEY =
  process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY ?? ''

export default function Layout() {
  return (
    <ClerkProvider publishableKey={PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <Slot />
    </ClerkProvider>
  )
}

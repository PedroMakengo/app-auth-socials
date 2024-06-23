import { useEffect, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button as ButtonLogin,
  Pressable,
} from 'react-native'

import * as WebBrowser from 'expo-web-browser'
import { useOAuth } from '@clerk/clerk-expo'

import { Button } from '@/components/Button'

WebBrowser.maybeCompleteAuthSession()

export default function SignIn() {
  const [isLoading, setIsLoading] = useState(false)

  const googleOAuth = useOAuth({ strategy: 'oauth_google' })

  async function onGoogleSignIn() {
    console.log('Bateu aqui')
    try {
      setIsLoading(true)

      const oAuthFlow = await googleOAuth.startOAuthFlow()

      if (oAuthFlow.authSessionResult?.type === 'success') {
        if (oAuthFlow.setActive) {
          await oAuthFlow.setActive({ session: oAuthFlow.createdSessionId })
        }
      } else {
        setIsLoading(false)
      }
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    WebBrowser.warmUpAsync()

    return () => {
      WebBrowser.coolDownAsync()
    }
  }, [])
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entrar</Text>

      <Button
        title="Entrar com Google"
        icon="logo-google"
        onPress={onGoogleSignIn}
        isLoading={isLoading}
      />
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

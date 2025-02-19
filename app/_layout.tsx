import { DarkTheme, ThemeProvider } from '@react-navigation/native'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react'
import { Provider } from 'react-redux'
import { store } from '@/logic/store'
import 'react-native-reanimated'
import '../global.css'
import { SafeAreaProvider } from 'react-native-safe-area-context'

void SplashScreen.preventAutoHideAsync()

function hideSplash() {
  void SplashScreen.hideAsync()
}

export default function RootLayout() {
  useEffect(hideSplash, [])

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <ThemeProvider value={DarkTheme}>
          <StatusBar style="light" />
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
          </Stack>
        </ThemeProvider>
      </Provider>
    </SafeAreaProvider>
  )
}

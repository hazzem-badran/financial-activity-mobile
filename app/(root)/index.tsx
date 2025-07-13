import { SignOutButton } from '@/components/SignOutButton'
import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo'
import { Link } from 'expo-router'
import { Text, View } from 'react-native'

export default function Page() {
  const { user } = useUser()

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <SignedIn>
        <Text style={{ fontSize: 18, marginBottom: 20 }}>Hello {user?.emailAddresses[0].emailAddress}</Text>
        <SignOutButton />
      </SignedIn>
      <SignedOut>
        <Link href="/(auth)/sign-in" style={{ marginBottom: 10 }}>
          <Text style={{ fontSize: 16, color: '#007AFF' }}>Sign in</Text>
        </Link>
        <Link href="/(auth)/sign-up">
          <Text style={{ fontSize: 16, color: '#007AFF' }}>Sign up</Text>
        </Link>
      </SignedOut>
    </View>
  )
}
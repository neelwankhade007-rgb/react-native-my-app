import "@/global.css"
import { Link } from "expo-router";
import { Text } from "react-native";
import { styled } from "nativewind";
import { SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

/**
 * Renders the app's main screen wrapped in a NativeWind-styled safe area with navigation links.
 *
 * @returns A React element representing the app's root UI containing a welcome message and navigation links.
 */
export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-7xl font-sans-extrabold text-primary">Home</Text>
      <Link href="/onboarding" className="mt-4 font-sans-bold rounded bg-primary p-4 text-white">Go to Onboarding</Link>
      <Link href="/(auth)/sign-in" className="mt-4 font-sans-bold rounded bg-primary p-4 text-white">Go to Sign In</Link>
      <Link href="/(auth)/sign-up" className="mt-4 font-sans-bold rounded bg-primary p-4 text-white">Go to Sign Up</Link>
    </SafeAreaView>
  );
}
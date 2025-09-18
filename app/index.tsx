import { Link } from "expo-router";
import { Pressable, PressableProps, Text, View } from "react-native";

function Button(props: PressableProps) {
  return (
    <Pressable {...props}>
      <Text>Open Modal</Text>
    </Pressable>
  );
}

export default function Index() {
  return (
    <View>
      <Link href="/modal" asChild>
        <Button />
      </Link>
      <Link href="/modal" asChild>
        <Pressable>
          <Text>Open Modal</Text>
        </Pressable>
      </Link>
    </View>
  );
}

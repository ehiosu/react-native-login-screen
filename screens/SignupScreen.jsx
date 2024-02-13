import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
} from "react-native";
import IonIcons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import Animated, {
  FadeInDown,
  StretchInX,
  FadeIn,
} from "react-native-reanimated";
const Signup = () => {
  const navigator = useNavigation();
  return (
    <View className=" bg-custom-purple flex-1 flex flex-col">
      <SafeAreaView className=" py-2 flex">
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <View className=" bg-custom-purple flex flex-col" style={{}}>
            <View className="flex-row flex justify-start px-4" style={{}}>
              <TouchableOpacity
                className=" py-2 px-2 bg-yellow-500 rounded-bl-2xl rounded-tr-xl"
                onPress={() => {
                  navigator.goBack(2);
                }}
              >
                <IonIcons name="arrow-back-outline" size={20} />
              </TouchableOpacity>
            </View>
            <View className="mt-1 flex flex-row items-center justify-center py-2">
              <Animated.Image
                entering={FadeIn.delay(150).duration(300)}
                style={{ width: 180 }}
                className="aspect-square rounded-full"
                source={{
                  uri: "https://cdn.leonardo.ai/users/be34e3d9-8456-49f8-b15a-dda75af03b5d/generations/a7729b11-b35a-48b9-bc67-e6865406fbba/variations/alchemyrefiner_alchemymagic_0_a7729b11-b35a-48b9-bc67-e6865406fbba_0.jpg",
                }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={100}
        className="flex-1 flex flex-col space-y-4  bg-white px-8 pt-8"
        style={{ borderTopEndRadius: 50, borderTopLeftRadius: 50 }}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <View>
            <Animated.View
              entering={FadeInDown.duration(300)}
              className="my-2 flex flex-col gap-3"
            >
              <Text
                style={{ fontSize: 16 }}
                className="text-neutral-500 font-semibold"
              >
                Email
              </Text>
              <TextInput
                className="p-4 bg-neutral-100 rounded-xl"
                placeholder="abc@gmail.com"
              ></TextInput>
            </Animated.View>
            <Animated.View
              entering={FadeInDown.delay(300).duration(300)}
              className="my-4 flex flex-col gap-3"
            >
              <Text
                style={{ fontSize: 16 }}
                className="text-neutral-500 font-semibold"
              >
                Password
              </Text>
              <TextInput
                className="p-4 bg-neutral-100 rounded-xl"
                secureTextEntry
                placeholder="*****"
              ></TextInput>
            </Animated.View>
            <Animated.View
              entering={FadeInDown.delay(450).duration(300)}
              className="my-4 flex flex-col gap-3"
            >
              <Text
                style={{ fontSize: 16 }}
                className="text-neutral-500 font-semibold"
              >
                Re-enter Password
              </Text>
              <TextInput
                className="p-4 bg-neutral-100 rounded-xl"
                secureTextEntry
                placeholder="*****"
              ></TextInput>
            </Animated.View>

            <TouchableOpacity className="mt-4 rounded-xl py-2 shadow-sm bg-yellow-400 flex flex-row items-center justify-center">
              <Text className="text-lg">Sign Up</Text>
            </TouchableOpacity>

            <Animated.View
              className="flex flex-row justify-center mt-4 space-x-2 items-center py-2"
              entering={FadeInDown.delay(300).duration(300)}
            >
              <Text className="text-yellow-400" style={{ fontSize: 16 }}>
                Already have an account?
              </Text>
              <Pressable
                onPress={() => {
                  navigator.navigate("Login");
                }}
              >
                <Text className="font-semibold" style={{ fontSize: 16 }}>
                  Log In
                </Text>
              </Pressable>
            </Animated.View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Signup;

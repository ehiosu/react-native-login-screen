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
import Animated, {
  FadeInDown,
  StretchInX,
  FadeIn,
  FadeInUp,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
const LoginScreen = () => {
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
                className="aspect-square"
                source={{
                  uri: "https://cdn.leonardo.ai/users/be34e3d9-8456-49f8-b15a-dda75af03b5d/generations/9ac309d9-740e-48e5-b262-a6359b2392ba/variations/Default_vector_imagevibrant_colorsperson_sitting_on_the_moonmi_0_9ac309d9-740e-48e5-b262-a6359b2392ba_0.png",
                }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
      <Animated.View className="flex-1">
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
                className="my-2 flex flex-col gap-3"
                entering={FadeInDown.duration(300)}
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
                entering={FadeInDown.delay(200).duration(300)}
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
              <View className="flex justify-end flex-row my-2">
                <Text>Forgot Password?</Text>
              </View>
              <TouchableOpacity className="mt-4 rounded-xl py-2 shadow-sm bg-yellow-400 flex flex-row items-center justify-center">
                <Text className="text-lg">Login</Text>
              </TouchableOpacity>
              <Text className="text-xl flex items-center flex-row text-center my-4 font-semibold justify-center text-neutral-600">
                OR
              </Text>
              <View className="flex flex-row items-center space-x-2 justify-center ">
                <TouchableOpacity
                  style={{ width: 50 }}
                  className="aspect-square flex flex-row justify-center items-center bg-neutral-100 rounded-lg"
                >
                  <IonIcons name="logo-google" size={25} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ width: 50 }}
                  className="aspect-square flex flex-row justify-center items-center bg-neutral-100 rounded-lg"
                >
                  <Image
                    style={{ width: 30 }}
                    className="aspect-square object-contain"
                    source={{
                      uri: "https://cdn.leonardo.ai/users/be34e3d9-8456-49f8-b15a-dda75af03b5d/generations/dcdbbecf-d8b1-4590-b3ac-aaf9ea710fb1/variations/Default_vector_imagevibrant_colorsappleminimalist_0_dcdbbecf-d8b1-4590-b3ac-aaf9ea710fb1_0.png",
                    }}
                  />
                </TouchableOpacity>
              </View>
              <Animated.View
                entering={StretchInX.delay(450).duration(300)}
                className="flex flex-row justify-center mt-4 space-x-2 items-center py-2"
              >
                <Text className="text-yellow-400" style={{ fontSize: 16 }}>
                  Don't have an account?
                </Text>
                <Pressable
                  onPress={() => {
                    navigator.navigate("Signup");
                  }}
                >
                  <Text className="font-semibold" style={{ fontSize: 16 }}>
                    Sign Up
                  </Text>
                </Pressable>
              </Animated.View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </Animated.View>
    </View>
  );
};

export default LoginScreen;

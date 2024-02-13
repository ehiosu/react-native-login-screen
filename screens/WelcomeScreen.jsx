import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  Pressable,
  StyleSheet,
} from "react-native";
const WelcomeScreen = () => {
  const navigator = useNavigation();
  const navigateToLocation = (location) => {
    if (!location) {
      return false;
    }
    navigator.navigate(location);
  };
  return (
    <SafeAreaView className="flex-1 bg-custom-purple">
      <View
        className="flex-1 flex flex-col justify-around"
        style={styles.container}
      >
        <Text
          className="font-bold text-white text-center"
          style={{ fontSize: 34 }}
        >
          Let's Get Started
        </Text>
        <Image
          className="mx-auto rounded-full aspect-square "
          style={{ width: 320 }}
          source={{
            uri: "https://cdn.leonardo.ai/users/be34e3d9-8456-49f8-b15a-dda75af03b5d/generations/5086c373-744f-425a-b8d2-04670b29a8bb/variations/Default_vector_imagevibrant_colorsperson_using_pcminimalist_0_5086c373-744f-425a-b8d2-04670b29a8bb_0.png",
          }}
        />

        <View className="flex flex-col gap-3 items-center  mx-auto w-full  ">
          <Pressable
            className=" w-[90%] flex items-center justify-center bg-yellow-500 rounded-xl py-3 text-center shadow-md"
            onPress={() => {
              navigateToLocation("Signup");
            }}
          >
            <Text className="text-lg font-semibold">Sign Up</Text>
          </Pressable>
          <View className="w-full flex flex-row justify-center text-lg items-center gap-2">
            <Text className="text-white">Already have an account?</Text>
            <Pressable
              onPress={() => {
                navigateToLocation("Login");
              }}
            >
              <Text
                className="font-semibold text text-yellow-500"
                style={(styles.semiboldText, { fontSize: 18 })}
              >
                Log in
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    fontFamily: "poppins-regular",
  },
  boldText: {
    fontFamily: "poppins-bold",
  },
  semiboldText: {
    fontFamily: "poppins-medium",
  },
  thinText: {
    fontFamily: "poppins-thin",
  },
});
export default WelcomeScreen;

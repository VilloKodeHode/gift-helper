import { NativeWindStyleSheet } from "nativewind";
NativeWindStyleSheet.setOutput({
  default: "native",
});

import { Pressable } from "react-native";

export const PrimaryButton = ({ onPress, children }) => {
  return (
    <Pressable
      className="flex justify-center h-16 m-2 border-b-4 rounded-3xl border-b-JWC-black50 active:border-b-0 w-44 bg-JWC-secondary"
      onPress={onPress}
    >
      <>{children}</>
    </Pressable>
  );
};

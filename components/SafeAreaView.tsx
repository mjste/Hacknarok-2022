import { StatusBar, StyleSheet, Platform, View } from "react-native";

export const SafeAreaView: React.FC = ({ children }) => {
  return <View style={appStyles.AndroidSafeArea}>{children}</View>;
};

const appStyles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
  },
});

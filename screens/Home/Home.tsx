import { Text, View } from "react-native";
import { SafeAreaView } from "../../components/SafeAreaView";
import { DaysGrid } from "./DaysGrid";

const Home = () => {
  return (
    <SafeAreaView>
      <DaysGrid />
    </SafeAreaView>
  );
};

export default Home;

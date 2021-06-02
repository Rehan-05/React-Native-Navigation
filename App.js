import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import StackNavigator from "./navigation/StackNavigator";
import Splashscreen from "./screens/Splashscreen";

 const App = () => {
  return (
    <NavigationContainer>
      <Splashscreen/>
    </NavigationContainer>
  );
}
export default App;
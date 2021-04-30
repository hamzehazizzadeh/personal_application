import React, { useEffect, useState } from "react";
import AnimatedSplash from "react-native-animated-splash-screen";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { I18nManager, ScrollView, StatusBar, StyleSheet } from "react-native";

import Intro from "./app/components/Intro/Intro";
import About from "./app/components/About/About";
import Service from "./app/components/Service/Service";
import Skills from "./app/components/Skills/Skills";
import PersonalSkills from "./app/components/PersonalSkills/PersonalSkills";
import ContactUs from "./app/components/ContactUs/ContactUs";
import Portfolio from "./app/components/Portfolio/Portfolio";

//? Supported For RTL
I18nManager.allowRTL(true);
I18nManager.forceRTL(true);

const App = () => {
  const [isLoadedApp, setIsLoadedApp] = useState(false);
  let [fontsLoaded] = useFonts({
    IRANSans: require("./app/assets/fonts/IRANSansWeb_Bold.ttf"),
  });

  useEffect(() => {
    setInterval(() => {
      setIsLoadedApp(true);
    }, 2000);
  }, []);

  if (fontsLoaded) {
    return (
      <AnimatedSplash
        translucent={true}
        isLoaded={isLoadedApp}
        logoImage={require("./app/assets/image/splashbg.jpg")}
        backgroundColor={"#100e17"}
        logoHeight={800}
        logoWidth={1000}
      >
        <ScrollView style={styles.container}>
          <StatusBar hidden />
          <Intro />
          <About />
          <Service />
          <Skills />
          <PersonalSkills />
          <Portfolio />
          <ContactUs />
        </ScrollView>
      </AnimatedSplash>
    );
  } else {
    return <AppLoading />;
  }
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#100e17",
  },
});

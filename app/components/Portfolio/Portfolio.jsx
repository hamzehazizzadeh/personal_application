import React from "react";
import { Linking, StyleSheet, View } from "react-native";

import ResponsiveText from "../../utils/ResponsiveText/ResponsiveText";
import PortfolioCard from "../../utils/PortfolioCard/PortfolioCard";

const Portfolio = () => {
  return (
    <View style={styles.container}>
      <ResponsiveText fontSize={4} style={styles.title}>
        نمونه کارهای اخیر
      </ResponsiveText>
      <View style={styles.portfolio}>
        <PortfolioCard
          image={require("./../../assets/image/portfolio/ftsp.png")}
          onPress={() => Linking.openURL("https://ftsp.ir/")}
          title="طراحان سیستم پنام"
          technology="HTML, CSS, Jquery, ..."
        />
        <PortfolioCard
          image={require("./../../assets/image/portfolio/mahancar.jpg")}
          onPress={() => Linking.openURL("https://mahancar.ir/")}
          title="ماهان کار"
          technology="React Js, Bootstrap, Jquery, ..."
        />
      </View>
      <View style={styles.portfolio}>
        <PortfolioCard
          image={require("./../../assets/image/portfolio/arenap.png")}
          onPress={() => Linking.openURL("https://arenap.ir/")}
          title="سامانه مدیریت مطب آرناپ"
          technology="React Js, Bootstrap, PWA, Jquery"
        />
        <PortfolioCard
          image={require("./../../assets/image/portfolio/viewbegir.png")}
          onPress={() => Linking.openURL("https://viewbegir.ir/")}
          title="فروش خدمات اینستاگرام"
          technology="WordPress, ..."
        />
      </View>
    </View>
  );
};

export default Portfolio;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    marginVertical: 35,
    paddingHorizontal: 20,
  },
  title: {
    textAlign: "center",
    marginTop: 15,
    marginBottom: 40,
  },
  portfolio: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
});

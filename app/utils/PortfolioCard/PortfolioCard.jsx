import React, { useState } from "react";
import {
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import ResponsiveText from "../ResponsiveText/ResponsiveText";

const PortfolioCard = ({ image, onPress, title, technology }) => {
  const [isClicked, setIsClicked] = useState(true);

  return (
    <TouchableOpacity onPress={() => setIsClicked(!isClicked)}>
      {isClicked ? (
        <Image style={styles.image} source={image} />
      ) : (
        <TouchableOpacity onPress={() => setIsClicked(!isClicked)}>
          <View style={styles.card}>
            <ResponsiveText fontSize={2}>{title}</ResponsiveText>
            <View style={styles.technology}>
              <ResponsiveText fontSize={1.5} style={styles.technologyItem}>
                تکنولوژی های مورد استفاده :
              </ResponsiveText>
              <ResponsiveText fontSize={1.5} style={styles.technologyItem}>
                {technology}
              </ResponsiveText>
            </View>
            <TouchableOpacity onPress={onPress} style={styles.button}>
              <ResponsiveText fontSize={1.9}>مشاهده</ResponsiveText>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

export default PortfolioCard;

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get("window").width / 2 - 30,
    height: Dimensions.get("window").height / 2.3,
    borderRadius: 8,
  },
  card: {
    width: Dimensions.get("window").width / 2 - 30,
    height: Dimensions.get("window").height / 2.3,
    borderRadius: 8,
    backgroundColor: "#0bceaf",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  technology: {
    marginTop: 10,
    alignItems: "center",
  },
  technologyItem: {
    textAlign: "center",
  },
  button: {
    backgroundColor: "#737276",
    width: "100%",
    marginTop: 60,
    alignItems: "center",
    borderRadius: 8,
  },
});

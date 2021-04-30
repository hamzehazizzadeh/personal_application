import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ResponsiveText from "../ResponsiveText/ResponsiveText";

const ContactUsCard = ({
  title,
  subTitle,
  icon,
  onPress = () => console.log("Hamzeh"),
}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.cardIcon}>
        <MaterialCommunityIcons
          name={icon}
          color="#fff"
          size={35}
          color="#fff"
        />
      </View>
      <View style={styles.cardBody}>
        <ResponsiveText fontSize={3} style={{ marginTop: 10 }}>
          {title}
        </ResponsiveText>
        <ResponsiveText fontSize={1.5} style={{ marginTop: 5 }}>
          {subTitle}
        </ResponsiveText>
      </View>
    </TouchableOpacity>
  );
};

export default ContactUsCard;

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    shadowColor: "#000",
    backgroundColor: "#202026",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  cardIcon: {
    borderRadius: 50,
    borderWidth: 3,
    padding: 15,
    borderColor: "#0bceaf",
  },
  cardBody: {
    justifyContent: "center",
    alignItems: "center",
  },
});

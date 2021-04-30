import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Image,
  ImageBackground,
  Linking,
  StyleSheet,
  View,
} from "react-native";

import ResponsiveText from "../../utils/ResponsiveText/ResponsiveText";

const Intro = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("./../../assets/image/introbg.jpg")}
      blurRadius={5}
    >
      <View style={styles.avatarView}>
        <Image
          style={styles.avatar}
          source={require("./../../assets/image/avatar.jpg")}
        />
      </View>
      <ResponsiveText style={styles.subJob} fontSize={1.8}>
        برنامه نویس
      </ResponsiveText>
      <View>
        <ResponsiveText style={styles.fullName} fontSize={5}>
          حمزه عزیززاده
        </ResponsiveText>
        <ResponsiveText style={styles.job} fontSize={2.4}>
          توسعه دهنده وب و موبایل
        </ResponsiveText>
      </View>
      <View style={{ marginVertical: 10 }}>
        <View style={styles.contact}>
          <MaterialCommunityIcons name="email" color="#fff" size={15} />
          <ResponsiveText
            onPress={() => Linking.openURL("mailto:hamzehazizzadeh4@gmail.com")}
            style={styles.contactItem}
            fontSize={1.8}
          >
            hamzehazizzadeh4@gmail.com
          </ResponsiveText>
        </View>
        <View style={styles.contact}>
          <MaterialCommunityIcons name="cellphone" color="#fff" size={15} />
          <ResponsiveText
            onPress={() => Linking.openURL("tel:+989103278696")}
            style={styles.contactItem}
            fontSize={1.8}
          >
            0910 327 8696
          </ResponsiveText>
        </View>
        <View style={styles.contactIcon}>
          <MaterialCommunityIcons
            onPress={() =>
              Linking.openURL("tg://resolve?domain=hamzeh_azizzadeh")
            }
            name="telegram"
            color="#fff"
            size={20}
          />
          <MaterialCommunityIcons
            onPress={() => Linking.openURL("tel:+989103278696")}
            name="phone"
            color="#fff"
            size={20}
          />
          <MaterialCommunityIcons
            onPress={() =>
              Linking.openURL("https://github.com/hamzehazizzadeh")
            }
            name="github"
            color="#fff"
            size={20}
          />
          <MaterialCommunityIcons
            onPress={() =>
              Linking.openURL("https://www.linkedin.com/in/hamzeh-azizzadeh")
            }
            name="linkedin"
            color="#fff"
            size={20}
          />
          <MaterialCommunityIcons
            onPress={() =>
              Linking.openURL(
                "https://api.whatsapp.com/send?phone=989103278696"
              )
            }
            name="whatsapp"
            color="#fff"
            size={20}
          />
          <MaterialCommunityIcons
            onPress={() =>
              Linking.openURL("https://instagram.com/hamzeh_azizzadeh")
            }
            name="instagram"
            color="#fff"
            size={20}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Intro;

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  avatar: {
    width: 280,
    height: 280,
    borderRadius: 300,
  },
  avatarView: {
    borderColor: "#000",
    borderWidth: 20,
    borderRadius: 300,
    padding: 20,
    marginVertical: 70,
  },
  subJob: {
    backgroundColor: "#0bceaf",
    borderRadius: 40,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderBottomRightRadius: 0,
  },
  fullName: {
    marginTop: 10,
  },
  job: {
    marginBottom: 7,
    textAlign: "center",
  },
  contact: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  contactItem: {
    color: "#fff",
    marginLeft: 10,
    marginVertical: 5,
  },
  contactIcon: {
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

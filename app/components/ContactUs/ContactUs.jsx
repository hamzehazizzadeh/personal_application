import React from "react";
import { Linking, StyleSheet, View } from "react-native";

import ResponsiveText from "../../utils/ResponsiveText/ResponsiveText";
import ContactUsCard from "../../utils/ContactUsCard/ContactUsCard";

const ContactUs = () => {
  return (
    <View style={styles.container}>
      <ResponsiveText fontSize={4} style={styles.title}>
        تماس با من
      </ResponsiveText>
      <View>
        <ContactUsCard
          onPress={() => Linking.openURL("mailto:hamzehazizzadeh4@gmail.com")}
          title="ایمیل"
          subTitle="hamzehazizzadeh4@gmail.com"
          icon="email"
        />
        <ContactUsCard
          onPress={() => Linking.openURL("tel:+989103278696")}
          title="شماره همراه"
          subTitle="0910 327 8696"
          icon="cellphone"
        />
        <ContactUsCard
          onPress={() =>
            Linking.openURL("tg://resolve?domain=hamzeh_azizzadeh")
          }
          title="تلگرام"
          subTitle="hamzeh_azizzadeh"
          icon="telegram"
        />
        <ContactUsCard
          onPress={() => Linking.openURL("https://github.com/hamzehazizzadeh")}
          title="گیت هاب"
          subTitle="hamzehazizzadeh"
          icon="github"
        />
        <ContactUsCard
          onPress={() =>
            Linking.openURL("https://www.linkedin.com/in/hamzeh-azizzadeh")
          }
          icon="linkedin"
          title="لینکداین"
          subTitle="hamzeh-azizzadeh"
        />
        <ContactUsCard
          onPress={() =>
            Linking.openURL("https://api.whatsapp.com/send?phone=989103278696")
          }
          icon="whatsapp"
          title="واتساپ"
          subTitle="0910 327 8696"
        />
        <ContactUsCard
          onPress={() =>
            Linking.openURL("https://instagram.com/hamzeh_azizzadeh")
          }
          icon="instagram"
          title="اینستاگرام"
          subTitle="hamzeh_azizzadeh"
        />
      </View>
    </View>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    textAlign: "center",
    marginTop: 15,
    marginBottom: 40,
  },
});

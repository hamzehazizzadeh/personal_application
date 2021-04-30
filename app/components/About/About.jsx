import React from "react";
import { Image, StyleSheet, View } from "react-native";

import ResponsiveText from "../../utils/ResponsiveText/ResponsiveText";

const About = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("./../../assets/image/ab-img.png")}
        style={styles.image}
      />
      <View style={{ marginVertical: 10 }}>
        <ResponsiveText fontSize={4} style={styles.title}>
          درباره من
        </ResponsiveText>
        <ResponsiveText fontSize={2} style={styles.about}>
          حمزه عزیززاده هستم هنرجو رشته شبکه و نرم افزار ( کامپیوتر ) متولد 1382
          ساکن کرمان هستم، در حوضه برنامه نویسی فعالیت می کنم و از سال 1397
          فعالیت خود را در این عرصه آغاز کرده ام و تاکنون چندین وبسایت استاتیک و
          داینامیک را طراحی کرده ام تخصص های بنده در Html 5 ، Bootstrap ، Jquery
          ، ReactJs ، css3 ، NodeJS ، Java Script ، SASS و ... می باشد
        </ResponsiveText>
      </View>
      <View style={styles.skill}>
        <ResponsiveText fontSize={1.5} style={styles.skillItem}>
          Javascript
        </ResponsiveText>
        <ResponsiveText fontSize={1.5} style={styles.skillItem}>
          React JS
        </ResponsiveText>
        <ResponsiveText fontSize={1.5} style={styles.skillItem}>
          Node JS
        </ResponsiveText>
        <ResponsiveText fontSize={1.5} style={styles.skillItem}>
          Jquery
        </ResponsiveText>
      </View>
      <View style={styles.skill}>
        <ResponsiveText fontSize={1.5} style={styles.skillItem}>
          HTML 5 & CSS 3
        </ResponsiveText>
        <ResponsiveText fontSize={1.5} style={styles.skillItem}>
          Bootstrap
        </ResponsiveText>
        <ResponsiveText fontSize={1.5} style={styles.skillItem}>
          React Native
        </ResponsiveText>
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginTop: 70,
    paddingHorizontal: 30,
  },
  image: {
    width: 350,
    height: 350,
    resizeMode: "cover",
  },
  title: {
    textAlign: "center",
    marginVertical: 15,
  },
  about: {
    textAlign: "justify",
  },
  skill: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  skillItem: {
    borderWidth: 2,
    borderColor: "#0bceaf",
    borderRadius: 5,
    alignItems: "center",
    padding: 10,
    paddingBottom: 5,
    marginHorizontal: 10,
  },
});

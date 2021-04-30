import React from "react";
import { Text } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const ResponsiveText = ({
  fontSize = 1,
  style,
  fontFamily = "IRANSans",
  color = "#fff",
  children,
}) => {
  return (
    <Text
      style={[style, { fontSize: RFPercentage(fontSize), fontFamily, color }]}
    >
      {children}
    </Text>
  );
};

export default ResponsiveText;

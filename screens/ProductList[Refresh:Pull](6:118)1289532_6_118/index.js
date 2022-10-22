import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_6_119}>
        <View style={styles.View_6_120}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/adb774f4-840d-47d2-9acf-1bbe4e7e0669"
            }}
            style={styles.ImageBackground_6_121}
          />
          <View style={styles.View_6_122} />
          <View style={styles.View_6_123}>
            <Text style={styles.Text_6_123}>Search</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eb322075-9d45-463b-97ab-3aae2a21ffe5"
            }}
            style={styles.ImageBackground_6_124}
          />
        </View>
        <View style={styles.View_6_127}>
          <Text style={styles.Text_6_127}>Kitchen Hoods</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7bdedf92-b66f-4cc7-884a-6df270ec8517"
          }}
          style={styles.ImageBackground_6_128}
        />
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8064e96f-d343-492b-83a0-8abe1b0e76f0"
          }}
          style={styles.TouchableOpacity_6_129}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1_33"))
          }
        />
      </View>
      <View style={styles.View_6_130}>
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3cf69d49-510e-4090-bb1c-f00a6f4f5f6b"
          }}
          style={styles.TouchableOpacity_6_131}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1_2"))
          }
        />
        <TouchableOpacity
          style={styles.TouchableOpacity_6_132}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1_2"))
          }
        >
          <Text style={styles.Text_6_132}>Product Name</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("109%") },
  View_6_119: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_6_120: {
    width: wp("94%"),
    minWidth: wp("94%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("18%")
  },
  ImageBackground_6_121: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("9%")
  },
  View_6_122: {
    width: wp("94%"),
    minWidth: wp("94%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 1
  },
  View_6_123: {
    width: wp("76%"),
    minWidth: wp("76%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_6_123: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_6_124: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_6_127: {
    width: wp("56%"),
    minWidth: wp("56%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("10%"),
    justifyContent: "flex-end"
  },
  Text_6_127: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_6_128: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%")
  },
  TouchableOpacity_6_129: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%")
  },
  View_6_130: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_6_131: {
    flexGrow: 1,
    width: wp("87%"),
    height: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  TouchableOpacity_6_132: {
    width: wp("87%"),
    minWidth: wp("87%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("32%"),
    justifyContent: "flex-start"
  },
  Text_6_132: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)

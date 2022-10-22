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
      <View style={styles.View_5_97}>
        <View style={styles.View_5_98}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dc22489a-7dc7-41d2-8b6f-0e1166cfe7fc"
            }}
            style={styles.ImageBackground_5_113}
          />
          <View style={styles.View_5_99} />
          <View style={styles.View_5_100}>
            <Text style={styles.Text_5_100}>Search</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/65130d6a-bd0e-4fa7-8453-4dec907c6c36"
            }}
            style={styles.ImageBackground_5_101}
          />
        </View>
        <View style={styles.View_5_104}>
          <Text style={styles.Text_5_104}>Products</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0fc63586-0107-4a43-8df6-8bbed8871c7c"
          }}
          style={styles.ImageBackground_5_105}
        />
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e84c9067-666f-4dd6-a6c9-f0861034316b"
          }}
          style={styles.TouchableOpacity_5_106}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1_33"))
          }
        />
      </View>
      <View style={styles.View_5_107}>
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3d593984-645d-44a1-b252-69ce9c138a12"
          }}
          style={styles.TouchableOpacity_5_109}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1_2"))
          }
        />
        <TouchableOpacity
          style={styles.TouchableOpacity_62_9}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1_2"))
          }
        >
          <Text style={styles.Text_62_9}>Product Tag</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_5_112}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1_2"))
          }
        >
          <Text style={styles.Text_5_112}>Product Name</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("109%") },
  View_5_97: {
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
  View_5_98: {
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
  ImageBackground_5_113: {
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
  View_5_99: {
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
  View_5_100: {
    width: wp("76%"),
    minWidth: wp("76%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_5_100: {
    color: "rgba(40, 40, 40, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_101: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_5_104: {
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
  Text_5_104: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_105: {
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
  TouchableOpacity_5_106: {
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
  View_5_107: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("45%"),
    minHeight: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_5_109: {
    flexGrow: 1,
    width: wp("87%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  TouchableOpacity_62_9: {
    width: wp("87%"),
    minWidth: wp("87%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("39%"),
    justifyContent: "flex-start"
  },
  Text_62_9: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_5_112: {
    width: wp("87%"),
    minWidth: wp("87%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("35%"),
    justifyContent: "flex-start"
  },
  Text_5_112: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
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

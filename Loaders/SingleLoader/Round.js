import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Shimmer from "react-native-shimmer";
import color from "../../colors";

/**
 * @template
 * Never Call this function , It will not work directly props
 * Please call import {} from 'react-native-preloader-shimmer'
 */

const ___________CONST_ITEM_LOADER_485_round = (props) => {
  const [shimmerDur, setShimmerDur] = useState(props.animSpeed);

  return (
    <View style={(props.style, { backgroundColor: props.backgroundColor })}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Shimmer
          duration={shimmerDur}
          direction={"right"}
          animationOpacity={0.8}
          style={{
            backgroundColor: color.transparent,
            width: 70,
            marginLeft: 10,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={styles.bigRound} />
          </View>
        </Shimmer>
        <View style={{ flexDirection: "column" }}>
          <Shimmer
            duration={shimmerDur}
            style={{ width: 200, height: 20, marginLeft: 10, marginBottom: 10 }}
          >
            <View style={styles.small} />
          </Shimmer>
          <Shimmer
            duration={shimmerDur}
            style={{ width: 200, height: 20, marginLeft: 10 }}
          >
            <View style={styles.small} />
          </Shimmer>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  small: {
    height: 20,
    width: 200,
    borderRadius: 10,
    backgroundColor: "#f0f0f0",
    marginTop: 10,
    marginLeft: 10,
  },
  bigRound: {
    height: 70,
    width: 70,
    borderRadius: 100,
    backgroundColor: "#f0f0f0",
    paddingTop: 5,
  },
  video: {
    height: 100,
    width: 200,
    borderRadius: 10,
    backgroundColor: "#f0f0f0",
    marginTop: 10,
    marginLeft: 10,
  },
  Vsmall: {
    height: 20,
    width: 100,
    borderRadius: 10,
    backgroundColor: "#f0f0f0",
  },
});

export default ___________CONST_ITEM_LOADER_485_round;

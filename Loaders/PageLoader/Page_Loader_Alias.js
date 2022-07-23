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
import React, { useState } from "react";
import Shimmer from "react-native-shimmer";
import colors from "../../colors";

const __________PAGE_LOADER_15_I9_CHZAPPS = (props) => {
  const [shimmerDur, setShimmerDur] = useState(props.animSpeed);
  var m = colors.background;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: props.backgroundColor,
        flexDirection: "column",
      }}
    >
      <StatusBar
        backgroundColor={props.backgroundColor}
        barStyle={props.barStyle}
      />

      <View style={{ flexDirection: "column", paddingTop: 10 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flexDirection: "column", marginLeft: 0 }}>
            <Shimmer
              duration={shimmerDur}
              style={{ height: 200, marginRight: 20, marginLeft: 20 }}
            >
              <View style={styles.video} />
            </Shimmer>
            {props.includeProfile && (
              <View>
                <Shimmer
                  duration={shimmerDur}
                  style={{
                    width: 250,
                    height: 50,
                    marginLeft: 0,
                    marginBottom: 10,
                    marginTop: 20,
                    alignSelf: "center",
                    borderRadius: 100,
                  }}
                >
                  <View style={styles.Vsmall} />
                </Shimmer>
                <View style={{ flexDirection: "row" }}>
                  <Shimmer
                    duration={shimmerDur}
                    style={{
                      width: 160,
                      height: 30,
                      marginLeft: 0,
                      marginBottom: 10,
                      marginTop: 5,
                      marginLeft: 10,
                    }}
                  >
                    <View style={styles.Vsmall} />
                  </Shimmer>
                </View>
              </View>
            )}
            {!props.includeProfile && <View style={{ height: 15 }} />}
            <View style={{ flexDirection: "row" }}>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: "90%",
                  height: 20,
                  marginBottom: 10,
                  marginTop: 5,
                  marginLeft: 10,
                  marginRight: 5,
                }}
              >
                <View style={styles.small} />
              </Shimmer>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: "90%",
                  height: 20,
                  marginBottom: 10,
                  marginTop: 5,
                  marginLeft: 10,
                  marginRight: 5,
                }}
              >
                <View style={styles.small} />
              </Shimmer>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: "90%",
                  height: 20,
                  marginBottom: 10,
                  marginTop: 5,
                  marginLeft: 10,
                  marginRight: 5,
                }}
              >
                <View style={styles.small} />
              </Shimmer>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: "90%",
                  height: 20,
                  marginBottom: 10,
                  marginTop: 5,
                  marginLeft: 10,
                  marginRight: 5,
                }}
              >
                <View style={styles.small} />
              </Shimmer>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: "90%",
                  height: 20,
                  marginBottom: 10,
                  marginTop: 5,
                  marginLeft: 10,
                  marginRight: 5,
                }}
              >
                <View style={styles.small} />
              </Shimmer>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: "90%",
                  height: 20,
                  marginBottom: 10,
                  marginTop: 5,
                  marginLeft: 10,
                  marginRight: 5,
                }}
              >
                <View style={styles.small} />
              </Shimmer>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: "90%",
                  height: 20,
                  marginBottom: 10,
                  marginTop: 5,
                  marginLeft: 10,
                  marginRight: 5,
                }}
              >
                <View style={styles.small} />
              </Shimmer>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: "90%",
                  height: 20,
                  marginBottom: 10,
                  marginTop: 5,
                  marginLeft: 10,
                  marginRight: 5,
                }}
              >
                <View style={styles.small} />
              </Shimmer>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: "90%",
                  height: 20,
                  marginBottom: 10,
                  marginTop: 5,
                  marginLeft: 10,
                  marginRight: 5,
                }}
              >
                <View style={styles.small} />
              </Shimmer>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: "90%",
                  height: 20,
                  marginBottom: 10,
                  marginTop: 5,
                  marginLeft: 10,
                  marginRight: 5,
                }}
              >
                <View style={styles.small} />
              </Shimmer>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: "90%",
                  height: 20,
                  marginBottom: 10,
                  marginTop: 5,
                  marginLeft: 10,
                  marginRight: 5,
                }}
              >
                <View style={styles.small} />
              </Shimmer>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: "90%",
                  height: 20,
                  marginBottom: 10,
                  marginTop: 5,
                  marginLeft: 10,
                  marginRight: 5,
                }}
              >
                <View style={styles.small} />
              </Shimmer>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: "90%",
                  height: 20,
                  marginBottom: 10,
                  marginTop: 5,
                  marginLeft: 10,
                  marginRight: 5,
                }}
              >
                <View style={styles.small} />
              </Shimmer>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: "90%",
                  height: 20,
                  marginBottom: 10,
                  marginTop: 5,
                  marginLeft: 10,
                  marginRight: 5,
                }}
              >
                <View style={styles.small} />
              </Shimmer>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: "90%",
                  height: 20,
                  marginBottom: 10,
                  marginTop: 5,
                  marginLeft: 10,
                  marginRight: 5,
                }}
              >
                <View style={styles.small} />
              </Shimmer>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: "90%",
                  height: 20,
                  marginBottom: 10,
                  marginTop: 5,
                  marginLeft: 10,
                  marginRight: 5,
                }}
              >
                <View style={styles.small} />
              </Shimmer>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: "90%",
                  height: 20,
                  marginBottom: 10,
                  marginTop: 5,
                  marginLeft: 10,
                  marginRight: 5,
                }}
              >
                <View style={styles.small} />
              </Shimmer>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: "90%",
                  height: 20,
                  marginBottom: 10,
                  marginTop: 5,
                  marginLeft: 10,
                  marginRight: 5,
                }}
              >
                <View style={styles.small} />
              </Shimmer>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: "90%",
                  height: 20,
                  marginBottom: 10,
                  marginTop: 5,
                  marginLeft: 10,
                  marginRight: 5,
                }}
              >
                <View style={styles.small} />
              </Shimmer>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: "90%",
                  height: 20,
                  marginBottom: 10,
                  marginTop: 5,
                  marginLeft: 10,
                  marginRight: 5,
                }}
              >
                <View style={styles.small} />
              </Shimmer>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: "90%",
                  height: 20,
                  marginBottom: 10,
                  marginTop: 5,
                  marginLeft: 10,
                  marginRight: 5,
                }}
              >
                <View style={styles.small} />
              </Shimmer>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: "90%",
                  height: 20,
                  marginBottom: 10,
                  marginTop: 5,
                  marginLeft: 10,
                  marginRight: 5,
                }}
              >
                <View style={styles.small} />
              </Shimmer>
            </View>
          </View>
        </ScrollView>
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
    borderRadius: 100,
    backgroundColor: "#f0f0f0",
  },
  small: {
    height: 20,
    width: 100,
    borderRadius: 5,
    backgroundColor: "#f0f0f0",
  },
});

export default __________PAGE_LOADER_15_I9_CHZAPPS;

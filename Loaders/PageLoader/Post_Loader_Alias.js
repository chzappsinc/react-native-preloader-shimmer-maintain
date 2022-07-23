import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import Shimmer from "react-native-shimmer";
import color from "../../colors";

const _____POST_LOADER_ALIAS_7854_CHZAPPS = (props) => {
  const [shimmerDur, setShimmerDur] = useState(props.animSpeed);

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
      <View
        style={{
          flexDirection: "column",
          paddingTop: 10,
          backgroundColor: props.backgroundColor,
        }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ backgroundColor: props.backgroundColor }}
        >
          <View style={{ flexDirection: "column", marginLeft: 15 }}>
            <Shimmer
              duration={shimmerDur}
              style={{ height: 200, marginRight: 15 }}
            >
              <View style={styles.video} />
            </Shimmer>
            <Shimmer
              duration={shimmerDur}
              style={{
                width: 250,
                height: 20,
                marginLeft: 0,
                marginBottom: 10,
                marginTop: 10,
              }}
            >
              <View style={styles.Vsmall} />
            </Shimmer>
            <View style={{ flexDirection: "row" }}>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: 70,
                  height: 15,
                  marginLeft: 0,
                  marginBottom: 10,
                  marginTop: 0,
                }}
              >
                <View style={styles.Vsmall} />
              </Shimmer>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: 50,
                  marginLeft: 10,
                  height: 15,
                  marginLeft: 10,
                  marginBottom: 10,
                  marginTop: 0,
                }}
              >
                <View style={styles.Vsmall} />
              </Shimmer>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: 50,
                  marginLeft: 10,
                  height: 15,
                  marginLeft: 10,
                  marginBottom: 10,
                  marginTop: 0,
                }}
              >
                <View style={styles.Vsmall} />
              </Shimmer>
            </View>
          </View>
          <View style={{ flexDirection: "column", marginLeft: 15 }}>
            <Shimmer
              duration={shimmerDur}
              style={{ height: 200, marginRight: 15 }}
            >
              <View style={styles.video} />
            </Shimmer>
            <Shimmer
              duration={shimmerDur}
              style={{
                width: 250,
                height: 20,
                marginLeft: 0,
                marginBottom: 10,
                marginTop: 10,
              }}
            >
              <View style={styles.Vsmall} />
            </Shimmer>
            <View style={{ flexDirection: "row" }}>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: 70,
                  height: 15,
                  marginLeft: 0,
                  marginBottom: 10,
                  marginTop: 0,
                }}
              >
                <View style={styles.Vsmall} />
              </Shimmer>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: 50,
                  marginLeft: 10,
                  height: 15,
                  marginLeft: 10,
                  marginBottom: 10,
                  marginTop: 0,
                }}
              >
                <View style={styles.Vsmall} />
              </Shimmer>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: 50,
                  marginLeft: 10,
                  height: 15,
                  marginLeft: 10,
                  marginBottom: 10,
                  marginTop: 0,
                }}
              >
                <View style={styles.Vsmall} />
              </Shimmer>
            </View>
          </View>
          <View style={{ flexDirection: "column", marginLeft: 15 }}>
            <Shimmer
              duration={shimmerDur}
              style={{ height: 200, marginRight: 15 }}
            >
              <View style={styles.video} />
            </Shimmer>
            <Shimmer
              duration={shimmerDur}
              style={{
                width: 250,
                height: 20,
                marginLeft: 0,
                marginBottom: 10,
                marginTop: 10,
              }}
            >
              <View style={styles.Vsmall} />
            </Shimmer>
            <View style={{ flexDirection: "row" }}>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: 70,
                  height: 15,
                  marginLeft: 0,
                  marginBottom: 10,
                  marginTop: 0,
                }}
              >
                <View style={styles.Vsmall} />
              </Shimmer>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: 50,
                  marginLeft: 10,
                  height: 15,
                  marginLeft: 10,
                  marginBottom: 10,
                  marginTop: 0,
                }}
              >
                <View style={styles.Vsmall} />
              </Shimmer>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: 50,
                  marginLeft: 10,
                  height: 15,
                  marginLeft: 10,
                  marginBottom: 10,
                  marginTop: 0,
                }}
              >
                <View style={styles.Vsmall} />
              </Shimmer>
            </View>
          </View>

          <View style={{ flexDirection: "column", marginLeft: 15 }}>
            <Shimmer
              duration={shimmerDur}
              style={{ height: 200, marginRight: 15 }}
            >
              <View style={styles.video} />
            </Shimmer>
            <Shimmer
              duration={shimmerDur}
              style={{
                width: 250,
                height: 20,
                marginLeft: 0,
                marginBottom: 10,
                marginTop: 10,
              }}
            >
              <View style={styles.Vsmall} />
            </Shimmer>
            <View style={{ flexDirection: "row" }}>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: 70,
                  height: 15,
                  marginLeft: 0,
                  marginBottom: 10,
                  marginTop: 0,
                }}
              >
                <View style={styles.Vsmall} />
              </Shimmer>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: 50,
                  marginLeft: 10,
                  height: 15,
                  marginLeft: 10,
                  marginBottom: 10,
                  marginTop: 0,
                }}
              >
                <View style={styles.Vsmall} />
              </Shimmer>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: 50,
                  marginLeft: 10,
                  height: 15,
                  marginLeft: 10,
                  marginBottom: 10,
                  marginTop: 0,
                }}
              >
                <View style={styles.Vsmall} />
              </Shimmer>
            </View>
          </View>

          <View style={{ flexDirection: "column", marginLeft: 15 }}>
            <Shimmer
              duration={shimmerDur}
              style={{ height: 200, marginRight: 15 }}
            >
              <View style={styles.video} />
            </Shimmer>
            <Shimmer
              duration={shimmerDur}
              style={{
                width: 250,
                height: 20,
                marginLeft: 0,
                marginBottom: 10,
                marginTop: 10,
              }}
            >
              <View style={styles.Vsmall} />
            </Shimmer>
            <View style={{ flexDirection: "row" }}>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: 70,
                  height: 15,
                  marginLeft: 0,
                  marginBottom: 10,
                  marginTop: 0,
                }}
              >
                <View style={styles.Vsmall} />
              </Shimmer>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: 50,
                  marginLeft: 10,
                  height: 15,
                  marginLeft: 10,
                  marginBottom: 10,
                  marginTop: 0,
                }}
              >
                <View style={styles.Vsmall} />
              </Shimmer>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: 50,
                  marginLeft: 10,
                  height: 15,
                  marginLeft: 10,
                  marginBottom: 10,
                  marginTop: 0,
                }}
              >
                <View style={styles.Vsmall} />
              </Shimmer>
            </View>
          </View>

          <View style={{ flexDirection: "column", marginLeft: 15 }}>
            <Shimmer
              duration={shimmerDur}
              style={{ height: 200, marginRight: 15 }}
            >
              <View style={styles.video} />
            </Shimmer>
            <Shimmer
              duration={shimmerDur}
              style={{
                width: 250,
                height: 20,
                marginLeft: 0,
                marginBottom: 10,
                marginTop: 10,
              }}
            >
              <View style={styles.Vsmall} />
            </Shimmer>
            <View style={{ flexDirection: "row" }}>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: 70,
                  height: 15,
                  marginLeft: 0,
                  marginBottom: 10,
                  marginTop: 0,
                }}
              >
                <View style={styles.Vsmall} />
              </Shimmer>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: 50,
                  marginLeft: 10,
                  height: 15,
                  marginLeft: 10,
                  marginBottom: 10,
                  marginTop: 0,
                }}
              >
                <View style={styles.Vsmall} />
              </Shimmer>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: 50,
                  marginLeft: 10,
                  height: 15,
                  marginLeft: 10,
                  marginBottom: 10,
                  marginTop: 0,
                }}
              >
                <View style={styles.Vsmall} />
              </Shimmer>
            </View>
          </View>

          <View style={{ flexDirection: "column", marginLeft: 15 }}>
            <Shimmer
              duration={shimmerDur}
              style={{ height: 200, marginRight: 15 }}
            >
              <View style={styles.video} />
            </Shimmer>
            <Shimmer
              duration={shimmerDur}
              style={{
                width: 250,
                height: 20,
                marginLeft: 0,
                marginBottom: 10,
                marginTop: 10,
              }}
            >
              <View style={styles.Vsmall} />
            </Shimmer>
            <View style={{ flexDirection: "row" }}>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: 70,
                  height: 15,
                  marginLeft: 0,
                  marginBottom: 10,
                  marginTop: 0,
                }}
              >
                <View style={styles.Vsmall} />
              </Shimmer>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: 50,
                  marginLeft: 10,
                  height: 15,
                  marginLeft: 10,
                  marginBottom: 10,
                  marginTop: 0,
                }}
              >
                <View style={styles.Vsmall} />
              </Shimmer>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: 50,
                  marginLeft: 10,
                  height: 15,
                  marginLeft: 10,
                  marginBottom: 10,
                  marginTop: 0,
                }}
              >
                <View style={styles.Vsmall} />
              </Shimmer>
            </View>
          </View>

          <View style={{ flexDirection: "column", marginLeft: 15 }}>
            <Shimmer
              duration={shimmerDur}
              style={{ height: 200, marginRight: 15 }}
            >
              <View style={styles.video} />
            </Shimmer>
            <Shimmer
              duration={shimmerDur}
              style={{
                width: 250,
                height: 20,
                marginLeft: 0,
                marginBottom: 10,
                marginTop: 10,
              }}
            >
              <View style={styles.Vsmall} />
            </Shimmer>
            <View style={{ flexDirection: "row" }}>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: 70,
                  height: 15,
                  marginLeft: 0,
                  marginBottom: 10,
                  marginTop: 0,
                }}
              >
                <View style={styles.Vsmall} />
              </Shimmer>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: 50,
                  marginLeft: 10,
                  height: 15,
                  marginLeft: 10,
                  marginBottom: 10,
                  marginTop: 0,
                }}
              >
                <View style={styles.Vsmall} />
              </Shimmer>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: 50,
                  marginLeft: 10,
                  height: 15,
                  marginLeft: 10,
                  marginBottom: 10,
                  marginTop: 0,
                }}
              >
                <View style={styles.Vsmall} />
              </Shimmer>
            </View>
          </View>

          <View style={{ flexDirection: "column", marginLeft: 15 }}>
            <Shimmer
              duration={shimmerDur}
              style={{ height: 200, marginRight: 15 }}
            >
              <View style={styles.video} />
            </Shimmer>
            <Shimmer
              duration={shimmerDur}
              style={{
                width: 250,
                height: 20,
                marginLeft: 0,
                marginBottom: 10,
                marginTop: 10,
              }}
            >
              <View style={styles.Vsmall} />
            </Shimmer>
            <View style={{ flexDirection: "row" }}>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: 70,
                  height: 15,
                  marginLeft: 0,
                  marginBottom: 10,
                  marginTop: 0,
                }}
              >
                <View style={styles.Vsmall} />
              </Shimmer>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: 50,
                  marginLeft: 10,
                  height: 15,
                  marginLeft: 10,
                  marginBottom: 10,
                  marginTop: 0,
                }}
              >
                <View style={styles.Vsmall} />
              </Shimmer>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: 50,
                  marginLeft: 10,
                  height: 15,
                  marginLeft: 10,
                  marginBottom: 10,
                  marginTop: 0,
                }}
              >
                <View style={styles.Vsmall} />
              </Shimmer>
            </View>
          </View>

          <View style={{ flexDirection: "column", marginLeft: 15 }}>
            <Shimmer
              duration={shimmerDur}
              style={{ height: 200, marginRight: 15 }}
            >
              <View style={styles.video} />
            </Shimmer>
            <Shimmer
              duration={shimmerDur}
              style={{
                width: 250,
                height: 20,
                marginLeft: 0,
                marginBottom: 10,
                marginTop: 10,
              }}
            >
              <View style={styles.Vsmall} />
            </Shimmer>
            <View style={{ flexDirection: "row" }}>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: 70,
                  height: 15,
                  marginLeft: 0,
                  marginBottom: 10,
                  marginTop: 0,
                }}
              >
                <View style={styles.Vsmall} />
              </Shimmer>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: 50,
                  marginLeft: 10,
                  height: 15,
                  marginLeft: 10,
                  marginBottom: 10,
                  marginTop: 0,
                }}
              >
                <View style={styles.Vsmall} />
              </Shimmer>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: 50,
                  marginLeft: 10,
                  height: 15,
                  marginLeft: 10,
                  marginBottom: 10,
                  marginTop: 0,
                }}
              >
                <View style={styles.Vsmall} />
              </Shimmer>
            </View>
          </View>

          <View style={{ flexDirection: "column", marginLeft: 15 }}>
            <Shimmer
              duration={shimmerDur}
              style={{ height: 200, marginRight: 15 }}
            >
              <View style={styles.video} />
            </Shimmer>
            <Shimmer
              duration={shimmerDur}
              style={{
                width: 250,
                height: 20,
                marginLeft: 0,
                marginBottom: 10,
                marginTop: 10,
              }}
            >
              <View style={styles.Vsmall} />
            </Shimmer>
            <View style={{ flexDirection: "row" }}>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: 70,
                  height: 15,
                  marginLeft: 0,
                  marginBottom: 10,
                  marginTop: 0,
                }}
              >
                <View style={styles.Vsmall} />
              </Shimmer>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: 50,
                  marginLeft: 10,
                  height: 15,
                  marginLeft: 10,
                  marginBottom: 10,
                  marginTop: 0,
                }}
              >
                <View style={styles.Vsmall} />
              </Shimmer>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: 50,
                  marginLeft: 10,
                  height: 15,
                  marginLeft: 10,
                  marginBottom: 10,
                  marginTop: 0,
                }}
              >
                <View style={styles.Vsmall} />
              </Shimmer>
            </View>
          </View>

          <View style={{ flexDirection: "column", marginLeft: 15 }}>
            <Shimmer
              duration={shimmerDur}
              style={{ height: 200, marginRight: 15 }}
            >
              <View style={styles.video} />
            </Shimmer>
            <Shimmer
              duration={shimmerDur}
              style={{
                width: 250,
                height: 20,
                marginLeft: 0,
                marginBottom: 10,
                marginTop: 10,
              }}
            >
              <View style={styles.Vsmall} />
            </Shimmer>
            <View style={{ flexDirection: "row" }}>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: 70,
                  height: 15,
                  marginLeft: 0,
                  marginBottom: 10,
                  marginTop: 0,
                }}
              >
                <View style={styles.Vsmall} />
              </Shimmer>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: 50,
                  marginLeft: 10,
                  height: 15,
                  marginLeft: 10,
                  marginBottom: 10,
                  marginTop: 0,
                }}
              >
                <View style={styles.Vsmall} />
              </Shimmer>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: 50,
                  marginLeft: 10,
                  height: 15,
                  marginLeft: 10,
                  marginBottom: 10,
                  marginTop: 0,
                }}
              >
                <View style={styles.Vsmall} />
              </Shimmer>
            </View>
          </View>

          <View style={{ flexDirection: "column", marginLeft: 15 }}>
            <Shimmer
              duration={shimmerDur}
              style={{ height: 200, marginRight: 15 }}
            >
              <View style={styles.video} />
            </Shimmer>
            <Shimmer
              duration={shimmerDur}
              style={{
                width: 250,
                height: 20,
                marginLeft: 0,
                marginBottom: 10,
                marginTop: 10,
              }}
            >
              <View style={styles.Vsmall} />
            </Shimmer>
            <View style={{ flexDirection: "row" }}>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: 70,
                  height: 15,
                  marginLeft: 0,
                  marginBottom: 10,
                  marginTop: 0,
                }}
              >
                <View style={styles.Vsmall} />
              </Shimmer>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: 50,
                  marginLeft: 10,
                  height: 15,
                  marginLeft: 10,
                  marginBottom: 10,
                  marginTop: 0,
                }}
              >
                <View style={styles.Vsmall} />
              </Shimmer>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: 50,
                  marginLeft: 10,
                  height: 15,
                  marginLeft: 10,
                  marginBottom: 10,
                  marginTop: 0,
                }}
              >
                <View style={styles.Vsmall} />
              </Shimmer>
            </View>
          </View>

          <View style={{ flexDirection: "column", marginLeft: 15 }}>
            <Shimmer
              duration={shimmerDur}
              style={{ height: 200, marginRight: 15 }}
            >
              <View style={styles.video} />
            </Shimmer>
            <Shimmer
              duration={shimmerDur}
              style={{
                width: 250,
                height: 20,
                marginLeft: 0,
                marginBottom: 10,
                marginTop: 10,
              }}
            >
              <View style={styles.Vsmall} />
            </Shimmer>
            <View style={{ flexDirection: "row" }}>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: 70,
                  height: 15,
                  marginLeft: 0,
                  marginBottom: 10,
                  marginTop: 0,
                }}
              >
                <View style={styles.Vsmall} />
              </Shimmer>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: 50,
                  marginLeft: 10,
                  height: 15,
                  marginLeft: 10,
                  marginBottom: 10,
                  marginTop: 0,
                }}
              >
                <View style={styles.Vsmall} />
              </Shimmer>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: 50,
                  marginLeft: 10,
                  height: 15,
                  marginLeft: 10,
                  marginBottom: 10,
                  marginTop: 0,
                }}
              >
                <View style={styles.Vsmall} />
              </Shimmer>
            </View>
          </View>

          <View style={{ flexDirection: "column", marginLeft: 15 }}>
            <Shimmer
              duration={shimmerDur}
              style={{ height: 200, marginRight: 15 }}
            >
              <View style={styles.video} />
            </Shimmer>
            <Shimmer
              duration={shimmerDur}
              style={{
                width: 250,
                height: 20,
                marginLeft: 0,
                marginBottom: 10,
                marginTop: 10,
              }}
            >
              <View style={styles.Vsmall} />
            </Shimmer>
            <View style={{ flexDirection: "row" }}>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: 70,
                  height: 15,
                  marginLeft: 0,
                  marginBottom: 10,
                  marginTop: 0,
                }}
              >
                <View style={styles.Vsmall} />
              </Shimmer>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: 50,
                  marginLeft: 10,
                  height: 15,
                  marginLeft: 10,
                  marginBottom: 10,
                  marginTop: 0,
                }}
              >
                <View style={styles.Vsmall} />
              </Shimmer>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: 50,
                  marginLeft: 10,
                  height: 15,
                  marginLeft: 10,
                  marginBottom: 10,
                  marginTop: 0,
                }}
              >
                <View style={styles.Vsmall} />
              </Shimmer>
            </View>
          </View>

          <View style={{ flexDirection: "column", marginLeft: 15 }}>
            <Shimmer
              duration={shimmerDur}
              style={{ height: 200, marginRight: 15 }}
            >
              <View style={styles.video} />
            </Shimmer>
            <Shimmer
              duration={shimmerDur}
              style={{
                width: 250,
                height: 20,
                marginLeft: 0,
                marginBottom: 10,
                marginTop: 10,
              }}
            >
              <View style={styles.Vsmall} />
            </Shimmer>
            <View style={{ flexDirection: "row" }}>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: 70,
                  height: 15,
                  marginLeft: 0,
                  marginBottom: 10,
                  marginTop: 0,
                }}
              >
                <View style={styles.Vsmall} />
              </Shimmer>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: 50,
                  marginLeft: 10,
                  height: 15,
                  marginLeft: 10,
                  marginBottom: 10,
                  marginTop: 0,
                }}
              >
                <View style={styles.Vsmall} />
              </Shimmer>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: 50,
                  marginLeft: 10,
                  height: 15,
                  marginLeft: 10,
                  marginBottom: 10,
                  marginTop: 0,
                }}
              >
                <View style={styles.Vsmall} />
              </Shimmer>
            </View>
          </View>

          <View style={{ flexDirection: "column", marginLeft: 15 }}>
            <Shimmer
              duration={shimmerDur}
              style={{ height: 200, marginRight: 15 }}
            >
              <View style={styles.video} />
            </Shimmer>
            <Shimmer
              duration={shimmerDur}
              style={{
                width: 250,
                height: 20,
                marginLeft: 0,
                marginBottom: 10,
                marginTop: 10,
              }}
            >
              <View style={styles.Vsmall} />
            </Shimmer>
            <View style={{ flexDirection: "row" }}>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: 70,
                  height: 15,
                  marginLeft: 0,
                  marginBottom: 10,
                  marginTop: 0,
                }}
              >
                <View style={styles.Vsmall} />
              </Shimmer>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: 50,
                  marginLeft: 10,
                  height: 15,
                  marginLeft: 10,
                  marginBottom: 10,
                  marginTop: 0,
                }}
              >
                <View style={styles.Vsmall} />
              </Shimmer>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: 50,
                  marginLeft: 10,
                  height: 15,
                  marginLeft: 10,
                  marginBottom: 10,
                  marginTop: 0,
                }}
              >
                <View style={styles.Vsmall} />
              </Shimmer>
            </View>
          </View>

          <View style={{ flexDirection: "column", marginLeft: 15 }}>
            <Shimmer
              duration={shimmerDur}
              style={{ height: 200, marginRight: 15 }}
            >
              <View style={styles.video} />
            </Shimmer>
            <Shimmer
              duration={shimmerDur}
              style={{
                width: 250,
                height: 20,
                marginLeft: 0,
                marginBottom: 10,
                marginTop: 10,
              }}
            >
              <View style={styles.Vsmall} />
            </Shimmer>
            <View style={{ flexDirection: "row" }}>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: 70,
                  height: 15,
                  marginLeft: 0,
                  marginBottom: 10,
                  marginTop: 0,
                }}
              >
                <View style={styles.Vsmall} />
              </Shimmer>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: 50,
                  marginLeft: 10,
                  height: 15,
                  marginLeft: 10,
                  marginBottom: 10,
                  marginTop: 0,
                }}
              >
                <View style={styles.Vsmall} />
              </Shimmer>
              <Shimmer
                duration={shimmerDur}
                style={{
                  width: 50,
                  marginLeft: 10,
                  height: 15,
                  marginLeft: 10,
                  marginBottom: 10,
                  marginTop: 0,
                }}
              >
                <View style={styles.Vsmall} />
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

export default _____POST_LOADER_ALIAS_7854_CHZAPPS;

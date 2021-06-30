import React from 'react'
import { NativeModules, View, Text, StyleSheet, ScrollView, ColorPropType, requireNativeComponent } from 'react-native';
import Shimmer from 'react-native-shimmer'
import PropTypes from 'prop-types';


/**
 * @deprecated Since version 1.2.0 use MainLoader
 */
export const LoaderMain = ({

}) => {
    console.log(color)
    if (!color || color.length <= 0) {
        console.warn("react-native-preolader-chz Says : Props color is required to run color={'Black'}")
        return (null)
    } else {
        return (
            <ScrollView showsVerticalScrollIndicator={false} style={{ padding: 20 }}>
                <Shimmer style={{ borderRadius: 10, marginBottom: 6 }}  >
                    <View style={{ ...styles.tip, backgroundColor: color }} />
                </Shimmer>
                <Shimmer style={{ borderRadius: 10, marginBottom: 6 }}  >
                    <View style={{ ...styles.tip, backgroundColor: color }} />
                </Shimmer>
                <Shimmer style={{ borderRadius: 10, marginBottom: 6 }}  >
                    <View style={{ ...styles.tip, backgroundColor: color }} />
                </Shimmer>
                <Shimmer style={{ borderRadius: 10, marginBottom: 6 }}  >
                    <View style={{ ...styles.tip, backgroundColor: color }} />
                </Shimmer>
                <Shimmer style={{ borderRadius: 10, marginBottom: 6 }}  >
                    <View style={{ ...styles.tip, backgroundColor: color }} />
                </Shimmer>
                <Shimmer style={{ borderRadius: 10, marginBottom: 6 }}  >
                    <View style={{ ...styles.tip, backgroundColor: color }} />
                </Shimmer>
                <Shimmer style={{ borderRadius: 10, marginBottom: 6 }}  >
                    <View style={{ ...styles.tip, backgroundColor: color }} />
                </Shimmer>
                <Shimmer style={{ borderRadius: 10, marginBottom: 6 }}  >
                    <View style={{ ...styles.tip, backgroundColor: color }} />
                </Shimmer>
                <Shimmer style={{ borderRadius: 10, marginBottom: 6 }}  >
                    <View style={{ ...styles.tip, backgroundColor: color }} />
                </Shimmer>

                <Shimmer style={{ borderRadius: 10, marginBottom: 6 }}  >
                    <View style={{ ...styles.tip, backgroundColor: color }} />
                </Shimmer>
                <Shimmer style={{ borderRadius: 10, marginBottom: 6 }}  >
                    <View style={{ ...styles.tip, backgroundColor: color }} />
                </Shimmer>

                <Shimmer style={{ borderRadius: 10, marginBottom: 6 }}  >
                    <View style={{ ...styles.tip, backgroundColor: color }} />
                </Shimmer>
                <Shimmer style={{ borderRadius: 10, marginBottom: 6 }}  >
                    <View style={{ ...styles.tip, backgroundColor: color }} />
                </Shimmer>

                <Shimmer style={{ borderRadius: 10, marginBottom: 6 }}  >
                    <View style={{ ...styles.tip, backgroundColor: color }} />
                </Shimmer>

                <Shimmer style={{ borderRadius: 10, marginBottom: 6 }}  >
                    <View style={{ ...styles.tip, backgroundColor: color }} />
                </Shimmer>
                <Shimmer style={{ borderRadius: 10, marginBottom: 6 }}  >
                    <View style={{ ...styles.tip, backgroundColor: color }} />
                </Shimmer>
                <Shimmer style={{ borderRadius: 10, marginBottom: 6 }}  >
                    <View style={{ ...styles.tip, backgroundColor: color }} />
                </Shimmer>

            </ScrollView>
        )
    }
}


export const LoaderUsername = ({
    height = Number,
    width = Number,
    color = '#00000030',
    visible = Boolean,
    style = {}
}) => {

    return (
        <>
            {
                visible && <Shimmer style={{ borderRadius: 10, marginBottom: 6, width: width }}  >
                    <View style={{ ...styles.tip, backgroundColor: color, height: height, width: width, ...style }} />
                </Shimmer>
            }
        </>
    )
}





const styles = StyleSheet.create({
    tip: {
        borderRadius: 10,
        backgroundColor: '#ffffff50',
        height: 20,
        paddingBottom: 2,
        paddingTop: 2,
        marginBottom: 5
    }
})

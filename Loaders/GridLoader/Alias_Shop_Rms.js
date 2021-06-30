import {
    Platform,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    ToastAndroid,
    View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Shimmer from 'react-native-shimmer';
import color from '../../colors';

const ___________CONST_ITEM_LOADER_485 = (props) => {

    const [shimmerDur, setShimmerDur] = useState(props.animSpeed)

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                flex: 1,
                backgroundColor: props.backgroundColor,
                flexDirection: 'column',
                padding: 5,
            }}>
            <StatusBar backgroundColor={props.backgroundColor} barStyle={props.barStyle} />
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                <Shimmer
                    duration={shimmerDur}
                    direction={'right'}
                    animationOpacity={0.8}
                    style={{ backgroundColor: color.transparent, width: 70, marginLeft: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={styles.bigRound} />
                    </View>
                </Shimmer>
                <View style={{ flexDirection: 'column' }}>
                    <Shimmer duration={shimmerDur} style={{ width: 200, height: 20, marginLeft: 10, marginBottom: 10 }}>
                        <View style={styles.small} />
                    </Shimmer>
                    <Shimmer duration={shimmerDur} style={{ width: 200, height: 20, marginLeft: 10 }}>
                        <View style={styles.small} />
                    </Shimmer>
                </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ margin: 5, marginTop: 30, marginLeft: 10 }}>
                    <View style={{ flexDirection: 'column' }}>
                        <Shimmer duration={shimmerDur} style={{ width: 200, height: 110 }}>
                            <View style={styles.video} />
                        </Shimmer>
                        <Shimmer duration={shimmerDur} style={{ width: 100, height: 20, marginLeft: 0, marginBottom: 10, marginTop: 10 }}>
                            <View style={styles.Vsmall} />
                        </Shimmer>
                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                        <Shimmer duration={shimmerDur} style={{ width: 200, height: 110 }}>
                            <View style={styles.video} />
                        </Shimmer>
                        <Shimmer duration={shimmerDur} style={{ width: 100, height: 20, marginLeft: 0, marginBottom: 10, marginTop: 10 }}>
                            <View style={styles.Vsmall} />
                        </Shimmer>
                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                        <Shimmer duration={shimmerDur} style={{ width: 200, height: 110 }}>
                            <View style={styles.video} />
                        </Shimmer>
                        <Shimmer duration={shimmerDur} style={{ width: 100, height: 20, marginLeft: 0, marginBottom: 10, marginTop: 10 }}>
                            <View style={styles.Vsmall} />
                        </Shimmer>
                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                        <Shimmer duration={shimmerDur} style={{ width: 200, height: 110 }}>
                            <View style={styles.video} />
                        </Shimmer>
                        <Shimmer duration={shimmerDur} style={{ width: 100, height: 20, marginLeft: 0, marginBottom: 10, marginTop: 10 }}>
                            <View style={styles.Vsmall} />
                        </Shimmer>
                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                        <Shimmer duration={shimmerDur} style={{ width: 200, height: 110 }}>
                            <View style={styles.video} />
                        </Shimmer>
                        <Shimmer duration={shimmerDur} style={{ width: 100, height: 20, marginLeft: 0, marginBottom: 10, marginTop: 10 }}>
                            <View style={styles.Vsmall} />
                        </Shimmer>
                    </View>
                </ScrollView>
            </View>
            {/* 2 */}
            <Shimmer duration={shimmerDur} style={{ height: 30, width: 220, marginTop: 15, marginLeft: 10 }}>
                <View style={styles.small} />
            </Shimmer>
            <View style={{ flexDirection: 'row' }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ margin: 5, marginTop: 30, marginLeft: 10 }}>
                    <View style={{ flexDirection: 'column' }}>
                        <Shimmer duration={shimmerDur} style={{ width: 200, height: 110 }}>
                            <View style={styles.video} />
                        </Shimmer>
                        <Shimmer duration={shimmerDur} style={{ width: 100, height: 20, marginLeft: 0, marginBottom: 10, marginTop: 10 }}>
                            <View style={styles.Vsmall} />
                        </Shimmer>
                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                        <Shimmer duration={shimmerDur} style={{ width: 200, height: 110 }}>
                            <View style={styles.video} />
                        </Shimmer>
                        <Shimmer duration={shimmerDur} style={{ width: 100, height: 20, marginLeft: 0, marginBottom: 10, marginTop: 10 }}>
                            <View style={styles.Vsmall} />
                        </Shimmer>
                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                        <Shimmer duration={shimmerDur} style={{ width: 200, height: 110 }}>
                            <View style={styles.video} />
                        </Shimmer>
                        <Shimmer duration={shimmerDur} style={{ width: 100, height: 20, marginLeft: 0, marginBottom: 10, marginTop: 10 }}>
                            <View style={styles.Vsmall} />
                        </Shimmer>
                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                        <Shimmer duration={shimmerDur} style={{ width: 200, height: 110 }}>
                            <View style={styles.video} />
                        </Shimmer>
                        <Shimmer duration={shimmerDur} style={{ width: 100, height: 20, marginLeft: 0, marginBottom: 10, marginTop: 10 }}>
                            <View style={styles.Vsmall} />
                        </Shimmer>
                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                        <Shimmer duration={shimmerDur} style={{ width: 200, height: 110 }}>
                            <View style={styles.video} />
                        </Shimmer>
                        <Shimmer duration={shimmerDur} style={{ width: 100, height: 20, marginLeft: 0, marginBottom: 10, marginTop: 10 }}>
                            <View style={styles.Vsmall} />
                        </Shimmer>
                    </View>
                </ScrollView>
            </View>
            {/* 3 */}
            <Shimmer duration={shimmerDur} style={{ height: 30, width: 220, marginTop: 15, marginLeft: 10 }}>
                <View style={styles.small} />
            </Shimmer>
            <View style={{ flexDirection: 'row' }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ margin: 5, marginTop: 30, marginLeft: 10 }}>
                    <View style={{ flexDirection: 'column' }}>
                        <Shimmer duration={shimmerDur} style={{ width: 200, height: 110 }}>
                            <View style={styles.video} />
                        </Shimmer>
                        <Shimmer duration={shimmerDur} style={{ width: 100, height: 20, marginLeft: 0, marginBottom: 10, marginTop: 10 }}>
                            <View style={styles.Vsmall} />
                        </Shimmer>
                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                        <Shimmer duration={shimmerDur} style={{ width: 200, height: 110 }}>
                            <View style={styles.video} />
                        </Shimmer>
                        <Shimmer duration={shimmerDur} style={{ width: 100, height: 20, marginLeft: 0, marginBottom: 10, marginTop: 10 }}>
                            <View style={styles.Vsmall} />
                        </Shimmer>
                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                        <Shimmer duration={shimmerDur} style={{ width: 200, height: 110 }}>
                            <View style={styles.video} />
                        </Shimmer>
                        <Shimmer duration={shimmerDur} style={{ width: 100, height: 20, marginLeft: 0, marginBottom: 10, marginTop: 10 }}>
                            <View style={styles.Vsmall} />
                        </Shimmer>
                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                        <Shimmer duration={shimmerDur} style={{ width: 200, height: 110 }}>
                            <View style={styles.video} />
                        </Shimmer>
                        <Shimmer duration={shimmerDur} style={{ width: 100, height: 20, marginLeft: 0, marginBottom: 10, marginTop: 10 }}>
                            <View style={styles.Vsmall} />
                        </Shimmer>
                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                        <Shimmer duration={shimmerDur} style={{ width: 200, height: 110 }}>
                            <View style={styles.video} />
                        </Shimmer>
                        <Shimmer duration={shimmerDur} style={{ width: 100, height: 20, marginLeft: 0, marginBottom: 10, marginTop: 10 }}>
                            <View style={styles.Vsmall} />
                        </Shimmer>
                    </View>
                </ScrollView>
            </View>
            {/* 4 */}
            <Shimmer duration={shimmerDur} style={{ height: 30, width: 220, marginTop: 15, marginLeft: 10 }}>
                <View style={styles.small} />
            </Shimmer>
            <View style={{ flexDirection: 'row' }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ margin: 5, marginTop: 30, marginLeft: 10 }}>
                    <View style={{ flexDirection: 'column' }}>
                        <Shimmer duration={shimmerDur} style={{ width: 200, height: 110 }}>
                            <View style={styles.video} />
                        </Shimmer>
                        <Shimmer duration={shimmerDur} style={{ width: 100, height: 20, marginLeft: 0, marginBottom: 10, marginTop: 10 }}>
                            <View style={styles.Vsmall} />
                        </Shimmer>
                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                        <Shimmer duration={shimmerDur} style={{ width: 200, height: 110 }}>
                            <View style={styles.video} />
                        </Shimmer>
                        <Shimmer duration={shimmerDur} style={{ width: 100, height: 20, marginLeft: 0, marginBottom: 10, marginTop: 10 }}>
                            <View style={styles.Vsmall} />
                        </Shimmer>
                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                        <Shimmer duration={shimmerDur} style={{ width: 200, height: 110 }}>
                            <View style={styles.video} />
                        </Shimmer>
                        <Shimmer duration={shimmerDur} style={{ width: 100, height: 20, marginLeft: 0, marginBottom: 10, marginTop: 10 }}>
                            <View style={styles.Vsmall} />
                        </Shimmer>
                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                        <Shimmer duration={shimmerDur} style={{ width: 200, height: 110 }}>
                            <View style={styles.video} />
                        </Shimmer>
                        <Shimmer duration={shimmerDur} style={{ width: 100, height: 20, marginLeft: 0, marginBottom: 10, marginTop: 10 }}>
                            <View style={styles.Vsmall} />
                        </Shimmer>
                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                        <Shimmer duration={shimmerDur} style={{ width: 200, height: 110 }}>
                            <View style={styles.video} />
                        </Shimmer>
                        <Shimmer duration={shimmerDur} style={{ width: 100, height: 20, marginLeft: 0, marginBottom: 10, marginTop: 10 }}>
                            <View style={styles.Vsmall} />
                        </Shimmer>
                    </View>
                </ScrollView>
            </View>
            {/* 5*/}
            <Shimmer duration={shimmerDur} style={{ height: 30, width: 220, marginTop: 15, marginLeft: 10 }}>
                <View style={styles.small} />
            </Shimmer>
            <View style={{ flexDirection: 'row' }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ margin: 5, marginTop: 30, marginLeft: 10 }}>
                    <View style={{ flexDirection: 'column' }}>
                        <Shimmer duration={shimmerDur} style={{ width: 200, height: 110 }}>
                            <View style={styles.video} />
                        </Shimmer>
                        <Shimmer duration={shimmerDur} style={{ width: 100, height: 20, marginLeft: 0, marginBottom: 10, marginTop: 10 }}>
                            <View style={styles.Vsmall} />
                        </Shimmer>
                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                        <Shimmer duration={shimmerDur} style={{ width: 200, height: 110 }}>
                            <View style={styles.video} />
                        </Shimmer>
                        <Shimmer duration={shimmerDur} style={{ width: 100, height: 20, marginLeft: 0, marginBottom: 10, marginTop: 10 }}>
                            <View style={styles.Vsmall} />
                        </Shimmer>
                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                        <Shimmer duration={shimmerDur} style={{ width: 200, height: 110 }}>
                            <View style={styles.video} />
                        </Shimmer>
                        <Shimmer duration={shimmerDur} style={{ width: 100, height: 20, marginLeft: 0, marginBottom: 10, marginTop: 10 }}>
                            <View style={styles.Vsmall} />
                        </Shimmer>
                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                        <Shimmer duration={shimmerDur} style={{ width: 200, height: 110 }}>
                            <View style={styles.video} />
                        </Shimmer>
                        <Shimmer duration={shimmerDur} style={{ width: 100, height: 20, marginLeft: 0, marginBottom: 10, marginTop: 10 }}>
                            <View style={styles.Vsmall} />
                        </Shimmer>
                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                        <Shimmer duration={shimmerDur} style={{ width: 200, height: 110 }}>
                            <View style={styles.video} />
                        </Shimmer>
                        <Shimmer duration={shimmerDur} style={{ width: 100, height: 20, marginLeft: 0, marginBottom: 10, marginTop: 10 }}>
                            <View style={styles.Vsmall} />
                        </Shimmer>
                    </View>
                </ScrollView>
            </View>
            {/* 6 */}
            <Shimmer duration={shimmerDur} style={{ height: 30, width: 220, marginTop: 15, marginLeft: 10 }}>
                <View style={styles.small} />
            </Shimmer>
            <View style={{ flexDirection: 'row' }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ margin: 5, marginTop: 30, marginLeft: 10 }}>
                    <View style={{ flexDirection: 'column' }}>
                        <Shimmer duration={shimmerDur} style={{ width: 200, height: 110 }}>
                            <View style={styles.video} />
                        </Shimmer>
                        <Shimmer duration={shimmerDur} style={{ width: 100, height: 20, marginLeft: 0, marginBottom: 10, marginTop: 10 }}>
                            <View style={styles.Vsmall} />
                        </Shimmer>
                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                        <Shimmer duration={shimmerDur} style={{ width: 200, height: 110 }}>
                            <View style={styles.video} />
                        </Shimmer>
                        <Shimmer duration={shimmerDur} style={{ width: 100, height: 20, marginLeft: 0, marginBottom: 10, marginTop: 10 }}>
                            <View style={styles.Vsmall} />
                        </Shimmer>
                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                        <Shimmer duration={shimmerDur} style={{ width: 200, height: 110 }}>
                            <View style={styles.video} />
                        </Shimmer>
                        <Shimmer duration={shimmerDur} style={{ width: 100, height: 20, marginLeft: 0, marginBottom: 10, marginTop: 10 }}>
                            <View style={styles.Vsmall} />
                        </Shimmer>
                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                        <Shimmer duration={shimmerDur} style={{ width: 200, height: 110 }}>
                            <View style={styles.video} />
                        </Shimmer>
                        <Shimmer duration={shimmerDur} style={{ width: 100, height: 20, marginLeft: 0, marginBottom: 10, marginTop: 10 }}>
                            <View style={styles.Vsmall} />
                        </Shimmer>
                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                        <Shimmer duration={shimmerDur} style={{ width: 200, height: 110 }}>
                            <View style={styles.video} />
                        </Shimmer>
                        <Shimmer duration={shimmerDur} style={{ width: 100, height: 20, marginLeft: 0, marginBottom: 10, marginTop: 10 }}>
                            <View style={styles.Vsmall} />
                        </Shimmer>
                    </View>
                </ScrollView>
            </View>
            {/* 7 */}
            <Shimmer duration={shimmerDur} style={{ height: 30, width: 220, marginTop: 15, marginLeft: 10 }}>
                <View style={styles.small} />
            </Shimmer>
            <View style={{ flexDirection: 'row' }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ margin: 5, marginTop: 30, marginLeft: 10 }}>
                    <View style={{ flexDirection: 'column' }}>
                        <Shimmer duration={shimmerDur} style={{ width: 200, height: 110 }}>
                            <View style={styles.video} />
                        </Shimmer>
                        <Shimmer duration={shimmerDur} style={{ width: 100, height: 20, marginLeft: 0, marginBottom: 10, marginTop: 10 }}>
                            <View style={styles.Vsmall} />
                        </Shimmer>
                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                        <Shimmer duration={shimmerDur} style={{ width: 200, height: 110 }}>
                            <View style={styles.video} />
                        </Shimmer>
                        <Shimmer duration={shimmerDur} style={{ width: 100, height: 20, marginLeft: 0, marginBottom: 10, marginTop: 10 }}>
                            <View style={styles.Vsmall} />
                        </Shimmer>
                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                        <Shimmer duration={shimmerDur} style={{ width: 200, height: 110 }}>
                            <View style={styles.video} />
                        </Shimmer>
                        <Shimmer duration={shimmerDur} style={{ width: 100, height: 20, marginLeft: 0, marginBottom: 10, marginTop: 10 }}>
                            <View style={styles.Vsmall} />
                        </Shimmer>
                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                        <Shimmer duration={shimmerDur} style={{ width: 200, height: 110 }}>
                            <View style={styles.video} />
                        </Shimmer>
                        <Shimmer duration={shimmerDur} style={{ width: 100, height: 20, marginLeft: 0, marginBottom: 10, marginTop: 10 }}>
                            <View style={styles.Vsmall} />
                        </Shimmer>
                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                        <Shimmer duration={shimmerDur} style={{ width: 200, height: 110 }}>
                            <View style={styles.video} />
                        </Shimmer>
                        <Shimmer duration={shimmerDur} style={{ width: 100, height: 20, marginLeft: 0, marginBottom: 10, marginTop: 10 }}>
                            <View style={styles.Vsmall} />
                        </Shimmer>
                    </View>
                </ScrollView>
            </View>
            {/* 8 */}
            <Shimmer duration={shimmerDur} style={{ height: 30, width: 220, marginTop: 15, marginLeft: 10 }}>
                <View style={styles.small} />
            </Shimmer>
            <View style={{ flexDirection: 'row' }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ margin: 5, marginTop: 30, marginLeft: 10 }}>
                    <View style={{ flexDirection: 'column' }}>
                        <Shimmer duration={shimmerDur} style={{ width: 200, height: 110 }}>
                            <View style={styles.video} />
                        </Shimmer>
                        <Shimmer duration={shimmerDur} style={{ width: 100, height: 20, marginLeft: 0, marginBottom: 10, marginTop: 10 }}>
                            <View style={styles.Vsmall} />
                        </Shimmer>
                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                        <Shimmer duration={shimmerDur} style={{ width: 200, height: 110 }}>
                            <View style={styles.video} />
                        </Shimmer>
                        <Shimmer duration={shimmerDur} style={{ width: 100, height: 20, marginLeft: 0, marginBottom: 10, marginTop: 10 }}>
                            <View style={styles.Vsmall} />
                        </Shimmer>
                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                        <Shimmer duration={shimmerDur} style={{ width: 200, height: 110 }}>
                            <View style={styles.video} />
                        </Shimmer>
                        <Shimmer duration={shimmerDur} style={{ width: 100, height: 20, marginLeft: 0, marginBottom: 10, marginTop: 10 }}>
                            <View style={styles.Vsmall} />
                        </Shimmer>
                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                        <Shimmer duration={shimmerDur} style={{ width: 200, height: 110 }}>
                            <View style={styles.video} />
                        </Shimmer>
                        <Shimmer duration={shimmerDur} style={{ width: 100, height: 20, marginLeft: 0, marginBottom: 10, marginTop: 10 }}>
                            <View style={styles.Vsmall} />
                        </Shimmer>
                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                        <Shimmer duration={shimmerDur} style={{ width: 200, height: 110 }}>
                            <View style={styles.video} />
                        </Shimmer>
                        <Shimmer duration={shimmerDur} style={{ width: 100, height: 20, marginLeft: 0, marginBottom: 10, marginTop: 10 }}>
                            <View style={styles.Vsmall} />
                        </Shimmer>
                    </View>
                </ScrollView>
            </View>
            {/* 9*/}
            <Shimmer duration={shimmerDur} style={{ height: 30, width: 220, marginTop: 15, marginLeft: 10 }}>
                <View style={styles.small} />
            </Shimmer>
            <View style={{ flexDirection: 'row' }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ margin: 5, marginTop: 30, marginLeft: 10 }}>
                    <View style={{ flexDirection: 'column' }}>
                        <Shimmer duration={shimmerDur} style={{ width: 200, height: 110 }}>
                            <View style={styles.video} />
                        </Shimmer>
                        <Shimmer duration={shimmerDur} style={{ width: 100, height: 20, marginLeft: 0, marginBottom: 10, marginTop: 10 }}>
                            <View style={styles.Vsmall} />
                        </Shimmer>
                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                        <Shimmer duration={shimmerDur} style={{ width: 200, height: 110 }}>
                            <View style={styles.video} />
                        </Shimmer>
                        <Shimmer duration={shimmerDur} style={{ width: 100, height: 20, marginLeft: 0, marginBottom: 10, marginTop: 10 }}>
                            <View style={styles.Vsmall} />
                        </Shimmer>
                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                        <Shimmer duration={shimmerDur} style={{ width: 200, height: 110 }}>
                            <View style={styles.video} />
                        </Shimmer>
                        <Shimmer duration={shimmerDur} style={{ width: 100, height: 20, marginLeft: 0, marginBottom: 10, marginTop: 10 }}>
                            <View style={styles.Vsmall} />
                        </Shimmer>
                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                        <Shimmer duration={shimmerDur} style={{ width: 200, height: 110 }}>
                            <View style={styles.video} />
                        </Shimmer>
                        <Shimmer duration={shimmerDur} style={{ width: 100, height: 20, marginLeft: 0, marginBottom: 10, marginTop: 10 }}>
                            <View style={styles.Vsmall} />
                        </Shimmer>
                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                        <Shimmer duration={shimmerDur} style={{ width: 200, height: 110 }}>
                            <View style={styles.video} />
                        </Shimmer>
                        <Shimmer duration={shimmerDur} style={{ width: 100, height: 20, marginLeft: 0, marginBottom: 10, marginTop: 10 }}>
                            <View style={styles.Vsmall} />
                        </Shimmer>
                    </View>
                </ScrollView>
            </View>
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    small: {
        height: 20,
        width: 200,
        borderRadius: 10,
        backgroundColor: '#f0f0f0',
        marginTop: 10,
        marginLeft: 10
    },
    bigRound: {
        height: 70,
        width: 70,
        borderRadius: 100,
        backgroundColor: '#f0f0f0',
        paddingTop: 5
    },
    video: {
        height: 100,
        width: 200,
        borderRadius: 10,
        backgroundColor: '#f0f0f0',
        marginTop: 10,
        marginLeft: 10
    },
    Vsmall: {
        height: 20,
        width: 100,
        borderRadius: 10,
        backgroundColor: '#f0f0f0',
    },

});

export default ___________CONST_ITEM_LOADER_485;


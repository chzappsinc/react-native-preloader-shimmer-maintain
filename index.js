import React from 'react'
import {
    NativeModules,
    StyleSheet,
    ViewPropTypes
} from 'react-native';
import PropTypes from 'prop-types';
import PreLoader from './Loaders/GridLoader/Alias_Shop_Rms';
import PrePostLoader from './Loaders/PageLoader/Post_Loader_Alias';
import PrePageLoader from './Loaders/PageLoader/Page_Loader_Alias';
import PreLoaderRound from './Loaders/SingleLoader/Round'


/**
 * 
 * Make a Shining loader like zomato , Facebook with one View
 * 
 * @see https://github.com/chzappsinc/react-native-preloader-shimmer/
 * 
 * Credits
 * @see https://chzapps.com
 * 
 * 
 */

export const MainLoader = ({
    backgroundColor = '#fff',
    visible = true,
    animSpeed = 100,
    barStyle = isRequiredError('barStyle cannot be empty type : light-content , dark-content'),
    containerStyle
}) => {
    return (
        visible && <PreLoader backgroundColor={backgroundColor} animSpeed={animSpeed} barStyle={barStyle} />
    )
}

MainLoader.propTypes = {
    backgroundColor: PropTypes.string,
    containerStyle: ViewPropTypes.style
}

export const PostLoader = ({
    backgroundColor = '#fff',
    visible = true,
    animSpeed = 100,
    barStyle = isRequired('react-native-preloader-shimmer : barStyle cannot be empty type : light-content , dark-content')
}) => {
    barStyle === undefined || null || '' ? barStyle = 'default' : barStyle = barStyle
    return (
        visible && <PrePostLoader backgroundColor={backgroundColor} animSpeed={animSpeed} barStyle={barStyle} />
    )
}

export const PageLoader = ({
    backgroundColor = '#fff',
    visible = true,
    animSpeed = 100,
    barStyle = isRequired('react-native-preloader-shimmer : barStyle cannot be empty type : light-content , dark-content')
}) => {
    return (
        visible && <PrePageLoader barStyle={barStyle} animSpeed={animSpeed} backgroundColor={backgroundColor} />
    )
}

export const ProfileLoader = ({
    backgroundColor = '#fff',
    visible = true,
    animSpeed = 100,
}) => {
    return (
        visible && <PreLoaderRound animSpeed={animSpeed} backgroundColor={backgroundColor} />
    )
}

const isRequired = (msg) => { console.warn(msg); };
const isRequiredError = (msg) => { console.error(msg); };

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

export default { MainLoader, PostLoader, PageLoader, ProfileLoader }
# react-native-preloader-shimmer-maintain

---
***💌 Message***

Contact us to upload your edited version to npm!

[CONTACT US](#read-me)

---

# Files

```
├── Loaders
│   ├── GridLoader
│   │   ├── Alias_Shop_Rms.js ---> Main Loader
│   │   └── gridloader.js
│   ├── PageLoader
│   │   ├── Page_Loader_Alias.js ---> Page Loader
│   │   └── Post_Loader_Alias.js ---> Post Loader
│   └── SingleLoader
│       └── Round.js  ---> Profile Loader
├── .chzapps
├── .gitignore --->  Avoid
├── colors.js ---> Color 
├── index.js  ---> All functions are here
├── MainLoader.js ---> Deleted on Version 1.2.5
├── package.json
└── README.md
```

# Index.js

```javascript
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
```

## MainLoader

```javascript
/**
 * 
 * Make a Shining loader like zomato , Facebook with one View
 * 
 * @see https://github.com/chzappsinc/react-native-preloader-shimmer/
 * 
 * Credits
 * @see https://chzapps.com
 * Your name!
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
```

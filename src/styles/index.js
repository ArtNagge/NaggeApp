import {StyleSheet, Dimensions} from "react-native";

let {height, width} = Dimensions.get('screen');

const mainStyle = StyleSheet.create({
    header: {
        width: width,
        height: 90,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 30,
        paddingRight: 30,
        backgroundColor: 'tomato',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    mainHeaderSettings: {
        backgroundColor: 'tomato',
        height: 50,
        width: width,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: 15
    },
    infoBlockContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: width - 30,
        marginTop: 30
    },
    topUserContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: width,
    },
    TopListItem: {
        width: width,
        height: 70,
        paddingLeft: 15,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderBottomWidth: 1,
        borderBottomColor: '#f3f3f3'
    }
});

const globalStyle = StyleSheet.create({
    container: {
        backgroundColor: '#f3f3f3'
    },
    avaS: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    nickName: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '600'
    },
    description: {
        fontSize: 14,
        color: '#fff',
        fontWeight: '400'
    },
    sAV: {
        flex: 1,
        backgroundColor: 'tomato'
    },
    tAC: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        margin: 0
    },
    f14: {
        fontSize: 14
    },
    f16: {
        fontSize: 16
    },
    f18: {
        fontSize: 18
    },
    f20: {
        fontSize: 20
    },
    fw200: {
        fontWeight: '200'
    },
    fw400: {
        fontWeight: '400'
    },
    fw600: {
        fontWeight: '600'
    },
    fw800: {
        fontWeight: '800'
    },
    mT10: {
        marginTop: 10
    },
    mT15: {
        marginTop: 15
    },
    mT20: {
        marginTop: 20
    },
    mT25: {
        marginTop: 25
    },
    mT30: {
        marginTop: 30
    },
    mT35: {
        marginTop: 35
    },
    mT40: {
        marginTop: 40
    },
    mT45: {
        marginTop: 45
    },
    mT50: {
        marginTop: 50
    },
    mT55: {
        marginTop: 55
    },
    mL5: {
        marginLeft: 5
    },
    mL10: {
        marginLeft: 10
    },
    mL15: {
        marginLeft: 15
    },
    mL20: {
        marginLeft: 20
    },
    mL25: {
        marginLeft: 25
    }
});

const shadowStyle = {
    headerShadow: {
        width: mainStyle.header.width,
        height: mainStyle.header.height,
        color: "#000",
        border: 20,
        radius: 8,
        opacity: 0.05,
        x: 0,
        y: 3
    },
    headerSettingShadow: {
        width: width,
        height: mainStyle.mainHeaderSettings.height,
        color: "#000",
        border: 20,
        radius: 8,
        opacity: 0.05,
        x: 0,
        y: 3
    }
};

export {
    globalStyle as glS,
    mainStyle as mnS,
    shadowStyle as shS
}
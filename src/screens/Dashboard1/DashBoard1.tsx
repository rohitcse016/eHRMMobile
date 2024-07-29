
import React, { Component, useEffect, useState } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    ImageBackground,
    Alert,
    Modal,
    Pressable,
    Linking,
    NativeEventSubscription,
    BackHandler,
    Button,

} from 'react-native';
import { default as style } from '../Dashboard/styles';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Foundation from 'react-native-vector-icons/Foundation';
import IonIcons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Image } from 'react-native';
import Images from '../../utils/Images';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
    MenuProvider,
} from 'react-native-popup-menu';
import styles from '../Dashboard/styles';
import Colors from '../../utils/Colors';
import { findCoordinates, getBackground } from '../../utils/Helper';
import { wp, hp } from '../../utils/Responsive';
import RNRestart from 'react-native-restart';
import AppStyleConstant from '../../utils/AppStyleConstant';
import i18n from '../../utils/i18n';
import CustomDropDown from '../../components/widgets/CustomDropDown';
import Constant from '../../utils/Constant';
import { sagaActions } from "../../redux/saga/sagaActions";
import { setLanguage } from '../../redux/slices/languageSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PublicUtility from '../Dashboard/PublicUtility';
import Events from '../Dashboard/Events';
import { ThemeContext } from '../../config/theme/ThemeProvider';
import ActionButtonCircle from '../../components/ActionButtonCircle/ActionButtonCircle';
import CircleDesign from './CircleDesign';
import FloatingActionButton from '../../components/FloatingHoriZontal/FloatingActionButton';
import FamousPlaces from '../Dashboard/famousPlaces';
import Url from '../../utils/Url';
import { axiosRequest } from '../../utils/ApiRequest';
import Weather from '../Dashboard/Weather';
import CustomDropDownMenu from '../../components/widgets/CustomDropDownMenu';
import { FloatingAction } from 'react-native-floating-action';


const sosButton = {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: wp('1'),
    fontFamily: AppStyleConstant.CRIMSONPRO_BLACK,
    elevation: 10,
};
const actions = [
    {
        text: i18n.t('DashBoard.police'),
        icon: (
            <MaterialCommunityIcons
                name="police-badge"
                size={25}
                color="white"></MaterialCommunityIcons>
        ),
        name: '112',
        position: 1,
        textColor: 'black',
        textStyle: [sosButton]
    },
    {
        icon: <FontAwesome name="ambulance" size={25} color="white"></FontAwesome>,
        text: i18n.t('DashBoard.ambulance'),
        name: '108',
        position: 2,
        textColor: 'black',
        textStyle: [sosButton]
    },
    {
        icon: (
            <MaterialCommunityIcons
                name="fire-truck"
                size={25}
                color="white"></MaterialCommunityIcons>
        ),
        text: i18n.t('DashBoard.fire'),
        name: '101',
        position: 4,
        textColor: 'black',
        textStyle: [sosButton]
    },
    {
        icon: <FontAwesome5 name="disease" size={25} color="white"></FontAwesome5>,
        text: i18n.t('DashBoard.COVID19Helpline'),
        name: '1123978046',
        position: 5,
        textColor: 'black',
        textBackground: 'white',
        textStyle: [sosButton]
    },
    {
        icon: <Fontisto name="female" size={25} color="white"></Fontisto>,
        text: i18n.t('DashBoard.womenHelpline'),
        name: '1090',
        position: 6,
        textColor: 'black',
        textStyle: [sosButton]
    },
];

class Dashboard1 extends Component {
    static contextType = ThemeContext;

    constructor(props: {} | Readonly<{}>) {
        super(props)
    }
    state = {
        modalVisible: false,
        language: this.props.language,
        actionsSet: actions,
        header: true,
        isSOSFloatingBtnPopupVisible: true,
    };


    displayModal(show: boolean) {
        this.setState({ modalVisible: show });
    }
    // componentWillUnmount() {
    //     this.handleBackPress();
    //     console.log('componentWillUnmount called.');
    //     // BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    // }
    // handleBackPress = () => {
    //     BackHandler.exitApp(); // works best when the goBack is async
    //     return true;
    // }

    componentDidMount() {
        this.setActionBar();
        this.setState({ isSOSFloatingBtnPopupVisible: true })
    }
    onWebService = (urlData: any) => {
        this.props.navigation.navigate('MyWeb', urlData);
    };

    changeLanguage = (value: string) => {


        Alert.alert('Alert', i18n.t('DashBoard.CHANGE_LANGUAGE'), [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            {
                text: 'OK', onPress: () => {

                    const language = value;
                    this.props?.setLanguage(value)
                    i18n
                        .changeLanguage(value)
                        .then(() => this.setState({ language: value }))
                        .catch(err => console.log(err));
                    AsyncStorage.setItem('language', value);

                    setTimeout(() => {
                        this.setState({ actionsSet: actions });
                        RNRestart.Restart();
                    }, 2000);

                }
            },
        ]);


    };

    onSelect = (name: string) => {
        console.log("menu name========================" + name)
        switch (name) {
            case 'Location':
                break;

            case 'DashBoard.changePassword':
                this.props.navigation.navigate('ChangePassword');
                break;

            case 'DashBoard.SETTING':
                this.props.navigation.navigate('Setting');
                break;
        }
    };

    profileButton = () => {
        const theme = this.context
        const styles = style(theme);
        return (
            <Menu>
                <MenuTrigger>
                    <IonIcons name="person-circle-outline" size={30} color={theme.colors.ICON_COLOR}></IonIcons>
                    {/* <Image
                        source={Images.PROFILE}
                        style={{
                            height: 25,
                            width: 25,
                        }}
                    /> */}
                </MenuTrigger>
                <MenuOptions
                    optionsContainerStyle={{
                        borderRadius: 15,
                    }}>
                    <>
                        <ImageBackground
                            blurRadius={1}
                            imageStyle={{ borderRadius: 15 }}
                            style={styles.bgImageStyle}
                            source={Images.BG_6}>
                            {Constant.MENU.map((item, index) => {
                                return (
                                    item.name != "DashBoard.LANGUAGE" ?
                                        <MenuOption
                                            key={`catName${index}`}
                                            style={styles.menuContainer}
                                            onSelect={() => this.onSelect(item.name)}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <View style={styles.menuIcon}><FontAwesomeIcon name={item.icon} size={17} color={Colors.black} /></View>
                                                <Text style={styles.menuLabel}>{i18n.t(item.name)}</Text>
                                            </View>
                                        </MenuOption> :
                                        <CustomDropDown
                                            key={`dropdown${index}`}
                                            type={'button'}
                                            data={Constant.LANGUAGE}
                                            visible={true}
                                            onSelectItem={(data: string) => {
                                                this.changeLanguage(data.value)
                                                this.setActionBar();
                                            }}
                                            renderButton={
                                                <View style={[styles.menuContainer, { flexDirection: 'row' }]}>
                                                    <View style={styles.menuIcon}><Image style={{ borderRadius: 15, height: 20, width: 20, marginTop: 1, }} source={Images.TRANSLATE_lOGO}></Image></View>
                                                    <Text style={styles.menuLabel}>{i18n.t(item.name)}</Text>
                                                </View>}
                                        />
                                );
                            })}
                        </ImageBackground>
                    </>
                </MenuOptions>
            </Menu>
        );
    };
    imageHeader = () => {
        const theme = this.context
        const styles = style(theme);
        return (
            <View style={styles.headerImageContainer}>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ paddingHorizontal: wp('2') }}>{this.props.language == 'en' ?
                        <Text style={{ fontSize: 16, fontWeight: '700', color: 'black' }}>BUDDHA LIBRARY</Text> :
                        <Text style={{ fontSize: 18, fontWeight: '700', color: 'black' }}>बुद्धा लाइब्रेरी</Text>
                    }
                    </View>
                </View>

            </View>
            // <Menu>
            //     <MenuTrigger>
            //         <View style={styles.headerImageContainer}>

            //             <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            //                 <View style={{ paddingHorizontal: wp('2') }}>{this.props.language == 'en' ?
            //                     // <Image source={Images.KNP_HEADER} style={styles.headerImage} /> :
            //                     // <Image source={Images.KNP_HEADER_HI} style={styles.headerImage} />
            //                     <Text style={{ fontSize: 16, fontWeight: '700', color: 'black' }}>BUDDHA LIBRARY</Text> :
            //                     <Text>बुद्धा लाइब्रेरी</Text>

            //                 }
            //                 </View>
            //                 {/* <View style={{ marginTop: hp('1.6') }}>
            //                     <Feather name="arrow-right-circle" size={18} color={Colors.orange}></Feather>
            //                 </View> */}
            //             </View>

            //         </View>
            //     </MenuTrigger>
            //     <MenuOptions
            //         optionsContainerStyle={{
            //             borderRadius: 15,

            //         }}>
            //         <>
            //             <ImageBackground
            //                 blurRadius={1}
            //                 imageStyle={{ borderRadius: 15 }}
            //                 style={styles.bgImageStyle}
            //                 source={Images.BG_6}>
            //                 <ScrollView
            //                     // overScrollMode="always"
            //                     style={{ height: hp('13'), marginRight: wp('2') }}>
            //                     {Constant.CITIZEN_SERVICES.map(item => {
            //                         return (
            //                             <MenuOption
            //                                 key={`key${item.id}`}
            //                                 style={styles.menuContainer}
            //                                 onSelect={() => this.onWebService(item)}>
            //                                 <View style={{ flexDirection: 'row' }}>
            //                                     <View style={styles.menuIcon}><FontAwesomeIcon name={item.icon} size={17} color={Colors.black} /></View>
            //                                     <Text style={styles.menuLabel}>{i18n.t(item.name)}</Text>
            //                                 </View>
            //                             </MenuOption>
            //                         );
            //                     })}
            //                 </ScrollView>
            //             </ImageBackground>
            //         </>
            //     </MenuOptions>
            // </Menu>
        );
    };

    setActionBar() {
        const theme = this.context
        const styles = style(theme);
        this.props.navigation.setOptions({
            title: '',
            headerStyle: {

                backgroundColor: theme.colors.DASHBOARD_HEADER_BACKGROUND,
                height: hp('9'),
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: '100',
            },

            headerRight: () => (

                <View style={styles.rightHeader}>
                    {this.imageHeader()}

                    <View style={{ width: "21%", flexDirection: 'row', }}>

                        {/* <CustomDropDown
                            type={'button'}
                            data={Constant.LANGUAGE}
                            onSelectItem={(data: string) => {
                                this.changeLanguage(data.value)
                                this.setActionBar();
                            }}
                            renderButton={<Image style={{ borderRadius: 15, height: 25, width: 25, marginTop: 1, }} source={Images.TRANSLATE_lOGO}></Image>}
                        /> */}
                        <View style={{ marginTop: -3, paddingLeft: wp('5') }}>{this.profileButton()}</View>
                    </View>

                </View>
            ),
        });
    }


    setActionContent = (lang: any) => {
        if (lang == 'en')
            return (actions)
    }


    render() {
        const theme = this.context
        const styles = style(theme);
        return (
            <View>
                <ScrollView
                    contentContainerStyle={{ paddingBottom: hp('0'), height: '100%' }}
                    style={{ paddingHorizontal: wp('2'), backgroundColor: theme.colors.BACKGROUND }}>

                    <FamousPlaces />
                    <Button
                        title={'Order History'}
                        onPress={() => {
                            this.props.navigation.navigate('OrderHistory');
                        }}
                    />

                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = (state: any) => ({
    language: state.language.language
});

const mapDispatchToProps = { setLanguage }

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard1);

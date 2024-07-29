import React, { Component, useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    SectionList,
    Text,
    Image,
    TouchableOpacity,
    ImageBackground,
    ScrollView,
    ActivityIndicator
} from 'react-native';
import {
    DrawerItem,
    DrawerItemList,
    DrawerContentScrollView,
} from '@react-navigation/drawer';

import {
    responsiveHeight as hp,
    responsiveFontSize,
} from 'react-native-responsive-dimensions';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import { RootState } from '../redux/store';
import { findCoordinates, getBackground, notLoginAlert } from '../utils/Helper';
import { Avatar, Button } from 'native-base';
import { useSelector, useDispatch } from 'react-redux';
import { sagaActions } from '../redux/saga/sagaActions';
import { userLogoutSaga } from '../redux/saga/saga';
import Url from '../utils/Url';
import Constant from '../utils/Constant';
import OtherMenuOptions from './OtherMenuOptions';
import { default as style } from './styles';
import useThemedStyles from '../config/theme/hooks/useThemedStyles';
import useTheme from '../config/theme/hooks/useTheme';
import languageSlice, { setLanguage } from '../redux/slices/languageSlice';
import i18n from '../utils/i18n';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default DrawerContent = ({ props }: any) => {

    const [drawerMenus, setDrawerMenus] = useState<any>([]);
    let [type, setType] = useState<number>(1);
    const theme = useTheme();
    const styles = useThemedStyles(style);

    // const onWebService = (urlData: any) => {
    //     props.navigation.navigate('MyWeb', urlData);
    // };
    const dispatch = useDispatch();
    const menu = useSelector((state: RootState) => state.sideMenu);
    const { userData } = useSelector((state: RootState) => state.user);
    const  {location}  = useSelector((state: RootState) => state.location);
    const [menu1, setMenu1] = useState<any>([]);
    const navigation = useNavigation<any>();
    var menu2: any = [];
    // const { moduleRight, formRight }:any = menu.drawerMenuData;



    useEffect(() => {
        let param = {
            ipAddres: "",
            orgID: userData?.verifiedUser?.orgID,
            packageID: 1,
            portalTypeID: -1,
            roleID: -1,
            type: 1,
            userID: userData?.verifiedUser?.userID,
            userTypeID: userData?.verifiedUser?.userTypeID,
        }
        // delete userData.profileImage;
        {userData && dispatch({
            type: sagaActions.FETCH_SIDE_BAR_MENU,
            payload: {
                params: param
            },
        });}
        
    }, []);

    useEffect(() => {

        findCoordinates().then((coordinates: any) => {
            const { coords } = coordinates;
            // console.log(coords);
            dispatch({
                type: sagaActions.GET_LOCATION,
                payload: {
                    params: coords
                },
            })
        }).catch(error => (console.log(error)));
        // console.log({Drawer:location})

        // console.log(menu.drawerMenuData)
        // if (menu.drawerMenuData) {
        //     // console.log({moduleRight:moduleRight})
        //     const data: any = menu.drawerMenuData?.data?.moduleRight?.map((item: any, index: number) => ({
        //         ...item,
        //         title: item.mModuleName,
        //         data: item.mModuleName,
        //         isCollapse: true,
        //         index

        //     }));
        //     setDrawerMenus(data);
        // }

        for (let index = 0; index < menu.drawerMenuData?.data?.moduleRight.length; index++) {
            menu2.push({
                name: menu.drawerMenuData?.data?.moduleRight[index]['mModuleName'],
                routes: [],
                isCollapse: true,
                index
                // path: getModulePath(moduleRight[i]['mModuleName']),
            })

            for (let j = 0; j < menu.drawerMenuData?.data?.formRight.length; j++) {

                if (menu.drawerMenuData?.data?.formRight[j]?.mModuleID === menu.drawerMenuData?.data?.moduleRight[index]?.moduleID) {
                    menu2[index]['routes'].push({
                        name: menu.drawerMenuData?.data?.formRight[j]['displayName'],
                    });
                }
            }
        }

        setMenu1(menu2)
        // console.log(JSON.stringify(menu.drawerMenuData?.data,null,1))
    }, [menu, userData]);




    function onSelectItem(data: any) {
        // console.log(data.subItem.name)
        let params: Object = {
            data,
            background: getBackground(data.subItem.subCategoryName),
        };

        switch (data.subItem.name) {
            case 'Institute Candidate':
                props.props.navigation.navigate("InstituteUser", params);
                break;

            case 'Institute Profile':
                props.props.navigation.navigate("Institute", params);
                break;

            case 'Institute Search':
                props.props.navigation.navigate("ListData", params);
                break;

            case 'Candidate Profile':
                // props.props.navigation.navigate("EditCandidate", params);
                userData?.verifiedUser?.userTypeID==1 ?
                props.props.navigation.navigate("UpdateProfile", params) :
                props.props.navigation.navigate("ViewInstituteUser", params)
                break;

            case 'Booking History':
                props.props.navigation.navigate("OrderHistory", params);
                break;

            case 'Candidate Display':
                props.props.navigation.navigate("Candidate", params);
                break;
                
            case 'Seat Booking':
                props.props.navigation.navigate("ListData", params);
                break;
            case 'Booking Collection':
                props.props.navigation.navigate("BookingReport", params);
                break;

            case 'Order':
                props.props.navigation.navigate("Candidate", params);
                break;

            // case 'Booking Collection':
            //     props.props.navigation.navigate("Order", params);
            //     break;

            case 'HYGIENE COMPLAINT':

                if (!userData) {
                    notLoginAlert(props.navigation);
                } else {
                    const webParams = {
                        ...params,
                        name: 'Add Complaint',
                        url: `https://online.kanpursmartcity.org/`,
                        //url: `${Url.WEB_ADD_COMPLAINT}?email=${user.userData ? user?.userData?.email : ""}`,
                    };
                    // props.navigation.navigate("MyWeb", webParams);
                }
                break;

            // default:
            //     navigation.navigate("AddInstitute", params);
            //     break;
        }

    }

    const logout = () => {
        dispatch({ type: sagaActions.USER_LOGOUT });

        setTimeout(() => {
            console.log(userData);
            navigation.navigate("Login");
        }, 500)
    }

    const SideBarHeader = () => {
        return (
            <ImageBackground
                style={styles.userInfoSection}
                source={require('./../assets/background/blur_bg.png')}>
                <View style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    paddingHorizontal: 12,
                    paddingBottom: 12
                }}>
                    {userData?.verifiedUser &&
                        <>
                            <TouchableOpacity onPress={() => props.props.navigation.navigate("UpdateProfile")}>
                                <Avatar
                                    source={{
                                        uri:
                                            'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg',
                                    }}
                                    size={50}
                                />
                                <View
                                    style={{
                                        position: 'absolute',
                                        bottom: 2,
                                        left: 40
                                    }}
                                >
                                    <IconFontAwesome name={'edit'} size={20} color={"#000000"} />

                                </View>
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View>
                                    <Text style={styles.title}>{userData?.firstName}</Text>
                                    <Text style={styles.subTitle}>{userData?.email}</Text>
                                </View>
                                <View>
                                    <Button
                                        size='xs'
                                        rounded={'2xl'}
                                        colorScheme={'danger'}
                                        onPress={logout}
                                    >Logout</Button>
                                </View>

                            </View>

                        </>}
                    {!userData &&
                        <Button
                            style={{ width: 80 }}
                            size='sm'
                            rounded={'2xl'}
                            colorScheme={'darkBlue'}
                            onPress={() => { props.props.navigation.navigate("Login"); }}
                        >Login</Button>}
                </View>

            </ImageBackground>
        )
    }

    const toggleHeader = ({ name, isCollapse, index }: any) => {

        // console.log(name, isCollapse, index);
        if (name == "COMPLAINT")
            props.navigation.navigate("MyWeb", { name: name, url: 'https://online.kanpursmartcity.org/' })
        else {
            let data = [...menu1];
            data[index].isCollapse = !isCollapse;
            // console.log(data[index].isCollapse);
            setDrawerMenus(data);
        }
    }

    const MenuItems = () => {
        // console.log({menu2:menu1})
        return (
            <>
                <SafeAreaView style={styles.container}>
                    <ScrollView horizontal={false} style={{ width: "100%", marginVertical: 10 }} >
                        <View>
                            {menu1.map((item: any, index: number) => {
                                return (

                                    <View
                                        key={`cat_${index}`}
                                    >
                                        <TouchableOpacity
                                            onPress={() => { toggleHeader(item) }}
                                            style={styles.headerContainer}>

                                            <View style={styles.headerIcon}>
                                                <IconFontAwesome name={item.catIcon ? item.catIcon : 'circle'} size={15} color={item.catIcon ? 'black' : "#dcdcdc"} />
                                            </View>
                                            <Text style={styles.headerText}>
                                                {item.name}
                                            </Text>
                                            <View>
                                                {item.name == "COMPLAINT" ? <View /> :
                                                    <IconFeather name={item.isCollapse ? "chevron-down" : "chevron-up"} size={18} color={'black'} />}
                                            </View>
                                        </TouchableOpacity>

                                        {item.routes.map((subItem: any, index: number) => {
                                            return (
                                                <View key={`subCat_${index}`}>
                                                    {!item.isCollapse &&
                                                        <TouchableOpacity

                                                            onPress={() => onSelectItem({ subItem })}
                                                            style={[
                                                                styles.container,
                                                                styles.subContainer
                                                            ]}>
                                                            <IconFontAwesome name="square" size={12} color={index % 2 ? "#914bdb" : '#4972d1'} />
                                                            <View>
                                                                <View style={styles.subHeaderTextContainer}>
                                                                    <Text style={styles.subHeaderText}>
                                                                        {subItem.name}
                                                                    </Text>
                                                                </View>
                                                            </View>
                                                        </TouchableOpacity>}
                                                </View>
                                            )
                                        })}
                                    </View>

                                )
                            })}
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </>
        )
    }


    return (
        <DrawerContentScrollView
            style={{
                paddingTop: 0,
                backgroundColor: 'white'
                // backgroundColor: theme.colors.BACKGROUND
            }} {...props}>
            <View
                style={
                    styles.drawerContent
                }
            >
                <SideBarHeader />
                {menu.loading && <ActivityIndicator size={'large'} />}
                <MenuItems />
            </View>
        </DrawerContentScrollView>
    );
}

import {
    Text,
    TouchableOpacity,
    View,
    ActivityIndicator,
    Image,
    Keyboard,
    ImageBackground,
    TextInput

} from 'react-native';

import CustomInputText from '../../components/widgets/CustomInputText';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import styles from './style';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import { useEffect, useState } from 'react';
import Constant from '../../utils/Constant';
import Url from '../../utils/Url';
import { axiosRequest } from '../../utils/ApiRequest';
import { showMessage } from 'react-native-flash-message';
import { Button, Checkbox } from 'native-base';
import Colors from '../../utils/Colors';
import Images from '../../utils/Images';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { sagaActions } from '../../redux/saga/sagaActions';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { hp, wp } from '../../utils/Responsive';
import LinearGradient from 'react-native-linear-gradient';
import useThemedStyles from '../../config/theme/hooks/useThemedStyles';
import { default as style } from './style';
import { setUserData } from '../../redux/slices/userSlice';


const Login = (props: any) => {
    const navigation = useNavigation<any>();
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const dispatch = useDispatch();
    const { response, userData, loading } = useSelector(
        (state: RootState) => state.user,
    );
    const [getUserData, setUserData] = useState(userData)
    const styles = useThemedStyles(style);


    useEffect(() => {
        // console.log({ props: props })
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true); // or some other action
            },
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false); // or some other action
            },
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);


    const validation = yup.object().shape({
        loginName: yup.string().nullable().required('Username is required'),

        password: yup.string().nullable().required('Password is required'),
    });

    useEffect(() => {
        setUserData(userData)
    }, [userData]);

    const submitLogin = (values: any) => {
        // console.log({myvalues:values})
        dispatch({
            type: sagaActions.FETCH_USER_DATA,
            payload: {
                params: values,
            },
        });
        axiosRequest(Url.LOGIN, Constant.API_REQUEST_METHOD.POST, values).then(res => {
            const { listPackages } = res?.data
            console.log(JSON.stringify(userData, null, 1))
            // console.log(JSON.stringify(res.data.verifiedUser?.isVerify))
            if (res?.data) {
                if (!res.data.verifiedUser?.isVerify) {
                    showMessage({
                        message: 'Login Failed. Invalid Credentials',
                        type: 'danger',
                    });
                }
                else {
                    // if (userData) {
                    navigation.navigate('DrawerStack');
                    showMessage({
                        message: 'Login successfully',
                        type: 'success',
                    });
                    // }
                }
            }
        })

    };
    const [isSelected, setSelection] = useState(false);

    return (
        <>
            <ScrollView style={{backgroundColor: '#DCDCDC',}}>
                <Formik
                    validationSchema={validation}
                    initialValues={{
                        "orgID": "",
                        "packageID": "",
                        "token": "",
                        loginName: 'admin',
                        password: 'admin',
                    }}
                    enableReinitialize={true}
                    onSubmit={async values => {
                        submitLogin(values);
                    }}
                >

                    {({ handleChange, handleSubmit, values, errors }) => (
                        <View >
                            <KeyboardAwareScrollView
                                contentContainerStyle={{ flex: 1 }}
                                showsVerticalScrollIndicator={false}>
                                <View style={styles.headerContainer}>
                                    <Text style={styles.loginText}>{'Login'}</Text>
                                </View>
                                {/* <View style={{ height: hp("2"), alignItems: 'center', margin: hp("5"), }}>
                                        <Image source={Images.PROFILE} style={{ width: wp("30"), height: hp("15"), borderRadius: 100 }}></Image>
                                    </View> */}
                                <View style={styles.logoContainer}>
                                    <Image
                                        source={{ uri: 'https://www.bootdey.com/img/Content/avatar/avatar5.png' }}
                                        style={styles.logo}
                                    />
                                </View>
                                {/* <View style={styles.formContainer}>

                                        <CustomInputText
                                            label="Username"
                                            placeholder={'Please Your Enter Username'}
                                            value={values.loginName}
                                            error={errors['loginName']}
                                            onChangeText={(value: any) => {
                                                handleChange('loginName')(value);
                                            }}
                                        />


                                        <CustomInputText
                                            label="Password"
                                            placeholder={'Please Your Enter Password'}
                                            value={values.password}
                                            error={errors['password']}
                                            secureTextEntry={true}
                                            onChangeText={(value: any) => {
                                                handleChange('password')(value);
                                            }}
                                        />

                                        <Button
                                            style={styles.loginBtn}
                                            size="lg"
                                            isLoading={loading}
                                            onPress={() => {
                                                handleSubmit();
                                            }}>
                                            Login
                                        </Button>

                                    </View> */}
                                <View style={styles.card}>
                                <Text style={[styles.errorStyle,{color:'black'}]}>{'Username'}</Text>
                                    <View style={styles.inputContainer}>
                                        <TextInput
                                            style={styles.input}
                                            placeholder={'Please Enter Username'}
                                            value={values.loginName}
                                            // error={errors['loginName']}
                                            onChangeText={(value: any) => {
                                                handleChange('loginName')(value);
                                            }}
                                        />
                                    </View>
                                        <Text style={styles.errorStyle}>{errors['loginName']}</Text>
                                
                                <Text style={[styles.errorStyle,{color:'black'}]}>{'Password'}</Text>
                                    
                                    <View style={styles.inputContainer}>
                                        <TextInput
                                            style={styles.input}
                                            placeholder={'Please enter password'}
                                            value={values.password}
                                            secureTextEntry={true}
                                            onChangeText={(value: any) => {
                                                handleChange('password')(value);
                                            }}
                                        />
                                    </View>
                                    <Text style={styles.errorStyle}>{errors['password']}</Text>
                                    <Button
                                            style={styles.button}
                                            size="lg"
                                            isLoading={loading}
                                            onPress={() => {
                                                handleSubmit();
                                            }}>
                                            Login
                                        </Button>
                                    {/* <TouchableOpacity style={styles.button} >
                                        <Text style={styles.buttonText}>Log In</Text>
                                    </TouchableOpacity> */}
                                </View>
                                <View style={styles.deskBox1}>

                                    <TouchableOpacity
                                        onPress={() => {
                                            navigation.navigate('AddInstituteUser');
                                        }}>
                                        <Text style={{
                                            textDecorationLine: 'underline',
                                            color: '#000000',
                                            alignSelf: 'center',
                                            paddingTop: 20
                                        }}>Add Institute-User</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => {
                                            props.navigation.navigate('AddInstituteUser', true)
                                        }}>
                                        <Text style={{
                                            textDecorationLine: 'underline',
                                            color: '#000000',
                                            alignSelf: 'center',
                                            paddingTop: 20
                                        }}>Activate Institute-User</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.deskBox1}>

                                    <TouchableOpacity
                                        onPress={() => {
                                            props.navigation.navigate('AddCandidate')
                                        }}>
                                        <Text style={{
                                            textDecorationLine: 'underline',
                                            color: '#000000',
                                            alignSelf: 'center',
                                            paddingTop: 0
                                        }}>Register Candidate</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => {
                                            props.navigation.navigate('AddCandidate', true)
                                        }}>
                                        <Text style={{
                                            textDecorationLine: 'underline',
                                            color: '#000000',
                                            alignSelf: 'center',
                                            paddingTop: 0
                                        }}>Activate Candidate</Text>
                                    </TouchableOpacity>
                                </View>
                            </KeyboardAwareScrollView>
                        </View>
                    )}
                </Formik>
            </ScrollView >
        </>
    );
};

export default Login;

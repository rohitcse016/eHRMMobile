/**
 * Sample React Native Razorpay
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import type { Node } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import RazorpayCheckout from 'react-native-razorpay';
import { RootState } from '../../redux/store';
import { axiosRequest } from '../../utils/ApiRequest';
import Url from '../../utils/Url';
import Constant from '../../utils/Constant';
import { useNavigation } from '@react-navigation/native';

const Razorpay = () => {
  const route: any = useRoute();
  const isDarkMode = useColorScheme() === 'dark';
  const [isPaymentDone, setIsPaymentDone] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [paymentSuccessData, setPaymentSuccessData] = useState({});
  const [isBookingDone, setIsBookingDone] = useState<boolean>(false);
  const [bookingSuccess, setBookingSuccess] = useState<any>();
  const navigation: any = useNavigation();

  const { userData } = useSelector(
    (state: RootState) => state?.user,
  );
  const roomBooking = route?.params;

  useEffect(() => {
    makePayment();
  }, [])

  const makePayment = () => {
    var options = {
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: 'rzp_test_UmUIzzSAIdrrTV',
      amount: roomBooking?.totGrossAmt * 100,
      name: `${userData?.verifiedUser?.firstName} ${userData?.verifiedUser?.lastName}`,
      description: `Room name: ${roomBooking?.roomName}. booked in ${roomBooking?.instituteName}`,
      prefill: {
        name: userData?.verifiedUser?.firstName + " " + userData?.verifiedUser?.lastName,
        email: userData?.verifiedUser?.emailID,
        contact: '7275943351'//userData?.verifiedUser?.mobileNo,
      },
      theme: { color: 'blue' },
    };
    RazorpayCheckout.open(options)
      .then((data: any) => {
        setIsPaymentDone(true)
        setPaymentSuccessData(data);
        onSubmitBooking();
      })
      .catch((error: any) => {
        // handle failure
        // alert(`Error: ${error}`);
        navigation.goBack();

      });
  }

  const onSubmitBooking = async () => {
    const { verifiedUser }: any = userData;
    try {
      const staticParams = {
        type: 1,
        userID: verifiedUser?.userID,
        formID: -1,
        payType: 2,
      };

      setLoading(true);
      axiosRequest(Url.ADD_BOOK_BILL, Constant.API_REQUEST_METHOD.POST, { ...roomBooking, ...staticParams }).then(response => {
        setLoading(false)
        console.log('onSubmitBooking');
        console.log(JSON.stringify(response, null, 1))

        if (response?.data.isSuccess) {

          setLoading(false)
          if (response?.data.isSuccess === "True") {
            const details = response?.data;
            setBookingSuccess(details);
            setIsBookingDone(true)
            return;
          }
        }
      })
      // const msg = await requestAddBooking({ ...roomBooking, ...staticParams });

    } catch (error) {
      setLoading(false)
      console.log({ error });
      alert(`please try again`);
      // message.error();
    }
  };

  return (

    <View
      style={{
        flex: 1,
        justifyContent: 'center'
      }}>
      <View style={{
        alignContent: 'center',
        alignItems: 'center',
      }}>
        {isBookingDone ?
          <>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: 'green',
                padding: 10
              }}
            >{`Order Number: ${bookingSuccess?.bookingBillID} ${bookingSuccess?.msg}`}</Text>
            <Button
              title={'Okay'}
              onPress={() => {
                navigation.pop(1);
                navigation.navigate('Dashboard1');
              }}
            />
          </> : null}
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Razorpay;
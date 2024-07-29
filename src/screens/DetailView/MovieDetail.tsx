import { wp, hp } from '../../utils/Responsive';
import * as Progress from 'react-native-progress';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
  Image,
  Alert,
  Modal,
  Pressable,
  Linking,
} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import Colors from '../../utils/Colors';
import { BackButton } from '../../components/BackButton';
import { Rating, AirbnbRating } from 'react-native-ratings';
import CustomContainer from '../../components/boxes/CustomContainer';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import React, { useEffect, useState } from 'react';
import { axiosRequest } from '../../utils/ApiRequest';
import Constant from '../../utils/Constant';
import { DETAIL_OBJECT, LIST_OBJECT } from '../../types';
import Url from '../../utils/Url';
import { Button, Stack } from 'native-base';
import Images from '../../utils/Images';
import { openLocation } from '../../utils/Helper';
import { green100 } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import { BounceIn, spring } from 'react-native-reanimated';
import ImageView from 'react-native-image-viewing';
import ViewMoreText from 'react-native-view-more-text';

const MovieDetail: React.FC = () => {
  const route: any = useRoute();
  const { extraData }: any = route.params;
  const [loading, setLoading] = useState<boolean>(true);
  const navigation = useNavigation();
  const [details, setDetails] = useState<DETAIL_OBJECT>();
  const [imageSlider, setImageSlider] = useState<any>([]);
  const [imageSilderIndex, setImageSilderIndex] = useState<number>(0);
  const [visibleImage, setVisibleImage] = useState(false);
  console.log("mmmmmmmmmmm"+JSON.stringify(extraData));

  //console.log(image);
  const rate1 = Number(details?.ratingCnt1);
  const rate2 = Number(details?.ratingCnt2);
  const rate3 = Number(details?.ratingCnt3);
  const rate4 = Number(details?.ratingCnt4);
  const rate5 = Number(details?.ratingCnt5);
  const allRate = Number(details?.noOfReviews);

  const renderViewMore = (onPress: any) => {
    return (
      <Text onPress={onPress} style={{ fontWeight: '700', color: Colors.blue, marginBottom: hp("1"), marginLeft: wp("2"), }}>View more</Text>
    )
  }
  const renderViewLess = (onPress: any) => {
    return (
      <Text onPress={onPress} style={{ fontWeight: '700', color: Colors.blue, marginBottom: hp("1"), marginLeft: wp("2") }}>View less</Text>
    )
  }
  const progressBar = [
    {
      id: 5,
      totalReview: allRate,
      r: Number(allRate) == 0 ? 0 : Number(rate5 / allRate),
    },
    {
      id: 4,
      totalReview: allRate,
      r: Number(allRate) == 0 ? 0 : Number(rate4 / allRate),
    },
    {
      id: 3,
      totalReview: allRate,
      r: Number(allRate) == 0 ? 0 : Number(rate3 / allRate),
    },
    {
      id: 2,
      totalReview: allRate,
      r: Number(allRate) == 0 ? 0 : Number(rate2 / allRate),
    },
    {
      id: 1,
      totalReview: allRate,
      r: Number(allRate) == 0 ? 0 : Number(rate1 / allRate),
    },
  ];
  const citizenEngagement = [
    {
      id: 1,
      name: 'Facebook ',
      icon: 'facebook',
      url: details?.faceBook,
    },
    {
      id: 2,
      name: 'Twitter',
      icon: 'twitter',
      url: details?.twitter,
    },
    {
      id: 3,
      name: 'Instagram',
      icon: 'instagram',
      url: details?.instagram,
    },
    {
      id: 4,
      name: 'Website',
      icon: 'wikipedia-w',
      url: details?.website,
    },
  ];

  useEffect(() => {
    //getDetails();
  }, []);

  // why you used here
  const onWebService = (data: any) => {
    navigation.navigate('MyWeb', data);
  };
  const getDetails = () => {
    const imgindex = 0;
    const params = {
      appCompID: appCompID,
      userID: -1,
      formID: -1,
      type: 1,
    };
    setLoading(true);
    axiosRequest(Url.GET_DETAIL, Constant.API_REQUEST_METHOD.GET, params)
      .then(res => {
        const { data } = res;
        setDetails(data[0]);
        // why you added there. I can be call directly from the details state
        let slider: string[] = [];
        slider = data[0].lstAppCompImageRespDTO.map((item: any) => ({
          uri: `data:image/png;base64,${item.galleryImage}`,
        }));
        setImageSlider(slider);
        // details?.lstAppCompImageRespDTO.map(item=>item.galleryImage)

        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
      });
  };

  const Header = () => {
    return (
      <View style={styles.header}>
        <ImageBackground
          style={styles.headerBG}
          resizeMode="cover"
          imageStyle={{ opacity: 0.7 }}
          source={extraData!='' ? { uri: extraData.images.poster["1"].medium.film_image } : Images.DETAILS_BG_3}>
          <View style={styles.header1}>
            <BackButton />
          </View>
          <View style={styles.subHead}>
            <View style={styles.subHead1}>
              
              {/* <Text style={styles.text2} numberOfLines={2}>
                {extraData.synopsis_long}
              </Text> */}
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  };

  const onSelectedImage = (index: number) => {
    setImageSilderIndex(index);
    setVisibleImage(true);
  };

  const MapView = () => {
    return (
      <View style={styles.map}>
        <ImageBackground
          style={styles.mapBox}
          resizeMode="cover"
          imageStyle={{ opacity: 0.7 }}
          source={Images.MAP}>
          <TouchableOpacity
            style={styles.map1}
            onPress={() => openLocation(details.latitude, details.longitude)}>
            <Text style={styles.map2}>{'View Location in Map >>>'}</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  };

  const ImageGallery = () => {
    return (
      <View>
        {imageSlider.length > 0 && (
          <ImageView
            images={imageSlider}
            imageIndex={imageSilderIndex}
            visible={visibleImage}
            animationType={'fade'}
            onRequestClose={() => setVisibleImage(false)}
          />
        )}
      </View>
    );
  };
  const reviewListView = () => {
    navigation.navigate('reviewList',  appCompID );
  };
  const AddressAndDetail = () => {
    return (
      <View style={styles.back}>
        <ViewMoreText
          numberOfLines={2}
          renderViewMore={renderViewMore}
          renderViewLess={renderViewLess}
        >
          <View style={{ width: wp("95"), }}>
            <View style={{ flexDirection: 'row', marginTop: hp("0.5") }}>
              <View style={{ flexDirection: 'row', marginLeft: wp("2"), marginTop: hp("0.025") }}><Entypo name="location" size={15} color={'black'} />
                <Text style={{ fontWeight: '700', color: 'black', marginTop: hp("0.025") }}>{`   `}Address:-</Text></View>
            </View>
            <Text style={{ textAlign: 'justify', width: wp("95"), marginLeft: wp('1'), paddingHorizontal: wp("2"), }}>{`${details?.compAddress}`}</Text>
          </View>
          <View style={{ flexDirection: 'row', width: wp("95") }}>
            <Text style={{ marginLeft: wp('2') }}>State:-{details?.stateName}</Text>
            <Text style={{ marginLeft: wp('2') }}>District:-{details?.districtName}</Text>
          </View>
          <View style={{ flexDirection: 'row', width: wp("95") }}>
            <Text style={{ marginLeft: wp('2') }}>
              Area name:-{details?.areaName}
            </Text>
            <Text style={{ marginLeft: wp('2') }}>
              Landmark:-{details?.landMark}
            </Text>
          </View>
        </ViewMoreText>
      </View>
    );
  };
  const ImageSilderView = () => {
    return (
      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {imageSlider.map((item: any, index: number) => {
            return (
              <TouchableOpacity
                key={`imgsl${index}`}
                onPress={() => onSelectedImage(index)}>
                <View style={styles.imageListView}>
                  <View style={styles.imageContainer3}>
                    <Image
                      source={{ uri: item.uri }}
                      style={styles.imageList}></Image>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  };
  const ContactAndTime = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
      <View style={{ flexDirection: 'column' }}>
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View><Pressable style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <FontAwesome name="close" color='white' size={12}></FontAwesome>
              </Pressable></View>
              <View style={styles.modalView}>
                <TouchableOpacity onPress={() => { Linking.openURL(`tel:${details?.contact1}`); }}><Text style={styles.modalText}>{details?.contact1}</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => { Linking.openURL(`tel:${details?.contact2}`); }}><Text style={styles.modalText}>{details?.contact2}</Text></TouchableOpacity>

              </View>
            </View>
          </Modal>
        </View>
        <View style={{ flexDirection: 'row', }}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <View style={styles.card3}>
              <Text>
                <Feather name="phone-call" size={15} color={'#939393'} />
                {details?.contact1}
              </Text>
              <Text>
                <Feather name="phone-call" size={15} color={'#939393'} />
                {details?.contact2}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.card1}>
              <Text style={{ textAlign: 'center' }}>
                <Feather name="clock" size={15} color={'#939393'} />
                {details?.openingTime} - {details?.closingTime}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const Content = () => {
    console.log('rating==' + details?.overAllRating);
    return (
      <>
        <View style={styles.head1}>
          
          <View style={styles.card}>
          <Text style={{fontWeight:'bold',fontSize:20,paddingHorizontal:wp('2'),color:'black'}}>{extraData.film_name}</Text>
            <View style={styles.deskBox}>
            <Text style={styles.head2}>{"Release Date :"}</Text>
              <Text style={{paddingLeft:10,fontSize:18,textAlignVertical:'center'}}>{extraData.release_dates[0].release_date}</Text>
            </View>
            <View style={styles.card2}>
            <Text style={styles.head2}>{`About The Movie`}</Text>
            </View>
            <Text style={[styles.head3,{fontSize:14}]}>
              {`${extraData.synopsis_long}`}
            </Text>
          </View>
          {/* <View style={{ flexDirection: 'row', marginTop: hp("-4") }}>
            {citizenEngagement.map(item => {
              return (
                <View
                  style={
                    item.id == 1
                      ? styles.facebook
                      : item.id == 2
                        ? styles.twitter
                        : item.id == 3
                          ? styles.instagram
                          : styles.website
                  }>
                  <TouchableOpacity
                    onPress={() => onWebService(item)}
                    style={styles.servicesicon}>
                    <FontAwesome
                      name={item.icon}
                      size={20}
                      color={Colors.white}></FontAwesome>
                    <Text style={styles.icontext}>{item.name}</Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View> */}
          {/* <MapView /> */}
        </View>
      </>
    );
  };

  const FeedbackButton = () => {
    let webParams: Object = {
      url: "https://in.bookmyshow.com/explore/home/kanpur",
      name:"Book My Show"
  };
    return (
      <View style={{position:'absolute',bottom:5,width:wp('90'),alignSelf:'center'}}>
        <Button
          colorScheme={'blue'}
          size={'md'}
          rounded={'3xl'}
          onPress={() =>
            navigation.navigate('MyWeb',webParams)
          }>
          Book Now
        </Button>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
       <ScrollView contentContainerStyle={styles.scrollView}>
          <Header />
          <Content />
          {/* <ImageSilderView />
           */}
        </ScrollView>
        <FeedbackButton />
      {/* 
      <ImageGallery /> */}
    </SafeAreaView>
  );
};

export default MovieDetail;

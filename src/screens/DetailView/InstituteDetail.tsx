import { wp, hp } from '../../utils/Responsive';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import {
    SafeAreaView,
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
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import Colors from '../../utils/Colors';
import { BackButton } from '../../components/BackButton';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import React, { useEffect, useState } from 'react';
import Constant from '../../utils/Constant';
import { Button } from 'native-base';
import Images from '../../utils/Images';
import { openLocation } from '../../utils/Helper';
import ImageView from 'react-native-image-viewing';
import ViewMoreText from 'react-native-view-more-text';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import { axiosRequest } from '../../utils/ApiRequest';

const InstituteDetailView: React.FC = (props) => {
    const route: any = useRoute();
    const { instituteID } = route.params;
    const [loading, setLoading] = useState<boolean>(true);
    const navigation = useNavigation();
    const [details, setDetails] = useState<any>();
    const [imageSlider, setImageSlider] = useState<any>([]);
    const [imageSilderIndex, setImageSilderIndex] = useState<number>(0);
    const [visibleImage, setVisibleImage] = useState(false);
    const { userData } = useSelector(
        (state: RootState) => state.user,
    );



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

        getDetails();
    }, []);

    // why you used here
    const onWebService = (data: any) => {
        navigation.navigate('MyWeb', data);
    };
    const getDetails = async () => {
        try {
            const params = {
                "instituteID": instituteID ? instituteID : "1",
                "roomID": "-1",
                "userID": "-1",
                "formID": "-1",
                "type": "1",
                "fromdate": new Date().toISOString(),
                "todate": new Date().toISOString(),
                "slotID": "-1",
            };
            axiosRequest("/Institute/GetinstituteDetail", Constant.API_REQUEST_METHOD.POST,
                params).then(res => {
                    const { data } = res;
                    // console.log({data:data.result})
                    // console.log(res.data)
                    setDetails(res)
                    let slider: string[] = [];
                    slider = data?.result.lstInstittueImageRespDTO.map((item: any) => ({
                        uri: `${item.instituteImage}`,
                    }));
                    setImageSlider(slider);
                })
            setLoading(true)
            setLoading(false)
            console.log({ details: details })
        } catch (error) {
            setLoading(false)
            console.log({ error });
            // message.error('Please try again');
        }
    };

    const Header = () => {
        console.log({ details: details })
        return (
            <View style={styles.header}>
                <ImageBackground
                    style={styles.headerBG}
                    resizeMode="cover"
                    imageStyle={{ opacity: 0.7 }}
                    source={imageSlider.length > 0 ? { uri: imageSlider[0].uri } : Images.DETAILS_BG_3}>
                    <View style={styles.header1}>
                        <BackButton />
                    </View>
                    <View style={styles.subHead}>
                        <View style={styles.subHead1}>
                            <Text style={styles.text1}>{details?.instituteName}</Text>
                            {/* <Text style={styles.text2} numberOfLines={2}>
                {details?.compAddress}
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
        navigation.navigate('reviewList', appCompID);
    };
    const ImageSilderView = () => {
        console.log(imageSlider)
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

    const Content = () => {
        // console.log('rating==' + details?.overAllRating);
        return (
            <>
                <View style={styles.head1}>
                    <View style={{ flexDirection: 'row', marginTop: hp("-4") }}>
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
                    </View>
                    <MapView />
                </View>
            </>
        );
    };

    const FeedbackButton = () => {
        return (
            <View style={styles.feedback}>
                <Button
                    colorScheme={'blue'}
                    size={'md'}
                    rounded={'3xl'}
                    onPress={() =>
                        navigation.navigate('FeedbackForm', appCompID)
                    }>
                    Feedback
                </Button>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            {loading ? (
                <ActivityIndicator size={'large'} />
            ) : (
                <ScrollView contentContainerStyle={styles.scrollView}>
                    <Header />
                    <ImageSilderView />
                    <Content />
                </ScrollView>
            )}
            <FeedbackButton />
            <ImageGallery />
        </SafeAreaView>
    );
};

export default InstituteDetailView;

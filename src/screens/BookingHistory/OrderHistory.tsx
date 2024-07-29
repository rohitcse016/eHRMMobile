import { Accordion, Button, Icon } from "native-base";
import React, { memo, ReactElement, useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, ImageBackground, SafeAreaView, StyleSheet, TextInput, View, Text, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useRoute } from '@react-navigation/native';
import ActionBar from "../../components/ActionBar";
import Constant from "../../utils/Constant";
import Url from "../../utils/Url";

import { LIST_BG, LIST_OBJECT } from "../../types";
import { AccordionItemContext } from "native-base/lib/typescript/components/composites/Accordion";
import { Value, color } from "react-native-reanimated";
import { TouchableOpacity } from "react-native-gesture-handler";
import { hp, wp } from "../../utils/Responsive";
import i18n from "../../utils/i18n";
import Colors from "../../utils/Colors";
import AppStyleConstant from "../../utils/AppStyleConstant";
import { useSelector } from "react-redux";
import useThemedStyles from "../../config/theme/hooks/useThemedStyles";
import useTheme from "../../config/theme/hooks/useTheme";
import { RootState } from "../../redux/store";
import { convertDate } from "../../utils/common/Date";
import BankDetailsCard from "../../components/card/BankDetailsCard";
import { axiosRequest } from "../../utils/ApiRequest";
import moment from "moment";

const OrderHistory: React.FC = () => {
    const [data, setData] = useState<LIST_OBJECT[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const navigation = useNavigation();
    const route: any = useRoute();
    const styles = useThemedStyles(style);
    const theme = useTheme();
    const { userData } = useSelector(
        (state: RootState) => state?.user,
    );
    let [pg, setPg] = useState(1);

    useEffect(() => {
        getOrderHistory();
    }, []);

    const getOrderHistory = () => {
        setLoading(true)
        const { verifiedUser }: any = userData;
        const params = {
            candidateID: verifiedUser?.userID,
            bookingBillID: '-1',
            roomID: '-1',
            seatID: 0,
            slotID: 0,
            rateTypeID: 0,
            fromDate: convertDate(new Date()),
            toDate: convertDate(new Date()),
            userID: '-1',
            formID: 0,
            type: 1
        }
        console.log(params)
        setLoading(true)
        axiosRequest(Url.ORDER_HISTORY, Constant.API_REQUEST_METHOD.POST, params).then(res => {
            setData(res?.data?.result)
            setLoading(false);
        }).catch(err => {
            setLoading(false);
        });
    }

    const onPress = (data: any): void => {
        navigation.navigate('OrderDetails', data)
    }

    const renderItemCard = ({ item, index }: any): ReactElement => {
        return <TouchableOpacity
            style={styles.container}
            onPress={() => onPress(item)}
        >
            <View style={[styles.card, styles.elevation]}>
                <View style={{ paddingHorizontal: 10 }}>
                    <View style={styles.detail}>
                        <View style={styles.descBox}>
                            <Text
                                style={[styles.head]} >
                                {item?.instituteName}
                            </Text>
                        </View>
                        <View style={styles.descBox}>
                            <Text style={[styles.address, styles.textValue]} >
                                {`Room: ${item?.roomName} Seat: ${item?.seatID} [${item?.roomTypeName}]`}
                            </Text>
                        </View>
                        <View style={styles.descBox}>

                            <Text style={[styles.address, styles.textValue]} >
                                {`Booking:${moment(item?.entryDate).format("DD-MMM-YYYY")}`}
                            </Text>
                        </View>
                        <View style={styles.descBox}>
                            <Text numberOfLines={2} style={[styles.address, styles.textValue]} >
                                {`From: ${moment(item?.fromDate).format("DD-MMM-YYYY")} To: ${moment(item?.toDate).format("DD-MMM-YYYY")}`}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    }


    const onRefresh = () => {
        pg = 1;
        getOrderHistory();
    }
    const onLoadMore = (value: number): void => {
        pg = ++value;
        setPg(pg);
        if (data.length >= 25)
            getOrderHistory();
    }

    const EmptyListMessage = (): ReactElement => {
        return (
            // Flat List Item
            <Text
                style={styles.emptyListStyle}
                onPress={() => getOrderHistory()}>
                {''}
            </Text>
        );
    };

    const renderLoader = () => {
        return (
            (data.length) < 25 ? null :
                <TouchableOpacity
                    onPress={() => onLoadMore(pg)}
                    style={{ paddingTop: 10, alignSelf: 'flex-end', flexDirection: 'row', marginRight: wp('4'), elevation: 10 }}>
                    <FontAwesome name='chevron-down' size={18} color={Colors.blue}></FontAwesome>
                    <Text style={{ paddingHorizontal: 5, fontWeight: '700', color: Colors.blue, fontSize: 16 }}>{'More'}</Text>
                </TouchableOpacity>

        );
    };


    return (
        <>
            <View style={{ flex: 1 }}>
                <ActionBar
                    title={`Order History`}
                    search={true}
                    onCloseSearch={() => getOrderHistory()}
                />
                <FlatList
                    data={data}
                    renderItem={renderItemCard}
                    contentContainerStyle={{
                        paddingBottom: 30
                    }}
                    refreshing={loading}
                    onRefresh={() => onRefresh()}
                    ListEmptyComponent={EmptyListMessage}
                    // ListFooterComponent={renderLoader}
                    // onEndReached={renderLoader}
                    onEndReachedThreshold={0}
                //onEndReachedThreshold={0}
                />
            </View>
        </>
    )
}



const style = (theme: any) => StyleSheet.create({
    textValue: {
        fontSize: 14,
        paddingBottom: 4,
    },
    emptyListStyle: {
        padding: 10,
        fontSize: 18,
        textAlign: 'center',
    },
    address: {
        flex: 1, flexWrap: 'wrap'
    },
    detail: {
        justifyContent: 'center',
        paddingVertical: hp("1")
    },
    bank1: {
        flex: 1, justifyContent: 'center',
    },
    bank: {
        flex: 1,
        flexDirection: 'row',
    },
    container: {
        height: hp("19"),
        marginHorizontal: wp("4"),
        marginTop: hp("2"),
    },

    head: {
        fontWeight: '700',
        fontSize: 18,
        color: theme.colors.TEXT,
    },

    textHead: {
        width: wp("19"),
        fontWeight: '700',
        fontSize: 14,
        color: theme.colors.TEXT
    },

    textValue: {
        fontSize: 13,
        color: theme.colors.TEXT_SECONDARY

        //paddingBottom: hp("0.5"),
    },

    descBox: {
        flexDirection: 'row',
        marginTop: hp("0.6"),
        marginHorizontal: wp("1"),
    },
    card: {
        height: hp("18"),
        backgroundColor: theme.colors.CARD_BACKGROUND,
        borderRadius: 8,
        width: '100%',
        marginVertical: hp("0.8"),
    },
    elevation: {
        elevation: 20,
        shadowColor: Colors.darkgrey,
    },

    image: {
        width: 100,
        height: 100,
    },
    imageContainer: {
        width: wp("24"),
        height: hp("12"),
        borderRadius: 200,
        // borderWidth: 0.1,
        overflow: 'hidden',
        justifyContent: 'center',
        marginLeft: wp('2'),
        marginTop: hp("1"),
    }
})

export default OrderHistory;
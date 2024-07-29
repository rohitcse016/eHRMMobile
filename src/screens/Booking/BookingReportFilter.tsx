import React, { useEffect, useState } from 'react';
import ReactNativeModal from 'react-native-modal';
import { BottomSection, Container, Line } from './../components/widgets/BottomModel/styledComponents';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Modal from "react-native-modal";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { color } from 'react-native-reanimated';
import CheckBox from '@react-native-community/checkbox';
import { Rating } from 'react-native-ratings';
import { RadioButton } from 'react-native-paper';
import { Select, Slider, useTheme } from 'native-base';
import { useSelector } from 'react-redux';
import { Formik } from 'formik';
import DatePicker from 'react-native-date-picker';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import CustomDatePicker from '../../components/widgets/CustomDatePicker';
import CustomDropDown from '../../components/widgets/CustomDropDown';
import useThemedStyles from '../../config/theme/hooks/useThemedStyles';
import { RootState } from '../../redux/store';
import Constant from '../../utils/Constant';
import { hp, wp } from '../../utils/Responsive';
import { axiosRequest } from '../../utils/ApiRequest';
import Url from '../../utils/Url';


const BookingReportFilterOption = (props: any) => {


    const styles = useThemedStyles(style);
    const theme = useTheme();
    const [visible, setVisible] = useState(false);
    var [removeState, setRemoveState] = useState(1);
    const [open, setOpen] = useState<any>('checked');
    const [close, setClose] = useState(false);
    const [options, setOptions] = useState(1);
    var [selectedOptions, setSelectedOptions] = useState<any>([]);
    var [filterOptions, setfilterOptions] = useState<any>([]);
    var [allOptions, setAllOptions] = useState<any>([]);
    var [items, setItems] = useState<any>([]);
    const [roomType, setRoomType] = useState<any>([])
    const [selectedRoomType, setSelectedRoomType] = useState<any>(1)
    const { response, userData } = useSelector(
        (state: RootState) => state.user,
    );
    const [institute,setInstitute]=useState()
    const [selectedInstitute, setSelectedInstitute] = useState<any>()
    const [rateType,setRateType]=useState()
    const [selectedRateType, setSelectedRateType] = useState<any>()
    
    const [roomCapacityTo, setRoomCapacityTo] = useState<any>("1000")
    const [roomRateTo, setRoomRateTo] = useState<string>("5000")
    const [fromDate, setFromDate] = useState(new Date())
    const [toDate, setToDate] = useState(new Date())
    const [openfromDate, setOpenfromDate] = useState(false)
    const [opentoDate, setOpentoDate] = useState(false)
    // const [onDrop, setOndrop] = useState(false);
    const makeFilterModalVisible = () => {
        // setSelectedOptions([])
        setVisible(!visible)
    }
    useEffect(() => {
        getRoomType();
        getRateType();
        institutelist();
        console.log(selectedRoomType)
    }, [])
    const getRoomType = async () => {
        axiosRequest(Url.GET_ROOM_TYPE, Constant.API_REQUEST_METHOD.POST, "",).then(res => {
            console.log(res.data)
           // setRoomType(res?.data)
            if (res.data.length > 0) {
                const dataMaskForDropdown = res?.data.map((item: any) => {
                  return { value: item.roomTypeID, name: item.roomTypeName }
                })
                setRoomType(dataMaskForDropdown)
              }
        })
       
    }

      const getRateType = async () => {
        axiosRequest(Url.GET_RATE_TYPE, Constant.API_REQUEST_METHOD.POST, "").then(res => {
        if (res.data.length > 0) {
          const dataMaskForDropdown = res?.data.map((item: any) => {
            return { value: item.rateTypeID, name: item.rateTypeName }
          })
          setRateType(dataMaskForDropdown)
        }
    })
      }
    const institutelist = async () => {
        const params = {
          instituteID: "-1",
          searchText: "",
          mobileNo: "",
          emailID: "",
          phoneNo: "",
          stateID: "-1",
          districtID: "-1",
          cityID: "-1",
          areaID: "-1",
          smallerESTDDate: new Date(),
          smallerThanRank: "0",
          greatorThanFaculty: "0",
          greatorThanStudent: "0",

          roomTypeID: "-1",
          roomCapacityfrom: "0",
          roomCapacityTo: "0",
          roomRateFrom: "0",
          roomRateTo: "0",
          userID: "-1",
          formID: "-1",
          type: "1",
           fromDate: "2022-09-29T07:22:52.579Z",
            toDate: new Date(),
            slotID: "-1",
        }

        axiosRequest(Url.GET_INST_LIST, Constant.API_REQUEST_METHOD.POST, params).then(res => {
             console.log(res.data.data)
            // setRoomType(res?.data)
            if (res?.data.data.institutelist2s.length > 0) {
                const dataMaskForDropdown = res?.data.data.institutelist2s.map((item: any) => {
                  console.log(item.instituteID)
                  return { value: item.instituteID, name: item.instituteName }
                })

                setInstitute(dataMaskForDropdown)
              }
        })
      
    
      }
    const applyFilter = (data: any) => {
        var filterItems = [];
        var rowId = 0;
        for (var i in selectedOptions) {
            var rowid: string = `${selectedOptions[i].id}`;
            items[i] = filterItems.push({ "rowID": ++rowId, "rowValue": rowid })
        }
        setItems(items)
        props.onChange(filterItems)
        setVisible(!visible)
    }
    const clearFilter = () => {
        var items = {roomCapacityTo:"1000",roomRateTo:"9999",roomTypeID:"-1"};
        props.onChange(items)
        setVisible(!visible)
    }
    const removeItem = (removeItem: any, itemIndex: number) => {
        const index = selectedOptions.indexOf(removeItem);
        if (index > -1) {
            selectedOptions.splice(index, 1);
            filterOptions.splice(index, 1);
            setRemoveState(--removeState)
        }
    }

    return (
        <>
            <TouchableOpacity
                style={{ position: 'absolute', top: hp('5'), left: wp('80') }}
                onPress={() => makeFilterModalVisible()}>
                <AntDesign name="filter" size={20} color={'white'} />
            </TouchableOpacity>
            <Modal
                style={{ justifyContent: 'flex-end' }}
                isVisible={visible}
                onBackButtonPress={() => makeFilterModalVisible()}
            // onBackdropPress={() => makeFilterModalVisible()}
            >
                <View style={[{
                    flexDirection: 'row', backgroundColor: 'white',
                    borderRadius: 8,
                    paddingHorizontal: 15,
                    alignItems: 'center'
                }]}>

                    <View style={styles.row}>
                        {removeState >= -1 && selectedOptions.map((item: any, index: number) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => removeItem(item, index)}
                                    style={[styles.category, { borderColor: options === item.id ? Colors.red : Colors.red }]}
                                >
                                    <Text style={[styles.subtitle, { color: options === item.id ? Colors.primary : Colors.greygrey }]}>{item.name}</Text>
                                    {<AntDesign name="close" size={20} color={Colors.red} />}
                                </TouchableOpacity>
                            )
                        })
                        }
                    </View>
                </View>
                <Formik
                    // validationSchema={validation}
                    initialValues={{
                        fromDate: new Date(),
                        toDate: new Date(),
                        instituteID: "-1",
                        rateTypeID: "-1",
                        roomTypeID: "-1",
                    }}
                    enableReinitialize={true}
                    onSubmit={async values => {
                        console.log('values ' +values)
                        props.onChange(values)
                        setVisible(!visible)
                        // submitFilter(values);
                    }}
                >

                    {({ handleChange, handleSubmit, values, errors }) => (
                        <View style={styles.item}>
                            <TouchableOpacity
                                style={{ position: 'absolute', top: hp('0'), right: wp('0') }}
                                onPress={() => makeFilterModalVisible()}>
                                <AntDesign name="close" size={28} color={'red'} />
                            </TouchableOpacity>
                            <Text style={styles.title}>{'Choose Filters'}</Text>

                            
                            <View style={styles.row}>
 
                                <CustomDatePicker
                                        label="From Date"
                                        placeholder={'Please Select From Date'}
                                        value={values.fromDate}
                                        name="fromDate"
                                        error={errors['fromDate']}
                                        onConfirm={(value: any) => {
                                            handleChange('fromDate')(value.toISOString());
                                            console.log(value)
                                        }}
                                    />
                            </View>
                            <View style={styles.row}>
 
                                <CustomDatePicker
                                        label="To Date"
                                        name="toDate"
                                        placeholder={'Please Select To Date'}
                                        value={values.toDate}
                                        error={errors['toDate']}
                                        onConfirm={(value: any) => {
                                            handleChange('toDate')(value.toISOString());
                                            console.log(value)
                                        }}
                                    />
                            </View>
                            <View style={styles.row}>
                            <CustomDropDown
                                        label="Institute"
                                        placeholder={'Please Select Institute'}
                                        data={institute}
                                        error={errors['instituteID']}
                                        onSelectItem={(value: any) => {
                                          //  handleChange('instituteID')(value.value);
                                           // setSelectedInstitute(value)
                                            handleChange('instituteID')(value.value);
                                        }}
                                    />
                            </View>
                            <View style={styles.row}>
                            <CustomDropDown
                                        label="Rate Type"
                                        placeholder={'Please Select Rate Type'}
                                        data={rateType}
                                        error={errors['rateTypeID']}
                                        onSelectItem={(value: any) => {
                                           
                                           // setSelectedRateType(value)
                                            handleChange('rateTypeID')(value.value);
                                        }}
                                    />
                            </View>
                            <View style={styles.row}>
                            <CustomDropDown
                                        label="Room Type"
                                        placeholder={'Please Select Room Type'}
                                        data={roomType}
                                        error={errors['roomTypeID']}
                                        onSelectItem={(value: any) => {
                                          
                                          //  setSelectedRoomType(value)
                                            handleChange('roomTypeID')(value.value.toString());
                                        }}
                                    />
                            </View>
                         
                            <View style={{ flexDirection: 'row', marginVertical: 10, alignSelf: 'center' }}>
                                <TouchableOpacity style={[styles.buttonStyle]}
                                    onPress={() => clearFilter()}
                                >
                                    <Text style={styles.buttonText}>
                                        {'Clear'}
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.buttonStyle]}
                                    onPress={() => handleSubmit()}
                                >
                                    <Text style={styles.buttonText}>
                                        {'Apply'}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    )}
                </Formik>
            </Modal>
        </>
    )
}
export default BookingReportFilterOption;

const style = (theme: any) => StyleSheet.create({

    buttonText: {
        fontSize: 18,
        paddingHorizontal: 15,
        fontWeight: '700',
        color: 'white',
        justifyContent: 'center'
    },

    buttonStyle: {
        height: 30,
        backgroundColor: '#5263B7',
        borderRadius: 8,
        marginHorizontal: wp('5'),
    },

    deskBox: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginHorizontal: 10
    },
    listText: {
        fontSize: 18,
        paddingHorizontal: 10,
        fontWeight: '500',
        color: 'black',

    },
    item: {
        // height: hp('40'),
        backgroundColor: 'white',
        marginVertical: 10,
        borderRadius: 8,
        paddingHorizontal: 15
    },
    title: {
        color: Colors.blue,
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 5,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width:'100%',
        display: 'flex'
    },
    subtitle: {
        color: Colors.greygrey,
        fontWeight: '700',
        fontSize: 15,
    },
    category: {
        margin: 3,
        borderRadius: 15,
        borderWidth: 2,
        padding: 5,
        paddingHorizontal: 10,
        flexDirection: 'row', elevation: 5, backgroundColor: 'white'
    },
    rowFilter: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
    },
    line: {
        borderTopColor: 'black',
        borderTopWidth: 0.6,
        marginVertical: 2,
    },
})
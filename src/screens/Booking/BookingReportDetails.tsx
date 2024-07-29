import { Accordion, Icon, useTheme } from "native-base";
import React, { memo, ReactElement, useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, ImageBackground, SafeAreaView,Button, StyleSheet, TextInput, View, Text, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useRoute } from '@react-navigation/native';

import { TouchableOpacity } from "react-native-gesture-handler";
import { hp, wp } from "../utils/Responsive";
import i18n from "../utils/i18n";
import Colors from "../utils/Colors";
import BookingReportFilterOption from "./BookingReportFilter";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import { DataTable } from 'react-native-paper';
import { color } from "react-native-reanimated";
import { colors } from "../config/theme/theme";
import { isAnyOf } from "@reduxjs/toolkit";
import BankDetailsCard from "../../components/card/BankDetailsCard";
import { LIST_OBJECT, LIST_BG } from "../../types";
import Constant from "../../utils/Constant";
import ActionBar1 from "../../components/ActionBar1";
import useThemedStyles from "../../config/theme/hooks/useThemedStyles";
import { axiosRequest } from "../../utils/ApiRequest";

const BookingReportDetails: React.FC = (props) => {
    const [data, setData] = useState<LIST_OBJECT[]>([]);
    const [datatot, setDatatot] = useState<LIST_OBJECT[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const navigation = useNavigation();
    const route: any = useRoute();
    //const { subCategoryName, categoryID, subCategoryID } = route.params.data.subItem;
    const backgroundList: LIST_BG = route.params.background;
    const [cinemaList, setCinemaList] = useState<any[]>([]);
    const styles = useThemedStyles(style);
    const theme = useTheme();
    const { response, userData } = useSelector(
        (state: RootState) => state.user,
    );
    const data1 = props.route.params
     let [pg, setPg] = useState(1);
     const [page, setPage] = React.useState<number>(0);
     const [numberOfItemsPerPageList] = React.useState([2, 3, 4, 10]);
     const [itemsPerPage, onItemsPerPageChange] = React.useState(
       numberOfItemsPerPageList[3]
     );
   
     const from = page * itemsPerPage;
     const to = Math.min((page + 1) * itemsPerPage, data.length);
    useEffect(() => {
        setData(data1.ReportDetailsData)
    }, []);

    const onView = async (record: any) => {
console.log(record);
        const params = {
          "candidateID": record,
          "uniqueNo": "",
          "emailID": "",
          "mobileNo": "",
          "dob": "",
          "panNo": "",
          "aadhaarNo": "",
          "genderID": "-1",
          "stateID": "-1",
          "districtID": "-1",
          "cityID": "-1",
          "areaID": "-1",
          "searchText": "",
          "userID": "-1",
          "formID": "-1",
          "type": "1"
        }
        axiosRequest(`/Candidate/GetCandidateList`, Constant.API_REQUEST_METHOD.POST, params, userData?.verifiedUser?.token).then(res => {
        
    
        console.log(res.data.data[0])
        props.navigation.navigate("ViewInstituteUser", res.data.data[0])
      
        })
      };
    
    
      const onViewInstitute = async (record: any) => {
        console.log(record);
    
        const params = {
          instituteID: record,
          searchText: "",
          mobileNo: "",
          emailID: "",
          phoneNo: "",
          stateID: "-1",
          districtID: "-1",
          cityID: "-1",
          areaID: "-1",
          smallerESTDDate: '2023-08-16T09:53:27.751Z',
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
        axiosRequest(`/Institute/GetInstituteList`, Constant.API_REQUEST_METHOD.POST, params).then(res => {
        
        console.log(res.data.data.institutelist2s[0])
        props.navigation.navigate("InstituteDetailView", res.data.data.institutelist2s[0])
        // setSelectedRows(msg.data.institutelist2s[0])
        // setOpenViewInstitute(true);
        })
      };
    const getBookingDetail = (searchText:string="",filters:any={fromDate:new Date(),toDate:new Date(),instituteID:"-1",roomTypeID:"-1",rateTypeID:"-1"}) => {
        setLoading(true)
        const params = {
            "fromDate": filters.fromDate,
            "toDate": filters.toDate,
             "instituteID": filters.instituteID?filters.instituteID:"-1",
             "finYearID": "-1",
             "roomTypeID": filters.roomTypeID? filters.roomTypeID+"":"-1",
             "rateTypeID":filters.rateTypeID ? filters.rateTypeID+"":"-1",
             "userID": "-1",
             "formID": "-1",
             "type": "1",
        }
        console.log(params)
        axiosRequest(`/Report/GetBookingReport`, Constant.API_REQUEST_METHOD.POST, params, userData?.verifiedUser?.token).then(res => {
            console.log(res?.data.data.bookDate);
            // console.log(JSON.stringify(res.data,null,1))
            
            setDatatot(res?.data?.data.totBookDate)
            setData(res?.data?.data.bookDate)
            setLoading(false);
            
        }).catch(err => {
            setLoading(false);
        });
    }
    const [expandedRows, setExpandedRows] = useState<number>(0);

    // State variable to keep track which row is currently expanded.
    const [expandState, setExpandState] = useState({});
  
    /**
     * This function gets called when show/hide link is clicked.
     */
    const handleEpandRow = ( payDate) => {
      //  console.log(payDate)
//       const currentExpandedRows = expandedRows;
//       const isRowExpanded = currentExpandedRows.includes(payDate);
 
//       let obj = {};
//       isRowExpanded ? (obj[payDate] = false) :  (obj[payDate] = true);
//       setExpandState(obj);
//   console.log(isRowExpanded)
      // If the row is expanded, we are here to hide it. Hence remove
      // it from the state variable. Otherwise add to it.
        //    const newExpandedRows = isRowExpanded ?
        //     currentExpandedRows.filter(payDate => payDate != payDate) :
        //     currentExpandedRows.concat(payDate);
        //     console.log(newExpandedRows)
          setExpandedRows(payDate);
    }
  

    const onPress = (data: any): void => {
        console.log('onPress');
        let params: Object = {
            extraData: data
        };
        navigation.navigate('InstituteDetailView', data)
    }

    const renderItemCard = ({ item, index }: any): ReactElement => {
        switch (subCategoryName) {

            case 'BANK':
                return <BankDetailsCard item={item} onPress={onPress} />;
            default:
                return <AccommodationCard item={item} onPress={onPress} />;
        }
    }

    

    const onSearch = (value: any): void => {
        console.log(value)
        console.log("hallo");
        if (value.length > 0) {
            getBookingDetail(value);
        } else {
            getBookingDetail();
        }
    }
    const onFilter = (filter: any): void => {

         console.log("filters " + JSON.stringify(filter))
         getBookingDetail("",filter);
    }

    const onRefresh = () => {
        pg = 1;
        getBookingDetail();
    }
    const onLoadMore = (value: number): void => {
        pg = ++value;
        setPg(pg);
        if (data.length >= 25)
        getBookingDetail();
    }

   
    return (
        <>
        
             <ImageBackground style={{ flex: 1 }} source={backgroundList.bg}>
             <ActionBar1
        title={data1.data.subItem.name}
        addButton={false}
        onAddVisible={() => props.navigation.navigate("AddCandidate", data1)}
      />

      <DataTable>
        <DataTable.Header>
        <DataTable.Title>Candidate Name</DataTable.Title>
          <DataTable.Title>Institute Name</DataTable.Title>
          <DataTable.Title >Room Name</DataTable.Title>
          <DataTable.Title >Actual Pay Amt.</DataTable.Title>
        </DataTable.Header>
        <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>

          {data?.map((item: any,index) => (
            <>
            {console.log(item)}
            <DataTable.Row onPress={()=>props.navigation.navigate("ViewInstituteUser", item)}
              key={item.payDate}>
                <DataTable.Cell onPress={() => onView(item.candidateID)}>
                { item.candName }

 
                       
                </DataTable.Cell>
                <DataTable.Cell onPress={() => onViewInstitute(item.instituteID)} > {item.instituteName} </DataTable.Cell>
              <DataTable.Cell >{item.roomName}</DataTable.Cell>
              <DataTable.Cell >{item.actualPayAmt}</DataTable.Cell>  
              {/* <DataTable.Cell >{item.totNetAmt}</DataTable.Cell>   */}
            </DataTable.Row>
            

          </>
          ))}
          
        </ScrollView>
      </DataTable>
            </ImageBackground> 
        </>
    )
}


const style = (theme: any) => StyleSheet.create({

    textValue: {
        fontSize: 14,
        paddingBottom: 4,
    },

    descBox: {
        flexDirection: 'row',
        marginTop: 5,
    },
    emptyListStyle: {
        padding: 10,
        fontSize: 18,
        textAlign: 'center',
    },
})

export default BookingReportDetails;
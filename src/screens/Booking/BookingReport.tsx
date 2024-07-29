import { Accordion, Button, Icon, useTheme } from "native-base";
import React, { memo, ReactElement, useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, ImageBackground, SafeAreaView, StyleSheet, TextInput, View, Text, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useRoute } from '@react-navigation/native';

import { TouchableOpacity } from "react-native-gesture-handler";

import BookingReportFilterOption from "./BookingReportFilter";
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
import { RootState } from "../../redux/store";
import { axiosRequest } from "../../utils/ApiRequest";

const BookingReport: React.FC = (props) => {
    const [data, setData] = useState<LIST_OBJECT[]>([]);
    const [datatot, setDatatot] = useState<LIST_OBJECT[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const navigation = useNavigation();
    const route: any = useRoute();
    const { subCategoryName, categoryID, subCategoryID } = route.params.data.subItem;
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
        getBookingDetail();
    }, []);

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
        axiosRequest(`/Report/GetBookingReport`, Constant.API_REQUEST_METHOD.POST, params).then(res => {
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
      <BookingReportFilterOption onChange={(value: any) => onFilter(value)} />
      <View style={{marginTop:20}}>
      <DataTable>
        <DataTable.Header style={styles.header}>
          <DataTable.Title style={styles.headerCell}>Pay Date</DataTable.Title>
          <DataTable.Title style={styles.headerCell}>Total Gross Amt</DataTable.Title>
          <DataTable.Title style={styles.headerCell}>Total NetAmt</DataTable.Title>
          <DataTable.Title style={styles.headerCell}>Total Actual PayAmt</DataTable.Title>
        </DataTable.Header>
        <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>

          {datatot?.slice(from, to).map((item: any,index) => (
            <>
            <DataTable.Row style={index % 2 === 0 ? styles.rowOdd : styles.rowEven} >
              <DataTable.Cell style={styles.cell}>{item.payDate}</DataTable.Cell>
              <DataTable.Cell style={styles.cell}>{item.totGrossAmt}</DataTable.Cell>
              <DataTable.Cell style={styles.cell}>{item.totNetAmt}</DataTable.Cell>  
              <DataTable.Cell style={styles.cell}>{item.totActualPayAmt}</DataTable.Cell>  
            </DataTable.Row>
           

          </>
          ))}
          {/* <DataTable.Pagination
            page={page}
            numberOfPages={Math.ceil(data.length / itemsPerPage)}
            onPageChange={(page) => setPage(page)}
            label={`${from + 1}-${to} of ${data.length}`}
            numberOfItemsPerPageList={numberOfItemsPerPageList}
            numberOfItemsPerPage={itemsPerPage}
            onItemsPerPageChange={onItemsPerPageChange}
            showFastPaginationControls
            selectPageDropdownLabel={'Rows per page'}
          /> */}
        </ScrollView>
      </DataTable>
      </View>
      <View style={styles.container}>
      <DataTable>
        <DataTable.Header style={styles.header}>
        <DataTable.Title style={styles.headerCell}>Action</DataTable.Title>
          <DataTable.Title style={styles.headerCell}>Pay Date</DataTable.Title>
          <DataTable.Title style={styles.headerCell}>Total Gross Amt</DataTable.Title>
          <DataTable.Title style={styles.headerCell}>Total NetAmt</DataTable.Title>
          <DataTable.Title style={styles.headerCell}>Total Actual PayAmt</DataTable.Title>
        </DataTable.Header>
        <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>

          {data?.map((item: any,index) => (
            <>

            <DataTable.Row onPress={()=>props.navigation.navigate("ViewInstituteUser", item)}
              key={item.payDate} style={index % 2 === 0 ? styles.rowOdd : styles.rowEven}>
                <DataTable.Cell style={styles.cell}>
                <Button
                        variant="link"
                        onPress={() => { 
                          data1['ReportDetailsData']=item.lstBookingbillListReport;
                          props.navigation.navigate("BookingReportDetails", data1)}}>
                        {
                           'Show'
                        }
                    </Button>
                </DataTable.Cell>
                <DataTable.Cell style={styles.cell}> {item.payDate} </DataTable.Cell>
              <DataTable.Cell style={styles.cell}>{item.totGrossAmt}</DataTable.Cell>
              <DataTable.Cell style={styles.cell}>{item.totNetAmt}</DataTable.Cell>  
              <DataTable.Cell style={styles.cell}>{item.totNetAmt}</DataTable.Cell>  
            </DataTable.Row>
            {/* <>
                { 

                console.log("expandedRows "+expandedRows)}

                {  expandedRows === 1  &&
                <View><Text>{'Create New Institute'}</Text>
                  </View>   
                }
                </>  */}

          </>
          ))}
          {/* <DataTable.Pagination
            page={page}
            numberOfPages={Math.ceil(data.length / itemsPerPage)}
            onPageChange={(page) => setPage(page)}
            label={`${from + 1}-${to} of ${data.length}`}
            numberOfItemsPerPageList={numberOfItemsPerPageList}
            numberOfItemsPerPage={itemsPerPage}
            onItemsPerPageChange={onItemsPerPageChange}
            showFastPaginationControls
            selectPageDropdownLabel={'Rows per page'}
          /> */}
        </ScrollView>
      </DataTable>
      </View>
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
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#f9f9f9', // Background color for the container
    },
    header: {
      backgroundColor: '#677ef0', // Header background color
    },
    headerCell: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
      color: 'white', // Header text color
      fontSize: 16,
    },
    rowOdd: {
      backgroundColor: '#f0f0f0', // Odd row background color
    },
    rowEven: {
      backgroundColor: '#e0e0e0', // Even row background color
    },
    cell: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 14,
      color: '#333', // Cell text color
    },
})


export default BookingReport;
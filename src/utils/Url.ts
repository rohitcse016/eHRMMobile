export default {

    HOST_URL: `http://103.12.1.132:8168/api/`,

    SIDE_MENU: `/Login/GetUserPermission`,
    
    REGISTRATION: `CategorySubCategory/AddUser`,
    LOGIN:'/Login/Login',
    ADD_USER: `CategorySubCategory/AddUser`,
    CHANGE_PASSWORD:`/Login/ChangePassword`,
    DASHBOARD_MENU: `CategorySubCategory/CategorySubCategoryDashboard`,

    GET_MARITAL:`/Common/GetMarital`,
    GET_STATE:`/Common/GetState?StateID=-1&UserID=-1&FormID=-1&Type=1`,
    GET_DISTRICT:`/Common/GetDistrict?UserID=-1&FormID=-1&Type=1&`,
    GET_AREA:`Common/GetArea?AreaID=-1&UserID=-1&FormID=-1&Type=1`,
    GET_CITY:`Common/GetCity?CityID=-1&ULBypeid=-1`,
    GET_BRANCH:`Common/GetBranch?BranchID=-1&IsActive=1&UserID=-1&FormID=-1&Type=1`,
    GET_GENDER:`Common/Getgender`,
    GET_RATE_TYPE:`Common/GetrateType?RateTypeID=-1&IsActive=-1&UserID=-1&FormID=-1&Type=1`,
    GET_ROOM_TYPE:`/Room/GetRoomType?RoomTypeID=-1&IsActive=1&UserID=-1&FormID=-1&Type=1`,
    GET_INST_DETAILS:`/Institute/GetinstituteDetail`,
    GET_INST_LIST:`/Institute/GetInstituteList`,
    GET_BOOK_BILL:`/Booking/Getgetbookbill`,
    
    GET_CANDIDATE_LIST:`/Candidate/GetCandidateList`,

    ADD_CANDIDATE_DOC:`/Candidate/AddCandidateDoc`,
    GET_CANDIDATE_DOC:`/Candidate/GetCandidateDoc`,

    ADD_INSTITUTE_USER:`Institute/AddInstituteUser`,
    ADD_CANDIDATE:`Institute/AddInstituteUser`,
    ADD_ROOM:`/Room/AddRoom`,
    ADD_BOOK_BILL:`/Booking/AddBookbill`,
    UPDATE_USER_PROFILE_IMAGE:`/Candidate/AddCandidateProfile`,
    ORDER_HISTORY:`/Booking/Getgetbookbill`
}


// userID=-1 ignore
// formID=-1 ignore
// type=1   ignore 1 for all
// searchText


// REGISTRATION API
// @Type		=>	1		=>		REGISTER NEW USER
// --				@Type		=>	2		=>		UPDATE OLD USER PROFILE
// --				@Type		=>	3		=>		ADD/UPDATE PROFILE IMAGE
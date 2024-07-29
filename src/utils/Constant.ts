import { Image } from "react-native";
import Images from "../utils/Images";
import Colors from "./Colors";

export default {

  // icon List
  // https://oblador.github.io/react-native-vector-icons/  md-search-circle-outline

  PRODUCTION: true,
  IS_DEBUGGER: false,
  LOADER_TEXT: 'Please Wait...',
  USER_NOT_REGISTERED_MSG: 'User is Not Register',
  STORAGE_NAME: {
    COMPANY: 'companyDetails',
    USER: 'userDetails',
    IS_SYNC_DONE: 'isSyncDone'
  },
  USER_DETAILS: {},
  API_REQUEST_METHOD: {
    GET: 'GET',
    POST: 'POST'
  },
  LANGUAGE: [
    { name: 'हिंदी', value: 'hi' },
    { name: 'English', value: 'en' }
  ],
  SETTING:[
    {
      id:"Theme",
      name:"Theme",
      icon:"tint"
    }
  ],
  MENU2: [
    // {
    //   "categoryID": 1,
    //   "categoryCode": "ENTERTAINMENT",
    //   "categoryName": "ENTERTAINMENT",
    //   "isActive": true,
    //   "iconName": 'headphones',
    //   "lstCategorySubCategoryResp": [
    //     {
    //       "subCategoryID": 1,
    //       "categoryID": 1,
    //       "categoryName": "ENTERTAINMENT",
    //       "subCategoryCode": "MOVIES THEATRE",
    //       "subCategoryName": "MOVIES THEATRE",
    //       "isActive": true
    //     },
    //     {
    //       "subCategoryID": 2,
    //       "categoryID": 1,
    //       "categoryName": "ENTERTAINMENT",
    //       "subCategoryCode": "THEATRE",
    //       "subCategoryName": "THEATRE",
    //       "isActive": true
    //     },
    //     {
    //       "subCategoryID": 3,
    //       "categoryID": 1,
    //       "categoryName": "ENTERTAINMENT",
    //       "subCategoryCode": "POOLS",
    //       "subCategoryName": "POOLS",
    //       "isActive": true
    //     },
    //     {
    //       "subCategoryID": 4,
    //       "categoryID": 1,
    //       "categoryName": "ENTERTAINMENT",
    //       "subCategoryCode": "PARKS",
    //       "subCategoryName": "PARKS",
    //       "isActive": true
    //     }
    //   ]
    // },
    // {
    //   "categoryID": 2,
    //   "categoryCode": "TRANSPORT AND MOBILITY",
    //   "categoryName": "TRANSPORT AND MOBILITY",
    //   "isActive": true,
    //   "iconName": 'truck',
    //   "lstCategorySubCategoryResp": [
    //     {
    //       "subCategoryID": 5,
    //       "categoryID": 2,
    //       "categoryName": "TRANSPORT AND MOBILITY",
    //       "subCategoryCode": "BUS STATION",
    //       "subCategoryName": "BUS STATION",
    //       "isActive": true
    //     },
    //     {
    //       "subCategoryID": 6,
    //       "categoryID": 2,
    //       "categoryName": "TRANSPORT AND MOBILITY",
    //       "subCategoryCode": "RAILWAY STATION",
    //       "subCategoryName": "RAILWAY STATION",
    //       "isActive": true
    //     },
    //     {
    //       "subCategoryID": 7,
    //       "categoryID": 2,
    //       "categoryName": "TRANSPORT AND MOBILITY",
    //       "subCategoryCode": "METRO",
    //       "subCategoryName": "METRO",
    //       "isActive": true
    //     },
    //     {
    //       "subCategoryID": 8,
    //       "categoryID": 2,
    //       "categoryName": "TRANSPORT AND MOBILITY",
    //       "subCategoryCode": "AIRPORT",
    //       "subCategoryName": "AIRPORT",
    //       "isActive": true
    //     },
    //     {
    //       "subCategoryID": 9,
    //       "categoryID": 2,
    //       "categoryName": "TRANSPORT AND MOBILITY",
    //       "subCategoryCode": "MOVER AND PACKERS",
    //       "subCategoryName": "MOVER AND PACKERS",
    //       "isActive": true
    //     }
    //   ]
    // },
    // {
    //   "categoryID": 3,
    //   "categoryCode": "MEDICAL",
    //   "categoryName": "MEDICAL",
    //   "isActive": true,
    //   "iconName": 'medkit',
    //   "lstCategorySubCategoryResp": [
    //     {
    //       "subCategoryID": 10,
    //       "categoryID": 3,
    //       "categoryName": "MEDICAL",
    //       "subCategoryCode": "HOSPITAL",
    //       "subCategoryName": "HOSPITAL",
    //       "isActive": true
    //     },
    //     {
    //       "subCategoryID": 11,
    //       "categoryID": 3,
    //       "categoryName": "MEDICAL",
    //       "subCategoryCode": "NURSING HOME",
    //       "subCategoryName": "NURSING HOME",
    //       "isActive": true
    //     },
    //     {
    //       "subCategoryID": 12,
    //       "categoryID": 3,
    //       "categoryName": "MEDICAL",
    //       "subCategoryCode": "CLINIC",
    //       "subCategoryName": "CLINIC",
    //       "isActive": true
    //     },
    //     {
    //       "subCategoryID": 13,
    //       "categoryID": 3,
    //       "categoryName": "MEDICAL",
    //       "subCategoryCode": "PRIVATE DOCTORS",
    //       "subCategoryName": "PRIVATE DOCTORS",
    //       "isActive": true
    //     },
    //     {
    //       "subCategoryID": 14,
    //       "categoryID": 3,
    //       "categoryName": "MEDICAL",
    //       "subCategoryCode": "MEDICAL STORE",
    //       "subCategoryName": "MEDICAL STORE",
    //       "isActive": true
    //     }
    //   ]
    // },
    // {
    //   "categoryID": 4,
    //   "categoryCode": "EDUCATION",
    //   "categoryName": "EDUCATION",
    //   "isActive": true,
    //   "iconName": 'building-o',
    //   "lstCategorySubCategoryResp": [
    //     {
    //       "subCategoryID": 15,
    //       "categoryID": 4,
    //       "categoryName": "EDUCATION",
    //       "subCategoryCode": "UNIVERSITIES",
    //       "subCategoryName": "UNIVERSITIES",
    //       "isActive": true
    //     },
    //     {
    //       "subCategoryID": 16,
    //       "categoryID": 4,
    //       "categoryName": "EDUCATION",
    //       "subCategoryCode": "SCHOOL",
    //       "subCategoryName": "SCHOOL",
    //       "isActive": true
    //     },
    //     {
    //       "subCategoryID": 17,
    //       "categoryID": 4,
    //       "categoryName": "EDUCATION",
    //       "subCategoryCode": "COACHING CENTRE",
    //       "subCategoryName": "COACHING CENTRE",
    //       "isActive": true
    //     },
    //     {
    //       "subCategoryID": 18,
    //       "categoryID": 4,
    //       "categoryName": "EDUCATION",
    //       "subCategoryCode": "PRIVATE TUTORS",
    //       "subCategoryName": "PRIVATE TUTORS",
    //       "isActive": true
    //     }
    //   ]
    // },
    {
      "categoryID": 5,
      "categoryCode": "HOSPITALITY",
      "categoryName": "HOSPITALITY",
      "isActive": true,
      "iconName": 'ambulance',
      "lstCategorySubCategoryResp": [
        {
          "subCategoryID": 19,
          "categoryID": 5,
          "categoryName": "HOSPITALITY",
          "subCategoryCode": "HOTEL",
          "subCategoryName": "HOTEL",
          "isActive": true
        },
        {
          "subCategoryID": 20,
          "categoryID": 5,
          "categoryName": "HOSPITALITY",
          "subCategoryCode": "RESTURANT",
          "subCategoryName": "RESTURANT",
          "isActive": true
        },
        {
          "subCategoryID": 21,
          "categoryID": 5,
          "categoryName": "HOSPITALITY",
          "subCategoryCode": "RESORT",
          "subCategoryName": "RESORT",
          "isActive": true
        },
        {
          "subCategoryID": 22,
          "categoryID": 5,
          "categoryName": "HOSPITALITY",
          "subCategoryCode": "HOSTEL",
          "subCategoryName": "HOSTEL",
          "isActive": true
        }
      ]
    },
    {
      "categoryID": 6,
      "categoryCode": "BANK",
      "categoryName": "BANK",
      "isActive": true,
      "iconName": 'briefcase',
      "lstCategorySubCategoryResp": [
        {
          "subCategoryID": 23,
          "categoryID": 6,
          "categoryName": "BANK",
          "subCategoryCode": "BANK",
          "subCategoryName": "BANK",
          "isActive": true
        },
        {
          "subCategoryID": 24,
          "categoryID": 6,
          "categoryName": "BANK",
          "subCategoryCode": "ATM",
          "subCategoryName": "ATM",
          "isActive": true
        }
      ]
    },
    {
      "categoryID": 7,
      "categoryCode": "COMPUTER CENTRE",
      "categoryName": "COMPUTER CENTRE",
      "isActive": true,
      "iconName": 'bath',
      "lstCategorySubCategoryResp": [
        {
          "subCategoryID": 25,
          "categoryID": 7,
          "categoryName": "COMPUTER CENTRE",
          "subCategoryCode": "CYBER CAFE",
          "subCategoryName": "CYBER CAFE",
          "isActive": true
        }
      ]
    },
    {
      "categoryID": 8,
      "categoryCode": "ADMINISTRATION",
      "categoryName": "ADMINISTRATION",
      "isActive": true,
      "iconName": 'mortar-board',
      "lstCategorySubCategoryResp": [
        {
          "subCategoryID": 26,
          "categoryID": 8,
          "categoryName": "ADMINISTRATION",
          "subCategoryCode": "CONSTITUENCY",
          "subCategoryName": "CONSTITUENCY",
          "isActive": true
        },
        {
          "subCategoryID": 27,
          "categoryID": 8,
          "categoryName": "ADMINISTRATION",
          "subCategoryCode": "JALKAL VIBHAG",
          "subCategoryName": "JALKAL VIBHAG",
          "isActive": true
        },
        {
          "subCategoryID": 28,
          "categoryID": 8,
          "categoryName": "ADMINISTRATION",
          "subCategoryCode": "TEHSIL",
          "subCategoryName": "TEHSIL",
          "isActive": true
        },
        {
          "subCategoryID": 29,
          "categoryID": 8,
          "categoryName": "ADMINISTRATION",
          "subCategoryCode": "VILLAGE AND PANCHAYAT",
          "subCategoryName": "VILLAGE AND PANCHAYAT",
          "isActive": true
        }
      ]
    },
    {
      "categoryID": 9,
      "categoryCode": "EVENTS",
      "categoryName": "EVENTS",
      "isActive": true,
      "iconName": 'pied-piper-alt',
      "lstCategorySubCategoryResp": [
        {
          "subCategoryID": 30,
          "categoryID": 9,
          "categoryName": "EVENTS",
          "subCategoryCode": "EVENT",
          "subCategoryName": "EVENT",
          "isActive": true
        }
      ]
    },
    {
      "categoryID": 10,
      "categoryCode": "COMMON SERVICE CENTRE",
      "categoryName": "COMMON SERVICE CENTRE",
      "isActive": true,
      "iconName": 'group',
      "lstCategorySubCategoryResp": [
        {
          "subCategoryID": 31,
          "categoryID": 10,
          "categoryName": "COMMON SERVICE CENTRE",
          "subCategoryCode": "COMMON SERVICE CENTRE",
          "subCategoryName": "COMMON SERVICE CENTRE",
          "isActive": true
        }
      ]
    },
    {
      "categoryID": 11,
      "categoryCode": "COMPLAINT",
      "categoryName": "COMPLAINT",
      "isActive": true,
      "iconName": 'comment-o',
      "lstCategorySubCategoryResp": [
        {
          "subCategoryID": 32,
          "categoryID": 11,
          "categoryName": "COMPLAINT",
          "subCategoryCode": "SWC",
          "subCategoryName": "SOLID WASTE COMPLAINT",
          "isActive": true
        },
        {
          "subCategoryID": 33,
          "categoryID": 11,
          "categoryName": "COMPLAINT",
          "subCategoryCode": "SLC",
          "subCategoryName": "STREET LIGHT COMPLAINT",
          "isActive": true
        },
        {
          "subCategoryID": 34,
          "categoryID": 11,
          "categoryName": "COMPLAINT",
          "subCategoryCode": "WSC",
          "subCategoryName": "WATER SUPPLY COMPLAINT",
          "isActive": true
        },
        {
          "subCategoryID": 35,
          "categoryID": 11,
          "categoryName": "COMPLAINT",
          "subCategoryCode": "RRC",
          "subCategoryName": "ROAD REPAIR COMPLAINT",
          "isActive": true
        },
        {
          "subCategoryID": 36,
          "categoryID": 11,
          "categoryName": "COMPLAINT",
          "subCategoryCode": "SAC",
          "subCategoryName": "STRAY ANIMAL COMPLAINT",
          "isActive": true
        },
        {
          "subCategoryID": 37,
          "categoryID": 11,
          "categoryName": "COMPLAINT",
          "subCategoryCode": "IHC",
          "subCategoryName": "ILLEGAL HOLDING COMPLAINT",
          "isActive": true
        },
        {
          "subCategoryID": 38,
          "categoryID": 11,
          "categoryName": "COMPLAINT",
          "subCategoryCode": "FAC",
          "subCategoryName": "FOOD ADULTERATION COMPLAINT",
          "isActive": true
        }
      ]
    },
    {
      "categoryID": 12,
      "categoryCode": "PUBLIC UTILITY",
      "categoryName": "PUBLIC UTILITY",
      "isActive": true,
      "iconName": 'users',
      "lstCategorySubCategoryResp": [
        {
          "subCategoryID": 40,
          "categoryID": 12,
          "categoryName": "PUBLIC UTILITY",
          "subCategoryCode": "Electricity",
          "subCategoryName": "Electricity",
          "isActive": true
        },
        {
          "subCategoryID": 41,
          "categoryID": 12,
          "categoryName": "PUBLIC UTILITY",
          "subCategoryCode": "Police Station",
          "subCategoryName": "Police Station",
          "isActive": true
        },
        {
          "subCategoryID": 42,
          "categoryID": 12,
          "categoryName": "PUBLIC UTILITY",
          "subCategoryCode": "Post Office",
          "subCategoryName": "Post Office",
          "isActive": true
        },
        {
          "subCategoryID": 43,
          "categoryID": 12,
          "categoryName": "PUBLIC UTILITY",
          "subCategoryCode": "Public Toilet FInder",
          "subCategoryName": "Public Toilet FInder",
          "isActive": true
        }
      ]
    }
  ],
  CITIZEN_SERVICES: [
    {
      id: 26,
      name: 'DashBoard.birthDeath',
      icon: 'registered',
      url: 'https://kmc.up.nic.in/Login_reg.aspx',
    },
    {
      id: 51,
      name: 'DashBoard.propertyTax',
      icon: 'file-text-o',
      url: 'https://knnpropertytax.com/index.php',
    },
    {
      id: 76,
      name: 'DashBoard.jakKalVibhag',
      icon: 'tint',
      url: 'http://jalkalkanpur.in/',
    },
    {
      id: 1,
      name: 'DashBoard.atalIncubation',
      icon: 'money',
      url: 'https://aim.gov.in/selected-atal.php ',
    },
    {
      id: 5,
      name: 'DashBoard.grievance',
      icon: 'comment',
      url: 'https://kmc.up.nic.in/Grievance_Home.htm',
    },
    {
      id: 6,
      name: 'DashBoard.eChallan',
      icon: 'truck',
      url: 'https://echallan.parivahan.gov.in/',
    },
    {
      id: 7,
      name: 'DashBoard.drivingLicense',
      icon: 'drivers-license-o',
      url: 'https://sarathi.parivahan.gov.in/sarathiservice/stateSelection.do',
    },
    {
      id: 8,
      name: 'DashBoard.vehicleRegistration',
      icon: 'file-picture-o',
      url: 'https://vahan.parivahan.gov.in/vahanservice/vahan/ui/appl_status/form_Know_Appl_Status.xhtml',
    },
  ],
  GOVERNMENT_SCHEMES: [
    {
      id: 1,
      name: 'DashBoard.PMAY',
      icon: 'truck',
      url: 'https://pmaymis.gov.in/open/check_aadhar_existence.aspx?comp=b',
    },
    {
      id: 2,
      name: 'DashBoard.ujjwala',
      icon: 'cubes',
      url: 'https://www.pmuy.gov.in/ujjwala2.html',
    },
    {
      id: 3,
      name: 'DashBoard.scholarship',
      icon: 'file-picture-o',
      url: 'http://samajkalyan.up.gov.in/en/page/application-forms',
    },
    {
      id: 4,
      name: 'DashBoard.PMJAY',
      icon: 'file-o',
      url: 'https://mera.pmjay.gov.in/search/login',
    },

    {
      id: 5,
      name: 'DashBoard.startup',
      icon: 'user',
      url: 'https://www.startupindia.gov.in/content/sih/en/registration.html',
    },
    {
      id: 6,
      name: 'DashBoard.jobRegistration',
      icon: 'gears',
      url: 'https://sewayojan.up.nic.in/IEP/Login.aspx?query=J',
    },
  ],
  FAMOUS_PLACES: [
    {
      image: Images.GREEN_PARK,
      name: 'DashBoard.greenPark',
      url: 'https://en.wikipedia.org/wiki/Green_Park_Stadium',
    },
    {
      image: Images.NANA_RAO_PARK,
      name: 'DashBoard.nanaRaoPark',
      url: 'https://en.wikipedia.org/wiki/Nana_Rao_Park',
    },
    {
      image: Images.DASHBOARD_IMAGE_VIEW11,
      name: 'DashBoard.CONVENTION',
      url: 'https://www.knocksense.com/kanpur/kanpur-convention-centre-construction-work-to-pace-up-expected-to-be-completed-by-aug-15',
    },
    {
      image: Images.KAMLA_RETREAT,
      name: 'DashBoard.kamlaRetreat',
      url: 'https://kanpurtourism.in/kamla-retreat-kanpur',
    },
    {
      image: Images.JAPANI_GARDEN,
      name: 'DashBoard.japaniGarden',
      url: 'https://yometro.com/travel-guide/attraction-japani-garden-kanpur',
    },
    {
      image: Images.ISKCON,
      name: 'DashBoard.ISKCONTemple',
      url: 'https://everipedia.org/wiki/lang_en/ISKCON_Temple,_Kanpur',
    },
    {
      image: Images.GANGA_BARRAGE,
      name: 'DashBoard.gangaBarrage',
      url: 'https://en.wikipedia.org/wiki/Ganges_Barrage',
    },
    {
      image: Images.KANPUR_MEMORIAL_CHURCH,
      name: 'DashBoard.memorialChurch',
      url: 'https://en.wikipedia.org/wiki/Kanpur_Memorial_Church',
    },
    {
      image: Images.BITHOOR,
      name: 'DashBoard.bithoor',
      url: 'https://en.wikipedia.org/wiki/Bithoor',
    },
    {
      image: Images.PHOOL_BAGH,
      name: 'DashBoard.phoolbagh',
      url: 'https://en.wikipedia.org/wiki/Phool_Bagh',
    },
    {
      image: Images.ZOO,
      name: 'DashBoard.zoo',
      url: 'https://en.wikipedia.org/wiki/Kanpur_Zoological_Park',
    },
  ],
  ABOUT_KANPUR: [
    {
      id: 1,
      name: 'DashBoard.kanpurHistory',
      icon: 'history',
      url: 'https://kanpurnagar.nic.in/history/',
      filter:'Filter1'
    },
    {
      id: 2,
      name: 'DashBoard.KSCL',
      icon: 'asterisk',
      url: 'https://en.wikipedia.org/wiki/New_Kanpur_City',
      filter:'Filter2'
    },
    {
      id: 3,
      name: 'DashBoard.KNN',
      icon: 'city',
      url: 'https://kmc.up.nic.in/',
      filter:'Filter3'
    },

    {
      id: 4,
      name: 'DashBoard.weatherData',
      icon: 'weather-cloudy',
      url: 'https://www.accuweather.com/en/in/kanpur/206679/weather-forecast/206679',
      filter:'Filter4'
    },
    {
      id: 5,
      name: 'DashBoard.pollutionData',
      icon: 'smoke',
      url: 'https://www.accuweather.com/en/in/kanpur/206679/air-quality-index/206679',
      filter:'Filter5'
    },
  ],
  MISC: [
    {
      id: 1,
      name: 'DashBoard.busRoute',
      icon: 'bus-alt',
      url: 'http://uputd.gov.in/article/kanpurctsl-en/bus-timing',
    },
    {
      id: 2,
      name: 'DashBoard.trafficRoute',
      icon: 'traffic-light',
      url: 'https://www.google.com/maps/@26.4499226,80.331871,16z/data=!5m1!1e1',
    },
    
  ],
  CITIZEN_ENGAGEMENT: [
    {
      id: 1,
      name: 'DashBoard.facebook',
      icon: 'facebook',
      url: 'https://www.facebook.com/KanpurMunicipalCorporation/',
      color:Colors.facebook,
    },
    {
      id: 2,
      name: 'DashBoard.twitter',
      icon: 'twitter',
      url: 'https://twitter.com/nagarnigamknp?lang=en',
      color:Colors.twitter,
    },
    {
      id: 3,
      name: 'DashBoard.website',
      icon: 'globe',
      url: 'https://kmc.up.nic.in/',
      color:Colors.blue,
    },
  ],
  POPULATION_DATA: [
    {
      id: 1,
      name: 'DashBoard.population',
      icon: 'intersex',
      url: 'https://kanpurnagar.nic.in/demography/#Demography',
      data: '4581 K',
    },
    {
      id: 2,
      name: 'DashBoard.population',
      icon: 'male',
      url: 'https://kanpurnagar.nic.in/demography/',
      data: '2460 K',
    },
    {
      id: 3,
      name: 'DashBoard.population',
      icon: 'female',
      url: 'https://kanpurnagar.nic.in/demography/',
      data: '2121 K',
    },
  ],
  GREEN_PARK_IMAGES: [
    {
      uri: Image.resolveAssetSource(Images.GREENPARK_IMAGE_VIEW1).uri,
    },
    {
      uri: Image.resolveAssetSource(Images.GREENPARK_IMAGE_VIEW2).uri,
    },
    {
      uri: Image.resolveAssetSource(Images.GREENPARK_IMAGE_VIEW3).uri,
    },
    {
      uri: Image.resolveAssetSource(Images.GREENPARK_IMAGE_VIEW4).uri,
    },
    {
      uri: Image.resolveAssetSource(Images.GREENPARK_IMAGE_VIEW5).uri,
    },
    {
      uri: Image.resolveAssetSource(Images.GREENPARK_IMAGE_VIEW6).uri,
    },
    {
      uri: Image.resolveAssetSource(Images.GREENPARK_IMAGE_VIEW7).uri,
    },
    {
      uri: Image.resolveAssetSource(Images.GREENPARK_IMAGE_VIEW8).uri,
    },
    {
      uri: Image.resolveAssetSource(Images.GREENPARK_IMAGE_VIEW9).uri,
    },
    {
      uri: Image.resolveAssetSource(Images.GREENPARK_IMAGE_VIEW10).uri,
    },
    {
      uri: Image.resolveAssetSource(Images.DASHBOARD_IMAGE_VIEW1).uri,
    },
    {
      uri: Image.resolveAssetSource(Images.DASHBOARD_IMAGE_VIEW2).uri,
    },
    {
      uri: Image.resolveAssetSource(Images.DASHBOARD_IMAGE_VIEW3).uri,
    },
    {
      uri: Image.resolveAssetSource(Images.DASHBOARD_IMAGE_VIEW4).uri,
    },
  ],
  NANA_RAO_PARK: [
    {
      uri: Image.resolveAssetSource(Images.NANARAO_PARK1).uri,
    },
    {
      uri: Image.resolveAssetSource(Images.NANARAO_PARK2).uri,
    },
    {
      uri: Image.resolveAssetSource(Images.NANARAO_PARK3).uri,
    },
    
  ],
  CONVENTION_CENTRE: [
    {
      uri: Image.resolveAssetSource(Images.DASHBOARD_IMAGE_VIEW11).uri,
    },
    {
      uri: Image.resolveAssetSource(Images.DASHBOARD_IMAGE_VIEW12).uri,
    },
    {
      uri: Image.resolveAssetSource(Images.DASHBOARD_IMAGE_VIEW13).uri,
    },
    {
      uri: Image.resolveAssetSource(Images.DASHBOARD_IMAGE_VIEW14).uri,
    },
    {
      uri: Image.resolveAssetSource(Images.DASHBOARD_IMAGE_VIEW15).uri,
    },
    {
      uri: Image.resolveAssetSource(Images.DASHBOARD_IMAGE_VIEW16).uri,
    },
    {
      uri: Image.resolveAssetSource(Images.DASHBOARD_IMAGE_VIEW17).uri,
    },
    {
      uri: Image.resolveAssetSource(Images.DASHBOARD_IMAGE_VIEW18).uri,
    },
    {
      uri: Image.resolveAssetSource(Images.DASHBOARD_IMAGE_VIEW19).uri,
    },
    {
      uri: Image.resolveAssetSource(Images.DASHBOARD_IMAGE_VIEW20).uri,
    },
  ],
  MENU: [
    {
      name: 'DashBoard.notification',
      icon: 'bell',
    },
    {
      name: 'DashBoard.changePassword',
      icon: 'pencil',
    },
    {
      name: 'DashBoard.SETTING',
      icon: 'gear',
    },
    {
      name: 'DashBoard.LANGUAGE',
      icon: 'language',
    },
  ],
 
  TICKET_CARD: [
    {
      name: 'DashBoard.blueWorld',
      image: Images.BLUE_WORLD,
      url: 'https://www.google.com/search?q=blue+world&rlz=1C1VDKB_enIN1032IN1032&oq=blue+world&aqs=chrome.0.69i59l4j46i175i199i512j0i131i433i512j0i512l4.2602j0j4&sourceid=chrome&ie=UTF-8',
    },
    {
      name: 'DashBoard.nanaRaoPark',
      image: Images.NANA_RAO_PARK,
      url: 'https://www.google.com/search?q=nana+rao+park+kanpur+ticket&rlz=1C1VDKB_enIN1032IN1032&sxsrf=APwXEdfeZlJ_uFKfZhgvFot_FjGdypuSvw%3A1679828309722&ei=VSUgZObUK8uH4-EPm_O3sA0&ved=0ahUKEwim07yNuPn9AhXLwzgGHZv5DdYQ4dUDCA8&uact=5&oq=nana+rao+park+kanpur+ticket&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCAAQgAQ6BggAEAcQHkoECEEYAFAAWN8bYPAeaABwAHgAgAHJAYgB3Q2SAQUwLjkuMZgBAKABAcABAQ&sclient=gws-wiz-serp',
    },
    {
      name: 'DashBoard.greenPark',
      image: Images.GREEN_PARK,
      url: 'https://www.google.com/search?q=green+park+kanpur+ticket&rlz=1C1VDKB_enIN1032IN1032&sxsrf=APwXEdc3ktqGHPDZFZS8fHjW8z3BI-47Pw%3A1679828339107&ei=cyUgZI6DBq7d4-EPluW44Aw&ved=0ahUKEwjOiL6buPn9AhWu7jgGHZYyDswQ4dUDCA8&uact=5&oq=green+park+kanpur+ticket&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIGCAAQBxAeMgYIABAIEB4yBggAEAgQHjoKCAAQRxDWBBCwAzoGCAAQHhANOggIABAIEB4QDUoECEEYAFDwDlj2HmCPIWgDcAF4AIABywGIAeMOkgEGMC4xMC4xmAEAoAEByAEFwAEB&sclient=gws-wiz-serp',
    },
    {
      name: 'DashBoard.zoo',
      image: Images.ZOO,
      url: 'https://www.google.com/search?q=zoo+kanpur+ticket&rlz=1C1VDKB_enIN1032IN1032&sxsrf=APwXEdcBy7N-e800gLtRdX0YpHg8vs52Sw%3A1679828361628&ei=iSUgZMniJbPy4-EP4caJkAk&ved=0ahUKEwiJy5ymuPn9AhUz-TgGHWFjApIQ4dUDCA8&uact=5&oq=zoo+kanpur+ticket&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIQCC4QDRCABBDHARCvARDqBDIGCAAQCBAeMgYIABAIEB4yBggAEAgQHjICCCYyCAgAEIoFEIYDMhsILhANEIAEEMcBEK8BEOoEENwEEN4EEOAEGAFKBAhBGABQAFinAmDgBWgAcAF4AIAB_QGIAYQFkgEFMC4yLjGYAQCgAQHAAQHaAQYIARABGBQ&sclient=gws-wiz-serp',
    },
    {
      name: 'DashBoard.boatClub',
      image: Images.BOAT_CLUB,
      url: 'https://www.google.com/search?q=boat+club+kanpur+ticket&rlz=1C1VDKB_enIN1032IN1032&sxsrf=APwXEdeQMc2yZEt2RN3SAI3fLkI-NaXlSg%3A1679827919359&ei=zyMgZM7PFa7A4-EP8OKZkAM&ved=0ahUKEwiO86rTtvn9AhUu4DgGHXBxBjIQ4dUDCA8&uact=5&oq=boat+club+kanpur+ticket&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzITCC4QgAQQFBCHAhDHARCvARDqBDIKCAAQgAQQFBCHAjIGCAAQFhAeMh4ILhCABBAUEIcCEMcBEK8BEOoEENwEEN4EEOAEGAE6EAguEK8BEMcBEIoFELADEEM6CggAEIoFELADEEM6CwgAEIAEELEDELADOg0IABCABBAUEIcCELADOggIABCABBCwAzoTCC4QFBCvARDHARCHAhCABBDqBDoFCAAQgAQ6HgguEBQQrwEQxwEQhwIQgAQQ6gQQ3AQQ3gQQ4AQYAToQCC4QgAQQFBCHAhDHARCvAUoECEEYAVC3EFijGWCcG2gDcAB4AIAB9wGIAa0KkgEFMC42LjGYAQCgAQHIAQrAAQHaAQYIARABGBQ&sclient=gws-wiz-serp',
    },

  ],
  METRO: [
    {
      id: 1,
      name: "Metro Services",
      url: 'https://www.lmrcl.com/kanpur-metro/station-info'
    }
  ],

  OTHER_MENU_OPTION: [
    {
      categoryID: 0,
      categoryCode: "GOVERNMENT_SCHEMES",
      categoryName: "SideBar.GOVERNMENT_SCHEMES",
      isActive: true,
      isCollapse: true,
      iconName: 'headphones',
      lstCategorySubCategoryResp: [
        {
          id: 1,
          name: 'DashBoard.PMAY',
          icon: 'truck',
          url: 'https://pmaymis.gov.in/open/check_aadhar_existence.aspx?comp=b',
        },
        {
          id: 2,
          name: 'DashBoard.ujjwala',
          icon: 'cubes',
          url: 'https://www.pmuy.gov.in/ujjwala2.html',
        },
        {
          id: 3,
          name: 'DashBoard.scholarship',
          icon: 'file-picture-o',
          url: 'http://samajkalyan.up.gov.in/en/page/application-forms',
        },
        {
          id: 4,
          name: 'DashBoard.PMJAY',
          icon: 'file-o',
          url: 'https://mera.pmjay.gov.in/search/login',
        },

        {
          id: 5,
          name: 'DashBoard.startup',
          icon: 'user',
          url: 'https://www.startupindia.gov.in/content/sih/en/registration.html',
        },
        {
          id: 6,
          name: 'DashBoard.jobRegistration',
          icon: 'gears',
          url: 'https://sewayojan.up.nic.in/IEP/Login.aspx?query=J',
        },
      ]
    },
    // {
    //   categoryID: 0,
    //   categoryCode: "CITIZEN SERVICES",
    //   categoryName: "SideBar.CITIZEN_SERVICES",
    //   isActive: true,
    //   isCollapse: true,
    //   iconName: 'headphones',
    //   lstCategorySubCategoryResp: [
    //     {
    //       id: 1,
    //       name: 'DashBoard.birthDeath',
    //       icon: 'registered',
    //       url: 'https://kmc.up.nic.in/Login_reg.aspx',
    //     },
    //     {
    //       id: 2,
    //       name: 'DashBoard.propertyTax',
    //       icon: 'file-text-o',
    //       url: 'https://knnpropertytax.com/index.php',
    //     },
    //     {
    //       id: 3,
    //       name: 'DashBoard.jakKalVibhag',
    //       icon: 'tint',
    //       url: 'http://jalkalkanpur.in/',
    //     },
    //     {
    //       id: 4,
    //       name: 'DashBoard.atalIncubation',
    //       icon: 'money',
    //       url: 'https://aim.gov.in/selected-atal.php ',
    //     },
    //     {
    //       id: 5,
    //       name: 'DashBoard.grievance',
    //       icon: 'comment',
    //       url: 'https://kmc.up.nic.in/Grievance_Home.htm',
    //     },
    //     {
    //       id: 6,
    //       name: 'DashBoard.eChallan',
    //       icon: 'truck',
    //       url: 'https://echallan.parivahan.gov.in/',
    //     },
    //     {
    //       id: 7,
    //       name: 'DashBoard.drivingLicense',
    //       icon: 'drivers-license-o',
    //       url: 'https://sarathi.parivahan.gov.in/sarathiservice/stateSelection.do',
    //     },
    //     {
    //       id: 8,
    //       name: 'DashBoard.vehicleRegistration',
    //       icon: 'file-picture-o',
    //       url: 'https://vahan.parivahan.gov.in/vahanservice/vahan/ui/appl_status/form_Know_Appl_Status.xhtml',
    //     },
    //   ]
    // },
  ],

  DYNAMIC_OPTIONS: [
    {
      "categoryID": 1,
      "categoryCode": "ENTERTAINMENT_TOURISM",
      "categoryName": "DashBoard.ENTERTAINMENT_TOURISM",
      "isActive": true,
      "catIcon": "headphones",
      "lstCategorySubCategoryResp": [
        {
          "subCategoryID": 1,
          "categoryID": 1,
          "categoryName": "ENTERTAINMENT / TOURISM",
          "subCategoryCode": "MOVIES THEATRE",
          "subCategoryName": "DashBoard.MOVIES_THEATRE",
          "catIcon": "video-camera",
          "isActive": true
        },
        {
          "subCategoryID": 4,
          "categoryID": 1,
          "categoryName": "ENTERTAINMENT / TOURISM",
          "subCategoryCode": "PARKS",
          "subCategoryName": "DashBoard.PARKS",
          "catIcon": "photo",
          "isActive": true
        },
        {
          "subCategoryID": 39,
          "categoryID": 1,
          "categoryName": "ENTERTAINMENT / TOURISM",
          "subCategoryCode": "COMPLEX",
          "subCategoryName": "DashBoard.COMPLEX",
          "catIcon": "street-view",
          "isActive": true
        },
        {
          "subCategoryID": 45,
          "categoryID": 1,
          "categoryName": "ENTERTAINMENT / TOURISM",
          "subCategoryCode": "MONUMNT",
          "subCategoryName": "DashBoard.MONUMENTS",
          "catIcon": "object-group",
          "isActive": true
        }
      ]
    },
    {
      "categoryID": 2,
      "categoryCode": "TRANSPORT AND MOBILITY",
      "categoryName": "DashBoard.TRANSPORT_AND_MOBILITY",
      "isActive": true,
      "catIcon": "truck",
      "lstCategorySubCategoryResp": [
        {
          "subCategoryID": 5,
          "categoryID": 2,
          "categoryName": "TRANSPORT AND MOBILITY",
          "subCategoryCode": "BUS STATION",
          "subCategoryName": "DashBoard.BUS_STATION",
          "catIcon": "bus",
          "isActive": true
        },
        {
          "subCategoryID": 6,
          "categoryID": 2,
          "categoryName": "TRANSPORT AND MOBILITY",
          "subCategoryCode": "RAILWAY STATION",
          "subCategoryName": "DashBoard.RAILWAY_STATION",
          "catIcon": "subway",
          "isActive": true
        }
      ]
    },
    {
      "categoryID": 5,
      "categoryCode": "HOSPITALITY",
      "categoryName": "DashBoard.HOSPITALITY",
      "isActive": true,
      "catIcon": "ambulance",
      "lstCategorySubCategoryResp": [
        {
          "subCategoryID": 19,
          "categoryID": 5,
          "categoryName": "HOSPITALITY",
          "subCategoryCode": "HOTEL",
          "subCategoryName": "DashBoard.HOTEL",
          "catIcon": "building",
          "isActive": true
        },
        {
          "subCategoryID": 20,
          "categoryID": 5,
          "categoryName": "HOSPITALITY",
          "subCategoryCode": "RESTAURANT",
          "subCategoryName": "DashBoard.RESTAURANT",
          "catIcon": "cutlery",
          "isActive": true
        },
        {
          "subCategoryID": 21,
          "categoryID": 5,
          "categoryName": "HOSPITALITY",
          "subCategoryCode": "RESORT",
          "subCategoryName": "DashBoard.RESORT",
          "catIcon": "tree",
          "isActive": true
        }
      ]
    },
  ],
  PUBLIC_UTILITY: [
    {
      "categoryID": 12,
      "categoryCode": "PUBLIC UTILITY",
      "categoryName": "DashBoard.PublicUtility",
      "isActive": true,
      "catIcon": "headphone",
      "lstCategorySubCategoryResp": [
        {
          "subCategoryID": 40,
          "categoryID": 12,
          "categoryName": "PUBLIC UTILITY",
          "subCategoryCode": "Electricity",
          "subCategoryName": "DashBoard.Electricity",
          "catIcon": "solar-power",
          "isActive": true
        },
        {
          "subCategoryID": 41,
          "categoryID": 12,
          "categoryName": "PUBLIC UTILITY",
          "subCategoryCode": "Police Station",
          "subCategoryName": "DashBoard.Police",
          "catIcon": "police-station",
          "isActive": true
        },
        {
          "subCategoryID": 42,
        "categoryID": 12,
        "categoryName": "PUBLIC UTILITY",
        "subCategoryCode": "Post Office",
        "subCategoryName": "DashBoard.Post_Office",
          "catIcon": "postage-stamp",
          "isActive": true
        },
        {
          "subCategoryID": 43,
        "categoryID": 12,
        "categoryName": "PUBLIC UTILITY",
        "subCategoryCode": "Public Toilet FInder",
        "subCategoryName": "DashBoard.Public_Toilet_Finder",
          "catIcon": "toilet",
          "isActive": true
        },
        {
          "subCategoryID": 53,
        "categoryID": 12,
        "categoryName": "PUBLIC UTILITY",
        "subCategoryCode": "Orp",
        "subCategoryName": "DashBoard.ORPHANAGE",
          "catIcon": "account-child-circle",
          "isActive": true
        },
        {
          "subCategoryID": 54,
        "categoryID": 12,
        "categoryName": "PUBLIC UTILITY",
        "subCategoryCode": "OAH",
        "subCategoryName": "DashBoard.OLD_AGE_HOME",
          "catIcon": "home-roof",
          "isActive": true
        },
        {
          "subCategoryID": 55,
        "categoryID": 12,
        "categoryName": "PUBLIC UTILITY",
        "subCategoryCode": "Fuel",
        "subCategoryName": "DashBoard.Fuel_Station",
          "catIcon": "fuel",
          "isActive": true
        },
        {
          "subCategoryID": 56,
        "categoryID": 12,
        "categoryName": "PUBLIC UTILITY",
        "subCategoryCode": "EV",
        "subCategoryName": "DashBoard.EV_Charging_Station",
          "catIcon": "ev-station",
          "isActive": true
        },
        
      ]
    },
    
  ],
  COMMON_SERVICE_CENTER: [
    {
      "categoryID": 10,
      "categoryCode": "COMMON SERVICE CENTRE",
      "categoryName": "DashBoard.COMMON_SERVICE_CENTRE",
      "isActive": true,
      "catIcon": "group",
      "lstCategorySubCategoryResp": [
        {
          "subCategoryID": 31,
          "categoryID": 10,
          "categoryName": "COMMON SERVICE CENTRE",
          "subCategoryCode": "COMMON SERVICE CENTRE",
          "subCategoryName": "DashBoard.COMMON_SERVICE",
          "catIcon": "globe",
          "isActive": true
        },
        {
          "subCategoryID": 44,
          "categoryID": 10,
          "categoryName": "COMMON SERVICE CENTRE",
          "subCategoryCode": "JAN SEVA KENDRA",
          "subCategoryName": "DashBoard.JAN_SEVA_KENDRA",
          "catIcon": "users",
          "isActive": true
        }
      ]
    },
    
  ],



};



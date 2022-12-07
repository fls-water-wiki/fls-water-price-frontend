export const FIELDS = {
  PRICE: 'PRICE',
  CURRENCY: 'CURRENCY',
  DATE: 'DATE',
  WATER_UNIT: 'WATER_UNIT',
  PRICE_TYPE: 'PRICE_TYPE',
  USER_SECTOR: 'USER_SECTOR',
  INDIGENOUS_TERRITORY: 'INDIGENOUS_TERRITORY',
  REGION: 'REGION',
  DATA_SOURCE: 'DATA_SOURCE',
  SOURCE_URL: 'SOURCE_URL',
  SOURCE_TITLE: 'SOURCE_TITLE',
  SOURCE_DATE: 'SOURCE_DATE',
  SOURCE_DESCRIPTION: 'SOURCE_DESCRIPTION',
  SOURCE_AUTHOR_1: 'SOURCE_AUTHOR_1',
  SOURCE_AUTHOR_1_ROLE: 'SOURCE_AUTHOR_1_ROLE',
  SOURCE_AUTHOR_2: 'SOURCE_AUTHOR_2',
  SOURCE_AUTHOR_2_ROLE: 'SOURCE_AUTHOR_2_ROLE',
  SOURCE_AUTHOR_3: 'SOURCE_AUTHOR_3',
  SOURCE_AUTHOR_3_ROLE: 'SOURCE_AUTHOR_3_ROLE',

};

export const INITIAL_VALUES = {
  [FIELDS.PRICE]: 0,
  [FIELDS.CURRENCY]: '',
  [FIELDS.DATE]: 0,
  [FIELDS.WATER_UNIT]: '',
  [FIELDS.PRICE_TYPE]: '',
  [FIELDS.USER_SECTOR]: '',
  [FIELDS.INDIGENOUS_TERRITORY]: '',
  [FIELDS.REGION]: '',
  [FIELDS.DATA_SOURCE]: '',
  [FIELDS.SOURCE_URL]: '',
  [FIELDS.SOURCE_TITLE]: '',
  [FIELDS.SOURCE_DESCRIPTION]: '',
  [FIELDS.SOURCE_DATE]: 0,
  [FIELDS.SOURCE_AUTHOR_ROLE]: '',
  [FIELDS.SOURCE_AUTHOR_1]: '',
  [FIELDS.SOURCE_AUTHOR_1_ROLE]: '',
  [FIELDS.SOURCE_AUTHOR_2]: '',
  [FIELDS.SOURCE_AUTHOR_2_ROLE]: '',
  [FIELDS.SOURCE_AUTHOR_3]: '',
  [FIELDS.SOURCE_AUTHOR_3_ROLE]: '',
};

export const AUTHOR_ROLES = [
  {
    value: 'supplier',
    label: 'Supplier'
  },
  {
    value: 'user',
    label: 'User'
  },
  {
    value: 'regulator',
    label: 'Regulator'
  },
  {
    value: 'reporter',
    label: 'Reporter'
  }
]

export const PRICE_TYPES = [
  {
    value: 'statutory_price',
    label: 'Statutory price'
  },
  {
    value: 'transactional_price',
    label: 'Transactional price'
  },
  {
    value: 'environmental_value',
    label: 'Environmental value'
  },
  {
    value: 'derived_value',
    label: 'Derived value'
  },
]

export const WATER_UNITS = [
  {
    value: 'cubic_meter',
    label: 'Cubic meter'
  },
  {
    value: 'liter',
    label: 'Liter'
  },
  {
    value: 'acre_foot',
    label: 'Acre foot'
  },
  {
    value: 'gallon',
    label: 'Gallon'
  },
  {
    value: '1000_ccf',
    label: '1000 CCF'
  },
  {
    value: '100_cubic_meter',
    label: '100 cubic meter'
  },
  {
    value: 'ml',
    label: 'mL'
  },
  {
    value: 'kgal',
    label: 'kGal'
  },
]

export const USER_SECTORS = [
  {
    value: 'naics_11',
    code: 'NAICS 11',
    name: 'Agriculture, Forestry, Fishing and Hunting'
  },
  {
    value: 'naics_21',
    code: 'NAICS 21',
    name: 'Mining, Quarrying, and Oil and Gas Extraction'
  },
  {
    value: 'naics_22',
    code: 'NAICS 22',
    name: 'Utilies'
  },
  {
    value: 'naics_23',
    code: 'NAICS 23',
    name: 'Construction'
  },
  {
    value: 'naics_31-33',
    code: 'NAICS 31-33',
    name: 'Manufacturing'
  },
  {
    value: 'naics_42',
    code: 'NAICS 42',
    name: 'Wholesale Trade'
  },
  {
    value: 'naics_44-45',
    code: 'NAICS 44-45',
    name: 'Retail Trade'
  },
  {
    value: 'naics_48-49',
    code: 'NAICS 48-49',
    name: 'Transportation and Warehousing'
  },
  {
    value: 'naics_51',
    code: 'NAICS 51',
    name: 'Information'
  },
  {
    value: 'naics_52',
    code: 'NAICS 52',
    name: 'Finance and Insurance'
  },
  {
    value: 'naics_53',
    code: 'NAICS 53',
    name: 'Real Estate and Rental and Leasing'
  },
  {
    value: 'naics_54',
    code: 'NAICS 54',
    name: 'Professional, Scientific, and Technical Services'
  },
  {
    value: 'naics_55',
    code: 'NAICS 55',
    name: 'Management of Companies and Enterprises'
  },
  {
    value: 'naics_56',
    code: 'NAICS 56',
    name: 'Adminstrative and Support and Waste Management'
  },
  {
    value: 'naics_61',
    code: 'NAICS 61',
    name: 'Educational Services'
  },
  {
    value: 'naics_62',
    code: 'NAICS 62',
    name: 'Health Care and Social Assistance'
  },
  {
    value:'naics_71',
    code: 'NAICS 71',
    name: 'Arts, Entertainment, and Recreation'
  },
  {
    value: 'naics_72',
    code: 'NAICS 72',
    name: 'Accomodation and Food Services'
  },
  {
    value: 'naics_81',
    code: 'NAICS 81',
    name: 'Other Services (except Public Administration'
  },
  {
    value: 'naics_92',
    code: 'NAICS 92',
    name: 'Public Administration'
  },
]

export const CURRENCIES = [
  {"cc":"AED","symbol":"\u062f.\u0625;","name":"UAE dirham"},
  {"cc":"AFN","symbol":"Afs","name":"Afghan afghani"},
  {"cc":"ALL","symbol":"L","name":"Albanian lek"},
  {"cc":"AMD","symbol":"AMD","name":"Armenian dram"},
  {"cc":"ANG","symbol":"NA\u0192","name":"Netherlands Antillean gulden"},
  {"cc":"AOA","symbol":"Kz","name":"Angolan kwanza"},
  {"cc":"ARS","symbol":"$","name":"Argentine peso"},
  {"cc":"AUD","symbol":"$","name":"Australian dollar"},
  {"cc":"AWG","symbol":"\u0192","name":"Aruban florin"},
  {"cc":"AZN","symbol":"AZN","name":"Azerbaijani manat"},
  {"cc":"BAM","symbol":"KM","name":"Bosnia and Herzegovina konvertibilna marka"},
  {"cc":"BBD","symbol":"Bds$","name":"Barbadian dollar"},
  {"cc":"BDT","symbol":"\u09f3","name":"Bangladeshi taka"},
  {"cc":"BGN","symbol":"BGN","name":"Bulgarian lev"},
  {"cc":"BHD","symbol":".\u062f.\u0628","name":"Bahraini dinar"},
  {"cc":"BIF","symbol":"FBu","name":"Burundi franc"},
  {"cc":"BMD","symbol":"BD$","name":"Bermudian dollar"},
  {"cc":"BND","symbol":"B$","name":"Brunei dollar"},
  {"cc":"BOB","symbol":"Bs.","name":"Bolivian boliviano"},
  {"cc":"BRL","symbol":"R$","name":"Brazilian real"},
  {"cc":"BSD","symbol":"B$","name":"Bahamian dollar"},
  {"cc":"BTN","symbol":"Nu.","name":"Bhutanese ngultrum"},
  {"cc":"BWP","symbol":"P","name":"Botswana pula"},
  {"cc":"BYR","symbol":"Br","name":"Belarusian ruble"},
  {"cc":"BZD","symbol":"BZ$","name":"Belize dollar"},
  {"cc":"CAD","symbol":"$","name":"Canadian dollar"},
  {"cc":"CDF","symbol":"F","name":"Congolese franc"},
  {"cc":"CHF","symbol":"Fr.","name":"Swiss franc"},
  {"cc":"CLP","symbol":"$","name":"Chilean peso"},
  {"cc":"CNY","symbol":"\u00a5","name":"Chinese/Yuan renminbi"},
  {"cc":"COP","symbol":"Col$","name":"Colombian peso"},
  {"cc":"CRC","symbol":"\u20a1","name":"Costa Rican colon"},
  {"cc":"CUC","symbol":"$","name":"Cuban peso"},
  {"cc":"CVE","symbol":"Esc","name":"Cape Verdean escudo"},
  {"cc":"CZK","symbol":"K\u010d","name":"Czech koruna"},
  {"cc":"DJF","symbol":"Fdj","name":"Djiboutian franc"},
  {"cc":"DKK","symbol":"Kr","name":"Danish krone"},
  {"cc":"DOP","symbol":"RD$","name":"Dominican peso"},
  {"cc":"DZD","symbol":"\u062f.\u062c","name":"Algerian dinar"},
  {"cc":"EEK","symbol":"KR","name":"Estonian kroon"},
  {"cc":"EGP","symbol":"\u00a3","name":"Egyptian pound"},
  {"cc":"ERN","symbol":"Nfa","name":"Eritrean nakfa"},
  {"cc":"ETB","symbol":"Br","name":"Ethiopian birr"},
  {"cc":"EUR","symbol":"\u20ac","name":"European Euro"},
  {"cc":"FJD","symbol":"FJ$","name":"Fijian dollar"},
  {"cc":"FKP","symbol":"\u00a3","name":"Falkland Islands pound"},
  {"cc":"GBP","symbol":"\u00a3","name":"British pound"},
  {"cc":"GEL","symbol":"GEL","name":"Georgian lari"},
  {"cc":"GHS","symbol":"GH\u20b5","name":"Ghanaian cedi"},
  {"cc":"GIP","symbol":"\u00a3","name":"Gibraltar pound"},
  {"cc":"GMD","symbol":"D","name":"Gambian dalasi"},
  {"cc":"GNF","symbol":"FG","name":"Guinean franc"},
  {"cc":"GQE","symbol":"CFA","name":"Central African CFA franc"},
  {"cc":"GTQ","symbol":"Q","name":"Guatemalan quetzal"},
  {"cc":"GYD","symbol":"GY$","name":"Guyanese dollar"},
  {"cc":"HKD","symbol":"HK$","name":"Hong Kong dollar"},
  {"cc":"HNL","symbol":"L","name":"Honduran lempira"},
  {"cc":"HRK","symbol":"kn","name":"Croatian kuna"},
  {"cc":"HTG","symbol":"G","name":"Haitian gourde"},
  {"cc":"HUF","symbol":"Ft","name":"Hungarian forint"},
  {"cc":"IDR","symbol":"Rp","name":"Indonesian rupiah"},
  {"cc":"ILS","symbol":"\u20aa","name":"Israeli new sheqel"},
  {"cc":"INR","symbol":"\u20B9","name":"Indian rupee"},
  {"cc":"IQD","symbol":"\u062f.\u0639","name":"Iraqi dinar"},
  {"cc":"IRR","symbol":"IRR","name":"Iranian rial"},
  {"cc":"ISK","symbol":"kr","name":"Icelandic kr\u00f3na"},
  {"cc":"JMD","symbol":"J$","name":"Jamaican dollar"},
  {"cc":"JOD","symbol":"JOD","name":"Jordanian dinar"},
  {"cc":"JPY","symbol":"\u00a5","name":"Japanese yen"},
  {"cc":"KES","symbol":"KSh","name":"Kenyan shilling"},
  {"cc":"KGS","symbol":"\u0441\u043e\u043c","name":"Kyrgyzstani som"},
  {"cc":"KHR","symbol":"\u17db","name":"Cambodian riel"},
  {"cc":"KMF","symbol":"KMF","name":"Comorian franc"},
  {"cc":"KPW","symbol":"W","name":"North Korean won"},
  {"cc":"KRW","symbol":"W","name":"South Korean won"},
  {"cc":"KWD","symbol":"KWD","name":"Kuwaiti dinar"},
  {"cc":"KYD","symbol":"KY$","name":"Cayman Islands dollar"},
  {"cc":"KZT","symbol":"T","name":"Kazakhstani tenge"},
  {"cc":"LAK","symbol":"KN","name":"Lao kip"},
  {"cc":"LBP","symbol":"\u00a3","name":"Lebanese lira"},
  {"cc":"LKR","symbol":"Rs","name":"Sri Lankan rupee"},
  {"cc":"LRD","symbol":"L$","name":"Liberian dollar"},
  {"cc":"LSL","symbol":"M","name":"Lesotho loti"},
  {"cc":"LTL","symbol":"Lt","name":"Lithuanian litas"},
  {"cc":"LVL","symbol":"Ls","name":"Latvian lats"},
  {"cc":"LYD","symbol":"LD","name":"Libyan dinar"},
  {"cc":"MAD","symbol":"MAD","name":"Moroccan dirham"},
  {"cc":"MDL","symbol":"MDL","name":"Moldovan leu"},
  {"cc":"MGA","symbol":"FMG","name":"Malagasy ariary"},
  {"cc":"MKD","symbol":"MKD","name":"Macedonian denar"},
  {"cc":"MMK","symbol":"K","name":"Myanma kyat"},
  {"cc":"MNT","symbol":"\u20ae","name":"Mongolian tugrik"},
  {"cc":"MOP","symbol":"P","name":"Macanese pataca"},
  {"cc":"MRO","symbol":"UM","name":"Mauritanian ouguiya"},
  {"cc":"MUR","symbol":"Rs","name":"Mauritian rupee"},
  {"cc":"MVR","symbol":"Rf","name":"Maldivian rufiyaa"},
  {"cc":"MWK","symbol":"MK","name":"Malawian kwacha"},
  {"cc":"MXN","symbol":"$","name":"Mexican peso"},
  {"cc":"MYR","symbol":"RM","name":"Malaysian ringgit"},
  {"cc":"MZM","symbol":"MTn","name":"Mozambican metical"},
  {"cc":"NAD","symbol":"N$","name":"Namibian dollar"},
  {"cc":"NGN","symbol":"\u20a6","name":"Nigerian naira"},
  {"cc":"NIO","symbol":"C$","name":"Nicaraguan c\u00f3rdoba"},
  {"cc":"NOK","symbol":"kr","name":"Norwegian krone"},
  {"cc":"NPR","symbol":"NRs","name":"Nepalese rupee"},
  {"cc":"NZD","symbol":"NZ$","name":"New Zealand dollar"},
  {"cc":"OMR","symbol":"OMR","name":"Omani rial"},
  {"cc":"PAB","symbol":"B./","name":"Panamanian balboa"},
  {"cc":"PEN","symbol":"S/.","name":"Peruvian nuevo sol"},
  {"cc":"PGK","symbol":"K","name":"Papua New Guinean kina"},
  {"cc":"PHP","symbol":"\u20b1","name":"Philippine peso"},
  {"cc":"PKR","symbol":"Rs.","name":"Pakistani rupee"},
  {"cc":"PLN","symbol":"z\u0142","name":"Polish zloty"},
  {"cc":"PYG","symbol":"\u20b2","name":"Paraguayan guarani"},
  {"cc":"QAR","symbol":"QR","name":"Qatari riyal"},
  {"cc":"RON","symbol":"L","name":"Romanian leu"},
  {"cc":"RSD","symbol":"din.","name":"Serbian dinar"},
  {"cc":"RUB","symbol":"R","name":"Russian ruble"},
  {"cc":"SAR","symbol":"SR","name":"Saudi riyal"},
  {"cc":"SBD","symbol":"SI$","name":"Solomon Islands dollar"},
  {"cc":"SCR","symbol":"SR","name":"Seychellois rupee"},
  {"cc":"SDG","symbol":"SDG","name":"Sudanese pound"},
  {"cc":"SEK","symbol":"kr","name":"Swedish krona"},
  {"cc":"SGD","symbol":"S$","name":"Singapore dollar"},
  {"cc":"SHP","symbol":"\u00a3","name":"Saint Helena pound"},
  {"cc":"SLL","symbol":"Le","name":"Sierra Leonean leone"},
  {"cc":"SOS","symbol":"Sh.","name":"Somali shilling"},
  {"cc":"SRD","symbol":"$","name":"Surinamese dollar"},
  {"cc":"SYP","symbol":"LS","name":"Syrian pound"},
  {"cc":"SZL","symbol":"E","name":"Swazi lilangeni"},
  {"cc":"THB","symbol":"\u0e3f","name":"Thai baht"},
  {"cc":"TJS","symbol":"TJS","name":"Tajikistani somoni"},
  {"cc":"TMT","symbol":"m","name":"Turkmen manat"},
  {"cc":"TND","symbol":"DT","name":"Tunisian dinar"},
  {"cc":"TRY","symbol":"TRY","name":"Turkish new lira"},
  {"cc":"TTD","symbol":"TT$","name":"Trinidad and Tobago dollar"},
  {"cc":"TWD","symbol":"NT$","name":"New Taiwan dollar"},
  {"cc":"TZS","symbol":"TZS","name":"Tanzanian shilling"},
  {"cc":"UAH","symbol":"UAH","name":"Ukrainian hryvnia"},
  {"cc":"UGX","symbol":"USh","name":"Ugandan shilling"},
  {"cc":"USD","symbol":"US$","name":"United States dollar"},
  {"cc":"UYU","symbol":"$U","name":"Uruguayan peso"},
  {"cc":"UZS","symbol":"UZS","name":"Uzbekistani som"},
  {"cc":"VEB","symbol":"Bs","name":"Venezuelan bolivar"},
  {"cc":"VND","symbol":"\u20ab","name":"Vietnamese dong"},
  {"cc":"VUV","symbol":"VT","name":"Vanuatu vatu"},
  {"cc":"WST","symbol":"WS$","name":"Samoan tala"},
  {"cc":"XAF","symbol":"CFA","name":"Central African CFA franc"},
  {"cc":"XCD","symbol":"EC$","name":"East Caribbean dollar"},
  {"cc":"XDR","symbol":"SDR","name":"Special Drawing Rights"},
  {"cc":"XOF","symbol":"CFA","name":"West African CFA franc"},
  {"cc":"XPF","symbol":"F","name":"CFP franc"},
  {"cc":"YER","symbol":"YER","name":"Yemeni rial"},
  {"cc":"ZAR","symbol":"R","name":"South African rand"},
  {"cc":"ZMK","symbol":"ZK","name":"Zambian kwacha"},
  {"cc":"ZWR","symbol":"Z$","name":"Zimbabwean dollar"}
];
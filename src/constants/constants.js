export const csvHeaders = [
  {label: 'Water Treatment', key: 'water_treatment'},
  {label: 'Water Unit', key: 'vp_wtrunit'},
  {label: 'Price', key: 'vp_num'},
  {label: 'Currency', key: 'curr_code'},
  {label: 'Year', key: 'vp_date'},
  {label: 'Country Code', key: 'nat_code'},
  {label: 'Source', key: 'source_title'},
];

export const fields = ['ID', 'Water Treatment', 'Water Unit', 'Price',  'Currency', 'Year', 'Country ID', 'Source URI'];

export const TABLE_COLUMNS = {
  WATER_TREATMENT: 'water_treatment',
  WATER_UNIT: 'vp_wtrunit',
  PRICE: 'vp_num',
  CURRENCY: 'curr_code',
  YEAR: 'year',
  NAT_CODE: 'nat_code',
  SOURCE_TITLE: 'source_title',
};

export const TABLE_COLUMN_DESCRIPTIONS = {
  WATER_TREATMENT: 'A description of water processes related to this data point, as described in the original source. Searchable by keyword.',
  WATER_UNIT: 'Unit of measurement relevant to the data point.',
  PRICE: 'Numerical value for water cost.',
  CURRENCY: 'Relevant national currency. Uses ISO 4217 as standard list.',
  YEAR: 'Year in which the water cost was active.',
  NAT_CODE: 'The country under whose jurisdiction the water cost falls. Uses ISO 3166 country codes as standard list.',
  SOURCE_TITLE: 'Information source',
};
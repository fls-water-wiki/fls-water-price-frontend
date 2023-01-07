export const csvHeaders = [
    // {label: "ID", key: "vp_id"},
    {label: "Water Treatment", key: "vp_water_treatment"},
    {label: "Water Unit", key: "vp_water_unit"},
    {label: "Price", key: "vp_num"},
    {label: "Currency", key: "currency_id"},
    {label: "Year", key: "vp_date"},
    {label: "Country ID", key: "nation_id"},
    {label: "Source", key: "src_title"},
];

export const fields = ["ID", "Water Treatment", "Water Unit", "Price",  "Currency", "Year", "Country ID", "Source URI"];

export const TABLE_COLUMNS = {
    WATER_TREATMENT: 'water_treatment',
    WATER_UNIT: 'water_unit',
    PRICE: 'price',
    CURRENCY: 'currency',
    YEAR: 'year',
    COUNTRY_ID: 'country_id',
    SOURCE: 'source',
}

export const TABLE_COLUMN_DESCRIPTIONS = {
    WATER_TREATMENT: 'A description of water processes related to this data point, as described in the original source. Searchable by keyword.',
    WATER_UNIT: 'Unit of measurement relevant to the data point.',
    PRICE: 'Numerical value for water cost.',
    CURRENCY: 'Relevant national currency. Uses ISO 4217 as standard list.',
    YEAR: 'Year in which the water cost was active.',
    COUNTRY_ID: 'The country under whose jurisdiction the water cost falls. Uses ISO 3166 country codes as standard list.',
    SOURCE: 'Information source',
}
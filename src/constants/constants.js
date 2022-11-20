export const csvHeaders = [
    {label: "ID", key: "vp_id"},
    {label: "Water Treatment", key: "vp_water_treatment"},
    {label: "Water Unit", key: "vp_water_unit"},
    {label: "Price", key: "vp_num"},
    {label: "Currency", key: "currency_id"},
    {label: "Year", key: "vp_date"},
    {label: "Country ID", key: "nation_id"},
    {label: "Source Title", key: "src_title"},
    {label: "Source URI", key: "source_uri"},
];

const submitDataFormAnswerTypes = {
    Number: "Number",
    Text: "Text",
    Dropdown: "Dropdown",
    Radio: "Radio",
    Date: "Date"
}

export const submitDataFormValues = [
    {
        header: "Price or Value", 
        description: "Enter the number which represents the price of water or a derived value for water (e.g. 0.40). Do not include currency symbols (e.g. $).", 
        answerType: submitDataFormAnswerTypes.Number, 
        required: true,
    },
    {
        header: "Currency", 
        description: "Identify the ISO code for the applicable currency.", 
        answerType: submitDataFormAnswerTypes.Dropdown, 
        required: true,
    },
    {
        header: "Date of Price/Value", 
        description: "Provide the date when this price/value was applicable. Note that this may be different from the date when the data source was published.", 
        answerType: submitDataFormAnswerTypes.Date
    },
    {
        header: "Frequency", 
        description: "Frequency of payments/price relevance.", 
        answerType: submitDataFormAnswerTypes.Radio
    },
    {
        header: "Water unit", 
        description: "Enter the unit of water to which this price/value applies. If the unit is not available, contact the database manager.", 
        answerType: submitDataFormAnswerTypes.Radio
    },
    {
        header: "Price/value type", 
        description: 
            <p>Select the type of price/value. These are defined as:
                <ul>
                    <li>Statutory price: Set by a regulating government body; applicable to one or multiple individuals and groups; e.g. published in legislation.</li>
                    <li>Transactional price: Paid in a 1-1 transaction; e.g. published in a contract.</li>
                    <li>Environmental value: Derived based on the set economic value of an environmental product/common (e.g. fish). This includes compensatory fees determined proactively or after the fact, e.g. payments to community members for impacts to hunting or payments to government after pollution.</li>
                    <li>Derived value: Derived based on capital costs and profit of a company.</li>
                </ul>
            </p>, 
        answerType: submitDataFormAnswerTypes.Dropdown
    },
    {
        header: "Water treatment", 
        description: "Activities done to the water; a description of the water as published by suppliers or users. For example: desalination; fluorated drinking water; etc. As much as possible, use the exact language provided in the data source.", 
        answerType: submitDataFormAnswerTypes.Text
    },
    {
        header: "Water impact", 
        description: "Level of impact in case of spill/pollution/other impact. Record as described in the original source.", 
        answerType: submitDataFormAnswerTypes.Dropdown
    },
    {
        header: "Water type", 
        description: "", 
        answerType: submitDataFormAnswerTypes.Dropdown
    },
    {
        header: "Water source", 
        description: "", 
        answerType: submitDataFormAnswerTypes.Dropdown
    },
    {
        header: "User sector", 
        description: 
            <p>
                Use <a href="<https://airtable.com/shr0RqSIIPRkIMaBE">NAICS standards for industry codes</a> 
            </p>,
        answerType: submitDataFormAnswerTypes.Dropdown
    },
    {
        header: "Indigenous territory", 
        description: "Include the traditional territory/ies of Indigenous people(s) affected by the use of water, if noted in the data source.", 
        answerType: submitDataFormAnswerTypes.Text
    },
    {
        header: "Region", 
        description: 
            <p>
                Uses the <a href="https://airtable.com/shrSrxa17wr4gGJkp">UN/LOCODE for trade to determine standardized region names</a>
            </p>, 
        answerType: submitDataFormAnswerTypes.Dropdown
    },
    {
        header: "Specific region", 
        description: "Identify the region at a more local level (e.g. city or village name) if relevant.", 
        answerType: submitDataFormAnswerTypes.Text
    },
    {
        header: "Data source", 
        description: "Provide a source for your information. Search by URL/URI; if your source is not already listed, please add it using the “+” sign next to the dropdown list.", 
        answerType: submitDataFormAnswerTypes.Dropdown, 
        addNew: true
    },
]

export const fields = ["ID", "Water Treatment", "Water Unit", "Price",  "Currency", "Year", "Country ID", "Source URI"];

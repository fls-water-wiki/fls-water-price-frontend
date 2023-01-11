import React, { useEffect, useState } from 'react';
import { useField, useFormikContext } from 'formik';

import './SearchInputs.css';

import DropdownInputSearchForm from './DropdownInputSearchForm';

const RegionsInputSearchForm = ({ label, name, regions, ...props}) => {
  const [field, meta] = useField(props);
  const {values: { COUNTRY }} = useFormikContext();

  const [currentRegions, setCurrentRegions] = useState([]);

  useEffect(() => {
    setCurrentRegions(regions[COUNTRY])
  }, [regions, COUNTRY, setCurrentRegions]);

  return (
    <DropdownInputSearchForm label={label} name={name}>
      <option value=''>Select ...</option>
      {
        currentRegions && currentRegions.map(region => <option value={region.region_code}>{region.region_name}</option>)
      }
    </DropdownInputSearchForm>
  );
};

export default RegionsInputSearchForm;
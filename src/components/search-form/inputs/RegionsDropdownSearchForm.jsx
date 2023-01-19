import React, { useEffect, useState } from 'react';
import { useFormikContext } from 'formik';

import './SearchInputs.css';

import DropdownInputSearchForm from './DropdownInputSearchForm';

const RegionsInputSearchForm = ({ label, name, showModal, regions}) => {
  const {values: { COUNTRY }} = useFormikContext();

  const [currentRegions, setCurrentRegions] = useState([]);

  useEffect(() => {
    setCurrentRegions(regions[COUNTRY]);
  }, [regions, COUNTRY, setCurrentRegions]);

  return (
    <DropdownInputSearchForm label={label} name={name} showModal={showModal}>
      <option value=''>Select ...</option>
      {
        currentRegions && currentRegions.map(region => <option key={region.region_code} value={region.region_code}>{region.region_name}</option>)
      }
    </DropdownInputSearchForm>
  );
};

export default RegionsInputSearchForm;
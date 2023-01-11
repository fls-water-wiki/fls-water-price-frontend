import React, { useEffect, useState } from 'react';
import { useField, useFormikContext } from 'formik';

// import './SearchInputs.css';

import DropdownInput from './DropdownInput';

const RegionsDropdown = ({ label, name, regions, ...props}) => {
  const {values: { country }} = useFormikContext();

  const [currentRegions, setCurrentRegions] = useState([]);

  useEffect(() => {
    setCurrentRegions(regions[country])
  }, [regions, country, setCurrentRegions]);

  return (
    <DropdownInput header={label} name={name}>
      <option value=''>Select ...</option>
      {
        currentRegions && currentRegions.map(region => <option value={region.region_code}>{region.region_name}</option>)
      }
    </DropdownInput>
  );
};

export default RegionsDropdown;
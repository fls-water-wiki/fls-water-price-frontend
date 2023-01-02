import React, { useEffect, useState } from 'react';
import { useField, useFormikContext } from 'formik';

// import './SearchInputs.css';

import DropdownInput from './DropdownInput';

const RegionsDropdown = ({ label, name, regions, ...props}) => {
  const [field, meta] = useField(props);
  const {values: { COUNTRY }} = useFormikContext();

  const [currentRegions, setCurrentRegions] = useState([]);

  useEffect(() => {
    setCurrentRegions(regions[COUNTRY])
  }, [regions, COUNTRY, setCurrentRegions]);

  return (
    <DropdownInput header={label} name={name}>
      <option value=''>Select ...</option>
      {
        currentRegions && currentRegions.map(region => <option value={region.name}>{region.name}</option>)
      }
    </DropdownInput>
  );
};

export default RegionsDropdown;
import React, { useEffect, useState } from 'react';
import { useFormikContext } from 'formik';

import DropdownInput from './DropdownInput';

const RegionsDropdown = ({ label, name, regions}) => {
  const {values: { country }} = useFormikContext();

  const [currentRegions, setCurrentRegions] = useState([]);

  useEffect(() => {
    setCurrentRegions(regions[country]);
  }, [regions, country, setCurrentRegions]);

  return (
    <DropdownInput header={label} name={name}>
      <option value=''>Select ...</option>
      {
        currentRegions && currentRegions.map(region => <option key={region.region_code} value={region.region_code}>{region.region_name}</option>)
      }
    </DropdownInput>
  );
};

export default RegionsDropdown;
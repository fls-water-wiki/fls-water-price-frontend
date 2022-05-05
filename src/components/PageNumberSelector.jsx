import React, {useState} from 'react';

import TextInput from './TextInput';

import Pagination from '@mui/material/Pagination';

function PageNumberSelector({ onSubmit }) {

  const [pageNumber, setPageNumber] = useState(1);

  const handleSubmit = (e) => {
    onSubmit(parseInt(pageNumber));
  }

  return (
    <div></div>
  )
}

export default PageNumberSelector
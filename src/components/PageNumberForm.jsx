import React, {useState} from 'react';

import TextInput from './TextInput';

function PageNumberForm({ onSubmit }) {

  const [pageNumber, setPageNumber] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(parseInt(pageNumber));
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextInput label="Page" id="page-number" onChange={setPageNumber} value={pageNumber} />
      <button type="submit">Submit</button>
    </form>
  )
}

export default PageNumberForm
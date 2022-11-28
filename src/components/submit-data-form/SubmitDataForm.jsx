import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';

import SubmitDataInput from './inputs/TextNumberInput'

const initialValues = {
  price: 0,
  currency: '',
  date: 0,
  waterUnit: '',
  priceType: '',
  userSector: '',
  indigenousTerritory: '',
  region: '',
  dataSource: '',
}

const SubmitDataForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {

      }}
    >
      <Form>

      </Form>

    </Formik>
  )
}

export default SubmitDataForm
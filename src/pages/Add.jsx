import React from 'react'
import SubmitDataInput from '../components/submit-data-form/SubmitDataInput';
import './Add.css';


function Add() {
  return (
    <SubmitDataInput header={"Price"} description={"price"} answer={"text"} required={true}/>
  )
}

export default Add
import React from 'react'
import styled from '@emotion/styled'
import useSelectCurrency from '../hooks/useSelectCurrency'
import {currencies} from '../data/currencies'

const Form = () => {

  

  const [ currency, SelectCurrency] = useSelectCurrency('Choose your Currency', currencies)

  return (
    <form>
        <SelectCurrency/>
        <InputSubmit type="submit" value='Calculate'/>
    </form>
  )
}

export default Form

const InputSubmit = styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 30px;
    &:hover {
        background-color: #7A7DFE;
        cursor: pointer;
    }
`
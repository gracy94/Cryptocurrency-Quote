import { useState } from 'react'
import styled from '@emotion/styled'
import Form from './components/Form'
import CryptoImage from './img/cryptocurrency.png'

function App() {

  return (
    <Container>
      <Image
        src={CryptoImage}
        alt='Cryptocurrency Image'
      />
      <div>
        <Heading>Calculate Cryptocurrencies Instantly</Heading>
        <Form></Form>
      </div>
      
    </Container>
   
  )
}

export default App

//Emotion Styled components

const Heading = styled.h1`
  font-family: 'Merriweather', serif;
  color: #FFF;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }
`

const Container = styled.div`
  max-width: 900px;
  width: 90%;
  margin: auto;
  @media(min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`

const Image = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`
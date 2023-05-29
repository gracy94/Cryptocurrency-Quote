import styled from "@emotion/styled"

const Result = ({result}) => {

    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = result

  return (
    <Container>
        <Image src={`https://www.cryptocompare.com/${IMAGEURL}`} alt="Image Crypto"
        />
        <div>
        <Price>The Price is: <span>{PRICE}</span></Price>
        <Text>The highest price of the day is: <span>{HIGHDAY}</span></Text>
        <Text>The lowest price of the day is: <span>{LOWDAY}</span></Text>
        <Text>Variation last 24 hours: <span>{CHANGEPCT24HOUR}</span></Text>
        <Text>Last update: <span>{LASTUPDATE}</span></Text>
        </div>

    </Container>
  )
}

const Container = styled.div `
    color: #FFF;
    font-family: 'Merriweather', serif;
    margin-top: 30px;
    display: flex;
    align-items: center;
    gap: 1rem;
`

const Image = styled.img`
    display: block;
    width: 150px;
`

const Text = styled.p`
    font-size: 18px;
    span {
        font-weight: 700;
    }
`

const Price = styled.div`
    font-size: 24px;
    span {
        font-weight: 700;
    }
`

export default Result
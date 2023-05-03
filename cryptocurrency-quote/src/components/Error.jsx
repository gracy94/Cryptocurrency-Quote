import styled from "@emotion/styled"

const Error = ({children}) => {
  return (
    <Text>
        {children}
    </Text>
  )
}

export default Error

const Text = styled.div`
    background-color: #B7322C;
    color: #FFF;
    padding: 15px;
    font-size: 22px;
    text-transform: uppercase;
    font-family: 'Merriweather', serif;
    font-weight: 700;
    text-align: center;
    border-radius: 5px;
`
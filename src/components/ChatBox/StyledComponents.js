import styled from 'styled-components'

const Button = styled.img`
  width: 112px;
  height: 37px;

  @media (min-width: 768px) {
    width: 40%;
    height: 22px;
  }

  @media (min-width: 1024px) {
    max-width: 170px;
    margin-top: 0px;
  }
`

const Container = styled.div`
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.16);
  padding: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background: white;
`

const H2 = styled.h2`
  font-family: 'sharp_sans';
  font-size: 12px;
  font-weight: 700;
  line-height: 30px;
  margin-top: 0px;
  margin-bottom: 10px;

  @media (min-width: 1024px) {
    font-size: 20px;
  }
`

export {Button, Container, H2}

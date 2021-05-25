import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  color: #ffffff;
  padding: 10px 0;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  @media (min-width: 768px) {
    width: 282px;
  }
  @media (min-width: 1024px) {
    width: 434px;
  }
`

const InformationField = styled.a`
  align-items: center;
  margin: 0 30px;
  display: flex;
  text-decoration: none;
  background: transparent;
  border: 0;
  cursor: pointer;
  max-height: 47px;
  padding: 0;

`

const ImageIcon = styled.img`
  margin-right: 26px;
`

const P = styled.p`
  font-family: 'sharp_sans';
  font-size: 15px;
  font-weight: 600;
  line-height: 18px;
  color: #000;
`
export {Container, InformationField, ImageIcon, P}

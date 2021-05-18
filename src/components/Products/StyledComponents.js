import styled from 'styled-components'
import { Link } from 'gatsby'

const Container = styled.div`
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.16);
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 15px 8px 0;
  min-height: 342px;
  background-color: #ffffff;
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 18px;
  max-height: 250px;
  overflow-y: hidden;

  &::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 3px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
  }

  &::-webkit-scrollbar
  {
    height: 12px;
	  background-color: #F5F5F5;
  }

  &::-webkit-scrollbar-thumb
  {
    border-radius: 5px;
	  -webkit-box-shadow: inset 0 0 3px rgba(0,0,0,.3);
	  background-color: #999;
  }
`

const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 270px;
  overflow-y: auto;

  &::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 3px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
  }

  &::-webkit-scrollbar
  {
    width: 12px;
	  background-color: #F5F5F5;
  }

  &::-webkit-scrollbar-thumb
  {
    border-radius: 5px;
	  -webkit-box-shadow: inset 0 0 3px rgba(0,0,0,.3);
	  background-color: #999;
  }
`

const Title = styled.p`
  font-family: 'sharp_sans';
  color: ${({ isActive }) => (isActive ? '#000000' : '#bcbcbc')};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  margin: 4px 8px;
`

const ProductName = styled(Link)`
  font-family: 'sharp_sans';
  color: #000000;
  font-size: 18px;
  font-weight: 700;
  margin: 0;
  text-decoration: none;
  cursor: pointer;
  margin: auto;
`

const Icon = styled.div`
    background-image: url(${({ src }) => src})};
    width:42px;
    height: 42px;
    margin-left: 16px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    cursor: pointer;
`

const Product = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  min-height: 56px;
  cursor: pointer;
  border-bottom: 1px solid #ccc;
  margin-bottom: 8px;

  &:last-child {
    border-bottom: 0;
  }
`

export { Product, ProductName, ProductsWrapper, Header, Container, Title, Icon }

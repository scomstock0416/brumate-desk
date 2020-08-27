import styled from 'styled-components';
import searchIcon from '../../images/searchIcon.svg';

const Input = styled.input`
    width: 285px;
    height: 39px;
    border: 1px solid #707070;
    background-color: #ffffff;
    color: #a6a6a6;
    padding-left: 10px;
    background: url(${searchIcon}) no-repeat scroll 90% 50%;

    ::placeholder {
        color: #a6a6a6;
        font-family: 'sharp_sans';
        font-size: 10px;
        font-weight: 600;
    }

    @media (min-width: 768px) {
        background-color: #ffffff;
        max-width: 347px;
    }
`;

const Container = styled.div`
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.16);
    padding: 30px;
    display: flex;
    flex-direction: column;
    ${Input}{
        max-width: 100%;
        margin: 0 auto;
    }
`;

const H2 = styled.h2`
  font-family: 'sharp_sans';
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;  
  margin-top: 0px;
  margin-bottom: 10px;
`;


export {
    Input,
    Container,
    H2,
};

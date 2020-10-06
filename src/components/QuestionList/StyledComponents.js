import styled from 'styled-components'

const Container = styled.nav`
  width: 100%;
  background-color: white;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    min-width: 407px;
    flex: 1;
    max-width: ${({isSearching}) => isSearching && '100%'};
  }
  @media (min-width: 1440px) {
    flex: 1;
    margin-right: 65px;
    max-width: 939px;
    max-width: ${({isSearching}) => isSearching && '100%'};
    margin: ${({isSearching}) => isSearching && '50px auto'};
  }
`

const QuestionWrapper = styled.div`
  width: 100%;
  color: #ffffff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
`

const AnswerContainer = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: #606060;
  padding: 30px;
`

const QuestionTitle = styled.div`
  align-items: center;
  margin: 0 30px;
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  cursor: pointer;
  &:last-child {
    border-bottom: none;
  }
`

const LinkMenu = styled.p`
  flex: 1;
  text-align: left;
  color: #000;
  font-size: 15px;
  font-family: 'sharp_sans';
  padding: 20px 0;
  margin: 0px;
`

const ImageIcon = styled.img`
  transform: ${({opened}) => (opened ? 'rotate(90deg)' : 'rotate(-90deg)')};
`

const Banner = styled.img`
  width: 100%;
`

export {
  Container,
  QuestionWrapper,
  QuestionTitle,
  LinkMenu,
  ImageIcon,
  Banner,
  AnswerContainer,
}

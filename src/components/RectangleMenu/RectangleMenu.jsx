import React, {useState} from 'react'
import styled from 'styled-components'
import {Link as BaseLink} from 'gatsby'
import arrow from '../../images/arrow.png'

const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.16);
  padding: 0 16px 0 30px;
  display: flex;
  flex-flow: column;
  height: auto;
  @media (min-width: 768px) {
    height: 254px;
  }
`

const QuestionWrapper = styled.div`
  flex: 1;
  margin: 25px 0 16px 0;
`

const Wrapper = styled.div`
  display: ${({isSelectable}) => (isSelectable ? 'flex' : 'none')};
  max-width: 100%;
  flex-direction: column;
  height: 100%;
  @media (min-width: 767px) {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`

const Header = styled(BaseLink)`
  max-width: 100%;
  display: flex;
  text-decoration: none;
  align-items: center;
  border-bottom: ${({isSelectable}) =>
    isSelectable ? '1px solid rgba(0,0,0,0.25)' : 'none'};
  @media (min-width: 767px) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  }
`

const Icon = styled.img`
  width: 11px;
  transform: ${({isSelectable}) =>
    !isSelectable ? 'rotate(180deg)' : 'rotate(0deg)'};
  align-self: center;
  display: flex;
  @media (min-width: 767px) {
    display: none;
  }
`

const IconTitle = styled.img`
  width: 34px;
  height: 34px;
  margin-right: 16px;
`

const Title = styled.h2`
  color: #000;
  font-size: 22px;
  font-weight: 600;
  flex: 1;
  font-family: 'sharp_sans';
`

const LinkMenu = styled(BaseLink)`
  font-size: 15px;
  font-weight: 600;
  line-height: 30px;
  font-family: 'sharp_sans';
  color: #000;
  display: block;
  text-decoration: none;
`

const LinkAll = styled(BaseLink)`
  font-size: 12px;
  font-weight: 600;
  line-height: 14px;
  color: #808080;
  text-decoration: none;
  align-items: flex-end;
  justify-content: flex-end;
  font-family: 'sharp_sans';
  margin: 0 0 35px 0;
`

const RectangleMenu = ({className, title, questions, icon}) => {
  const [isSelectable, setSelectable] = useState(false)
  const isProductFAQ = title === 'Product FAQ' ? '/productFAQ' : '/question'
  return (
    <Container className={className}>
      <Header to={isProductFAQ} state={{title}} isSelectable={isSelectable}>
        <IconTitle src={icon} />
        <Title
          onClick={() => {
            setSelectable(!isSelectable)
          }}
        >
          {title}
        </Title>
        <Icon display="mobile" isSelectable={isSelectable} src={arrow} />
      </Header>
      <Wrapper isSelectable={isSelectable}>
        <QuestionWrapper>
          {questions.slice(0, 3).map(({question}) => (
            <LinkMenu to={isProductFAQ} state={{title, opened: question}}>
              {question.question}
            </LinkMenu>
          ))}
        </QuestionWrapper>
        <LinkAll to={isProductFAQ} state={{title}}>
          View All
        </LinkAll>
      </Wrapper>
    </Container>
  )
}

export default RectangleMenu

import React from 'react'
import { Container, Header, IconTitle, Title } from './StyledComponents'

const CategoriesList = ({ className, categories, product }) => (
  <Container className={className}>
    {categories.map(({ node }, idx) => {
      const urlValidation =
        node.title === 'Product FAQ' ? '/productFAQ' : '/question'
      return (
        <div key={idx}>
          {!node.product && (
            <Header to={urlValidation} state={{ title: node.title }}>
              {node.icon && <IconTitle src={node.icon.file.url} />}
              <Title>{node.title}</Title>
            </Header>
          )}
        </div>
      )
    })}
  </Container>
)

export default CategoriesList

import React, { useState, useEffect } from 'react';
import { navigate } from 'gatsby';
import {
    Ul,
    IconTitle,
    HeaderMobile as Header,
    TitleMobile as Title,
    Li,
} from './StyledComponents';


const CategoriesMobile = ({
    className,
    isProductFAQ,
    categories: initialCategories,
}) => {
    const [isOpen, setIsOpen] = useState(true);
    const [categoryInfo, setCategoryInfo] = useState([]);


    const setState = (idx) => {
        if (isOpen) {
            const info = initialCategories.filter(({ node }) => !node.product)[idx];
            setCategoryInfo([info]);
        } else {
            const all = initialCategories.filter(({ node }) => !node.product);
            setCategoryInfo(all);
        }
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        let cat = initialCategories.filter(({ node }) => !node.product);
        if (isProductFAQ) {
            cat = initialCategories.filter(({ node }) => node.title === 'Product FAQ');
        }
        setCategoryInfo([cat[0]]);
    }, []);

    return (
        <Ul className={className}>
            {categoryInfo && categoryInfo.map(({ node }, idx) => {
                const urlValidation = (node.title === 'Product FAQ') ? '/productFAQ' : '/question';
                return (
                    <Li>
                        <Header>
                            <IconTitle src={node.icon.file.url} />
                            <Title
                                onClick={() => {
                                    setState(idx);
                                    navigate(
                                        urlValidation,
                                        { state: { title: node.title } },
                                    );
                                }}
                            >
                                {node.title}
                            </Title>
                        </Header>
                    </Li>
                );
            })}
        </Ul>
    );
};

export default CategoriesMobile;

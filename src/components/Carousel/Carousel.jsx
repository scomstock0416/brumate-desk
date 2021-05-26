import React, { useState, useEffect } from 'react'
import { navigate } from 'gatsby'
import BannerURL from '../../images/productFAQ.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import { useBreakpoint } from 'gatsby-plugin-breakpoints'

import {
    ProductsWrapper,
    Container,
    Header,
    Title,
    Icon,
    Product,
    ProductName,
    BannerImage,
} from './StyledComponents'

function compare(a, b) {
    if (a.type[0] < b.type[0]) {
        return -1
    }
    if (a.type[0] > b.type[0]) {
        return 1
    }
    return 0
}
function beerItemsCompare(a, b) {
    let beerPriority = []
    if(window.innerWidth > 1024) {
        beerPriority = [ "Hopsulator Duo", "Imperial Pint", "Hopsulator Bott'l", "Hopsulator Juggernaut", "Hopsulator Twist", "Growl'r", "Hopsulator Trio", "Hopsulator Slim"]
    }
    else {
        beerPriority = ["Hopsulator Slim", "Hopsulator Duo", "Imperial Pint", "Hopsulator Bott'l", "Hopsulator Juggernaut", "Hopsulator Twist", "Growl'r", "Hopsulator Trio"]
    }
    if (beerPriority.indexOf(a.key) > beerPriority.indexOf(b.key)) {
        return 1
    } else {
        return -1
    }
}
function spiritsItemsCompare(a, b) {
    let spiritsPriority = []
    if(window.innerWidth > 1024) {
        spiritsPriority = [ "Shaker Pint", "Fifth", "MargTini", "Liquor Canteen","Glitter Flask", "NOS'R", "Highball Tumbler", "Rocks Tumbler"]
    }
    else {
        spiritsPriority = [ "Rocks Tumbler", "Shaker Pint", "Fifth", "MargTini", "Liquor Canteen","Glitter Flask", "NOS'R", "Highball Tumbler"]
    }
    if (spiritsPriority.indexOf(a.key) > spiritsPriority.indexOf(b.key)) {
        return 1
    } else {
        return -1
    }
}
const ProductsSlider = ({ header, products }) => {

    const [shownProducts, setShownProducts] = useState([])
    const [productTypes, setProductTypes] = useState([])
    const [carouselItems, setCarouselItems] = useState([])

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                onClick={onClick}
            >
                <svg fill="#000000" viewBox="0 0 129 129"><path d="M121.3 34.6c-1.6-1.6-4.2-1.6-5.8 0l-51 51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8 0-1.6 1.6-1.6 4.2 0 5.8l53.9 53.9c.8.8 1.8 1.2 2.9 1.2 1 0 2.1-.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2.1-5.8z" /></svg>
            </div>
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                onClick={onClick}
            >
                <svg fill="#000000" viewBox="0 0 129 129"><path d="M121.3 34.6c-1.6-1.6-4.2-1.6-5.8 0l-51 51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8 0-1.6 1.6-1.6 4.2 0 5.8l53.9 53.9c.8.8 1.8 1.2 2.9 1.2 1 0 2.1-.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2.1-5.8z" /></svg>
            </div>
        );
    }
    const breakpoints = useBreakpoint()
    const settings = {
        dots: false,
        infinite: true,
        centerMode: true,
        centerPadding: '0',
        speed: 500,
        slidesToScroll: 1,
        prevArrow: <SamplePrevArrow className="slick-prev" />,
        nextArrow: <SampleNextArrow className="slick-next" />
    };

    useEffect(() => {
        const newTypes = products.reduce(
            (acc, product) =>
                Array.isArray(product.type) ? acc.concat(product.type) : acc,
            [],
        )

        const setTypes = new Set(newTypes)
        const typesArr = [...setTypes]
        let sortedArray = [...typesArr]
        const priority = ["Beer", "Spirits", "Wine", "Coffee", "ReHydration", "Cooler"]
        sortedArray.sort((a, b) => {
            if (priority.indexOf(a) > priority.indexOf(b)) {
                return 1
            } else {
                return -1
            }
        });
        setProductTypes(sortedArray)
        const organizedProducts = products.sort(compare)
        setShownProducts(organizedProducts)
    }, [])

    useEffect(() => {
        const carousels = {}
        productTypes.map((type, index) => {
            carousels[type] = []
            return shownProducts
                .filter(({ type: typeProduct }) => type === typeProduct[0])
                .map(({ name, banner, questiontype }) => {
                    const questionType = questiontype ? questiontype[0].title : ''
                    carousels[type].push(
                        <Product key={name}
                            onClick={() => {
                                navigate('/productInner/', { state: { title: questionType } })
                            }}
                        >
                            {banner && banner.file && (
                                <Icon
                                    onClick={() => {
                                        navigate('/productInner/', {
                                            state: { title: questionType },
                                        })
                                    }}
                                    alt={name}
                                    src={banner.file.url}
                                />
                            )}
                            <ProductName
                                to="/productInner/"
                                state={{
                                    title: questionType,
                                }}
                            >
                                {name}
                            </ProductName>
                        </Product>
                    )
                })
        })
        if(carousels && carousels["Beer"]) {
            carousels["Beer"].sort(beerItemsCompare)
        }
        if (carousels && carousels["Spirits"]) {
            carousels["Spirits"].sort(spiritsItemsCompare)
        }
        setCarouselItems(carousels)
    }, [productTypes])

    return (
        <Container>
            <BannerImage src={BannerURL} alt="BannerURL" />
            <ProductsWrapper>
                {productTypes.map((type, index) => (
                    <div key={type}>
                        <Title>{type}</Title>
                        {carouselItems[type] && !breakpoints.sm && !breakpoints.md && <Slider
                            {...settings}
                            slidesToShow={carouselItems[type].length >= 4 ? 4 : carouselItems[type].length}
                            centerPadding={carouselItems[type].length < 4 ? '115px' : '0px'}
                            className={carouselItems[type].length < 4 ? 'no-arrows' : ''}>
                            {carouselItems[type]}
                        </Slider>}
                        {carouselItems[type] && (breakpoints.sm || breakpoints.md) && <Slider
                            {...settings}
                            slidesToShow={carouselItems[type].length >= 3 ? 3 : carouselItems[type].length}>
                            {carouselItems[type]}
                        </Slider>}
                    </div>
                ))}
            </ProductsWrapper>
        </Container >
    )
}

export default ProductsSlider;
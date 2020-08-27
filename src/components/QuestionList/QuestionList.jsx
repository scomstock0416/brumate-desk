import React, { useState } from 'react';
import {
    Container,
    QuestionWrapper,
    QuestionTitle,
    LinkMenu,
    ImageIcon,
    Banner,
    AnswerContainer,
} from './StyledComponents';
import IconArrow from '../../images/arrowIcon.svg';


const QuestionList = ({
    className,
    questions = [],
    banner,
    isSearching = false,
}) => {
    const [open, setOpen] = useState([]);

    const handleClick = (id) => {
        if (open.includes(id)) {
            const newArray = open.filter((item) => item !== id);
            setOpen(newArray);
        } else {
            setOpen([...open, id]);
        }
    };
    return (
        <Container isSearching={isSearching} className={className}>
            <QuestionWrapper>
                {banner && <Banner src={banner} alt="banner" />}
                {questions && questions.map(
                    ({ question, answer, typeQuestion }) => (
                        <>
                            <QuestionTitle
                                onClick={() => handleClick(question.id)}
                                key={question.id}
                            >
                                {typeQuestion && (
                                    <LinkMenu>
                                        {typeQuestion.title}
                                        {' '}
                                        -
                                        {' '}
                                        {question.question}
                                    </LinkMenu>
                                )}
                                {!typeQuestion && (
                                    <LinkMenu>
                                        {question.question}
                                    </LinkMenu>
                                )}
                                <ImageIcon src={IconArrow} alt="arrow" />
                            </QuestionTitle>

                            {
                                open.includes(question.id) && answer
                                && (<AnswerContainer dangerouslySetInnerHTML={{ __html: answer.answer }} />)
                            }
                        </>
                    ),
                )}
            </QuestionWrapper>
        </Container>
    );
};

export default QuestionList;

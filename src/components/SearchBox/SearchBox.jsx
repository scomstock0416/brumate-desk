/* eslint-disable no-console */
import React, { useState } from 'react';
import QuestionList from '../QuestionList/QuestionList';
import {
    Input,
    Container,
    H2,
} from './StyledComponents';


const Search = ({
    className,
    questions,
    setQuestionsList,
}) => {
    const handleFilter = (value) => {
        const loweCaserValue = value.toLowerCase();
        const filteredQuestions = questions.filter(
            ({ question, answer, typeQuestion }) => (
                question.question.toLowerCase().includes(loweCaserValue)
                || answer.answer.toLowerCase().includes(loweCaserValue)
                || typeQuestion.title.toLowerCase().includes(loweCaserValue)
            ),
        );
        setQuestionsList(filteredQuestions);
    };
    return (
        <Input
            className={className}
            placeholder="Search a Question"
            onChange={(e) => {
                const { value } = e.target;
                if (value.length === 0) {
                    setQuestionsList([]);
                } else {
                    handleFilter(value);
                }
            }}
        />
    );
};


const SearchContainer = ({
    className,
    questions,
}) => {
    const [questionList, setQuestionsList] = useState([]);
    return (
        <Container className={className}>
            <H2>Search</H2>
            <Search
                setQuestionsList={setQuestionsList}
                questions={questions}
                placeholder="Search a Question"
                className={className}
            />
            {questionList && (
                <QuestionList questions={questionList} />
            )}
        </Container>
    );
};

export {
    SearchContainer,
};
export default Search;

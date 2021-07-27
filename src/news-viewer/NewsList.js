import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from './usePromise';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=7eff071e480f495bad5864b7ce9b506e`,
    );
  }, [category]);

  // 대기중
  if (loading) {
    return <NewsListBlock>Wait ...</NewsListBlock>;
  }

  // 아직 response 값이 설정되지 않았을 경우
  if (!response) {
    return null;
  }

  // 에러가 발생했을 때
  if (error) {
    return <NewsListBlock>에러 발생</NewsListBlock>;
  }

  // response 값이 유효할 때
  const { articles } = response.data;

  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;

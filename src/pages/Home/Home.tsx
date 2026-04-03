import React from 'react';
import { Header } from '../../components/Header';
import { MainWrapper, Title } from '../styled';
import { SearchInput } from '../../components/SearchInput';
import { DescriptionCard } from '../../components/Cards/DescriptionCard';

export const Home = () => {
  return (
    <>
      <Header />
      <MainWrapper>
        <SearchInput />
        <DescriptionCard />
      </MainWrapper>
    </>
  );
};

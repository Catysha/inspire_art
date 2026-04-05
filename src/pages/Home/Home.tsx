import React from 'react';
import { Header } from '../../components/Header';
import { MainWrapper } from '../styled';
import { SearchInput } from '../../components/SearchInput';

export const Home = () => {
  return (
    <>
      <Header />
      <MainWrapper>
        <SearchInput />
      </MainWrapper>
    </>
  );
};

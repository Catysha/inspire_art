import { Img, Input, InputWrapper, SearchButton, SearchWrapper, Title } from './styled';
import loop from './../../assets/icons/loop.svg';

export const SearchInput = () => {
  return (
    <SearchWrapper>
      <Title>Find some art!</Title>
      <InputWrapper>
        <Input type="text" placeholder="Search art ..." />
        <SearchButton>
          <Img src={loop} alt="Loop" />
        </SearchButton>
      </InputWrapper>
    </SearchWrapper>
  );
};

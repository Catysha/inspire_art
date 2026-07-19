import { useState, FormEvent } from 'react';
import { Img, Input, InputWrapper, SearchButton, SearchWrapper, Title } from './styled';
import loop from './../../assets/icons/loop.svg';

interface SearchInputProps {
  value: string;
  onSearch: (value: string) => void;
}

export const SearchInput = ({ value, onSearch }: SearchInputProps) => {
  const [localValue, setLocalValue] = useState(value);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSearch(localValue.trim());
  };

  return (
    <SearchWrapper>
      <Title>Find some art!</Title>
      <InputWrapper as="form" onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Search art ..."
          value={localValue}
          onChange={(event) => setLocalValue(event.target.value)}
        />
        <SearchButton type="submit">
          <Img src={loop} alt="Loop" />
        </SearchButton>
      </InputWrapper>
    </SearchWrapper>
  );
};

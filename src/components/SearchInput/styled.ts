import styled from 'styled-components';
import { colors } from '../../constants/colors';

export const SearchWrapper = styled.div`
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 40px;
  margin: 60px 0;
`;

export const InputWrapper = styled.div`
  height: 50px;
  background: ${colors.lightGrey};
  display: inline-flex;
  border-radius: 15px;
  padding: 0 10px;
`;

export const Input = styled.input`
  border: none;
  font-family: inherit;
  outline: none;
  background: transparent;
  width: 100%;
  @media (min-width: 768px) {
    width: 444px;
  }
`;

export const SearchButton = styled.button`
  border: none;
  background: transparent;
  &:focus {
    outline: none;
  }
`;

export const Img = styled.img`
  width: 30px;
`;

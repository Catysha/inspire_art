import Art from '../../../assets/images/art.png';
import { Img, LargeCardWrapper, DescriptionContainer } from './styled';
import { DescriptionCard } from '../DescriptionCard';

export const LargeCard = () => {
  return (
    <LargeCardWrapper>
      <Img src={Art} alt="Art" />
      <DescriptionContainer>
        <DescriptionCard />
      </DescriptionContainer>
    </LargeCardWrapper>
  );
};

import { DescriptionContainer, LargeCardWrapper } from './styled';
import { DescriptionCard } from '../DescriptionCard';
import { Img } from './styled';
import Art from '../../../assets/images/art.png';

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
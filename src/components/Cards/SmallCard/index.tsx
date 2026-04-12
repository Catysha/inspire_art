import Art from '../../../assets/images/art.png';
import { Img, SmallCardWrapper } from './styled';
import { DescriptionCard } from '../DescriptionCard';

export const SmallCard = () => {
  return (
    <SmallCardWrapper>
      <Img src={Art} alt="Art" />
      <DescriptionCard />
    </SmallCardWrapper>
  );
};

import React from 'react';
import HeartAdded from './../../assets/icons/heart_added.svg';
import HeartNotAdded from './../../assets/icons/heart_not_added.svg';
import { ImageButton, StatusWrapper } from './styled';

export const SaveStatus = () => {
  const [status, setStatus] = React.useState<boolean>(true);
  return (
    <StatusWrapper>
      <ImageButton
        src={status ? HeartNotAdded : HeartAdded}
        alt="Status"
        onClick={() => setStatus(!status)}
      />
    </StatusWrapper>
  );
};

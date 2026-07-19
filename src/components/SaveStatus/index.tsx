import HeartAdded from './../../assets/icons/heart_added.svg';
import HeartNotAdded from './../../assets/icons/heart_not_added.svg';
import { ImageButton, StatusWrapper } from './styled';

interface SaveStatusProps {
  isFavorite: boolean;
  onToggle: () => void;
}

export const SaveStatus = ({ isFavorite, onToggle }: SaveStatusProps) => {
  return (
    <StatusWrapper>
      <ImageButton
        src={isFavorite ? HeartAdded : HeartNotAdded}
        alt="Status"
        onClick={(e) => {
          // Карточки кликабельны целиком (ведут на страницу работы),
          // поэтому клик по сердечку не должен триггерить переход.
          e.preventDefault();
          e.stopPropagation();
          onToggle();
        }}
      />
    </StatusWrapper>
  );
};

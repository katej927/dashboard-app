import { useState, Dispatch } from 'react';
import styles from './graphDropDown.module.scss';
import cn from 'classnames';

interface Props {
  selectedOption: string;
  optionList: string[];
  updateOption: Dispatch<React.SetStateAction<string>>;
}

const GraphDropDown = ({ selectedOption, optionList, updateOption }: Props) => {
  const [isActivated, setIsActivated] = useState(false);

  const handleClick = (isOption: boolean, option?: string) => {
    setIsActivated(!isActivated);
    if (isOption && option) updateOption(option);
  };

  console.log('DropDown optionList', optionList, 'isActivated', isActivated);

  return (
    <div>
      <button
        type='button'
        className={cn(styles.selectedbtn, { [styles.activated]: isActivated })}
        onClick={() => handleClick(false)}
      >
        <div className={styles.colorCircle} />
        {selectedOption}
      </button>
      <div className={cn(styles.optionList, { [styles.hide]: !isActivated })}>
        {optionList.map((option) => (
          <button type='button' key={option} className={styles.optionItem} onClick={() => handleClick(true, option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GraphDropDown;

import { useState, Dispatch } from 'react';
import styles from './graphDropDown.module.scss';
import cn from 'classnames';

interface Props {
  selectedOption: string;
  optionList: string[];
  updateOption: Dispatch<React.SetStateAction<string>>;
  isPeriodBtn: boolean;
}

const GraphDropDown = ({ selectedOption, optionList, updateOption, isPeriodBtn }: Props) => {
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
        {!isPeriodBtn && <div className={styles.colorCircle} />}
        {selectedOption}
      </button>
      <ul className={cn(styles.optionList, { [styles.hide]: !isActivated })}>
        {optionList.map((option) => (
          <li key={option}>
            <button type='button' className={styles.optionItem} onClick={() => handleClick(true, option)}>
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GraphDropDown;

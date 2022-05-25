import { useState, Dispatch, useRef } from 'react';
import { useClickAway } from 'react-use';

import { IconDown } from 'assets/svgs';
import styles from './graphDropDown.module.scss';
import cn from 'classnames';

interface Props {
  selectedOption: string;
  optionList: string[];
  updateOption: Dispatch<React.SetStateAction<string>>;
  isPeriodBtn: boolean;
  idx?: number;
}

const GraphDropDown = ({ selectedOption, optionList, updateOption, isPeriodBtn, idx }: Props) => {
  const [isActivated, setIsActivated] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => {
    setIsActivated(false);
  });

  const handleClick = (isOption: boolean, option?: string) => {
    setIsActivated(!isActivated);
    if (isOption && option) updateOption(option);
  };

  return (
    <div className={cn(styles.graphDropDownWrapper, styles[`order${idx}`])}>
      <button
        type='button'
        className={cn(styles.selectedbtn, { [styles.activated]: isActivated, [styles.periodBtn]: isPeriodBtn })}
        onClick={() => handleClick(false)}
      >
        {!isPeriodBtn && <div className={cn(styles.colorCircle, styles[`order${idx}`])} />}
        {selectedOption}
        <IconDown />
      </button>
      <ul className={cn(styles.optionList, { [styles.hide]: !isActivated })} ref={ref}>
        {optionList.map((option) => (
          <li key={option} className={styles.optionLi}>
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

import { ArrowIcon } from 'assets/svgs';
import { useState } from 'react';
import styles from './dropDown.module.scss';
import cn from 'classnames';

interface IProps {
  value: string;
  dropDownList: string[];
}

const DropDown = ({ value, dropDownList }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [listValue, setListValue] = useState(value);

  const handleDropDownOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const onClickDropDownList = (item: string) => {
    setListValue(item);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropDownWrapper}>
      <button
        className={cn(styles.dropDownButton, { [styles.isSelected]: isOpen })}
        type='button'
        onClick={handleDropDownOpen}
      >
        <p className={styles.defaultText}>{listValue}</p>
        <ArrowIcon className={styles.arrowIcon} />
      </button>
      {isOpen && (
        <ul className={styles.dropDownListWrapper}>
          {dropDownList.map((item, index) => (
            <button
              type='button'
              key={`${item}${index}`}
              className={styles.dropDownList}
              onClick={() => onClickDropDownList(item)}
            >
              {item}
            </button>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;

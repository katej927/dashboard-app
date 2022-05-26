import { ArrowIcon } from 'assets/svgs';
import { useState } from 'react';
import styles from './dropDown.module.scss';
import cn from 'classnames';

interface IProps {
  value: string;
  dropDownList: string[];
  isInSideBar?: boolean;
  handleFilterDropDownList?: Function;
}

const DropDown = ({ value, dropDownList, isInSideBar, handleFilterDropDownList }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [listValue, setListValue] = useState(value);

  const handleDropDownOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const onClickDropDownList = (item: string) => {
    setListValue(item);
    setIsOpen(false);
    if (typeof handleFilterDropDownList === 'function') {
      handleFilterDropDownList(item);
    }
  };

  const onBlueInput = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };

  return (
    <div className={styles.dropDownWrapper}>
      <button
        type='button'
        className={cn(
          styles.dropDownInputWrapper,
          { [styles.isSideBar]: isInSideBar },
          { [styles.isSelected]: isOpen }
        )}
        onClick={handleDropDownOpen}
      >
        <input className={cn(styles.dropDownButton)} type='button' onBlur={() => onBlueInput()} />
        <p className={styles.defaultText}>{listValue}</p>
        <ArrowIcon className={cn(styles.arrowIcon, { [styles.animated]: isOpen })} />
      </button>
      {isOpen && (
        <ul className={cn(styles.dropDownListWrapper)}>
          {dropDownList.map((item) => (
            <button
              type='button'
              key={item}
              className={cn(styles.dropDownList, { [styles.isSideBar]: isInSideBar })}
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

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

  return (
    <div className={styles.dropDownWrapper}>
      <button
        className={cn(styles.dropDownButton, { [styles.isSelected]: isOpen }, { [styles.isSideBar]: isInSideBar })}
        type='button'
        onClick={handleDropDownOpen}
      >
        {listValue}
        <ArrowIcon className={styles.arrowIcon} />
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

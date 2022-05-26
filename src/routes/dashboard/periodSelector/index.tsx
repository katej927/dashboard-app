import { useState } from 'react';
import { useRecoilState } from 'recoil';
import DatePicker from 'react-datepicker';
import ko from 'date-fns/locale/ko';
import dayjs from 'dayjs';
import { GrFormDown } from 'react-icons/gr';

import { periodState } from 'states';
import styles from './periodSelector.module.scss';
import { IPeriod } from 'types/period';

const PeriodSelector = () => {
  const DATA_MIN_DATE = new Date(2022, 1, 1); // 주어진 데이터의 시작날짜, 실제 month에서 -1
  const DATA_MAX_DATE = new Date(2022, 3, 20);
  const A_WEEK_FROM_DATA_MIN_DATE = new Date(2022, 1, 8);

  const [startDate, setStartDate] = useState(DATA_MIN_DATE);
  const [endDate, setEndDate] = useState(A_WEEK_FROM_DATA_MIN_DATE); // minDate로부터 일주일의 기간
  const [period, setPeriod] = useRecoilState<IPeriod>(periodState);
  const [showCalendar, setShowCalendar] = useState(false);

  const onChangeDate = (dates: [Date, Date]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const onClickPeriodSelector = () => {
    setShowCalendar((prev) => !prev);
  };

  const onClickSetPeriod = () => {
    const start = dayjs(startDate).format('YYYY-MM-DD');
    const end = dayjs(endDate).format('YYYY-MM-DD');
    setPeriod((prev) => ({ ...prev, startDate: start, endDate: end }));
    onClickPeriodSelector();
  };

  return (
    <div className={styles.periodSelector}>
      <button type='button' onClick={onClickPeriodSelector}>
        {`${dayjs(period.startDate).format('YYYY년 MM월 DD일')} ~ ${dayjs(period.endDate).format('YYYY년 MM월 DD일')}`}
        <GrFormDown size={15} />
      </button>
      {showCalendar && (
        <>
          <div className={styles.headerTop}>
            {dayjs(startDate).format('YYYY-MM-DD')} ~ {endDate !== null ? dayjs(endDate).format('YYYY-MM-DD') : ''}
          </div>
          <DatePicker
            renderCustomHeader={({
              monthDate,
              decreaseMonth,
              increaseMonth,
              prevMonthButtonDisabled,
              nextMonthButtonDisabled,
            }) => (
              <div className={styles.customHeaderWrapper}>
                <button
                  className={styles.calendarMonthArrowButton}
                  type='button'
                  onClick={decreaseMonth}
                  disabled={prevMonthButtonDisabled}
                >
                  <span className={styles.arrow}>{'<'}</span>
                </button>
                <div className={styles.yearMonth}>
                  <span>{monthDate.toLocaleString('ko', { year: 'numeric' })}</span>
                  <span>{monthDate.toLocaleString('ko', { month: 'long' })}</span>
                </div>
                <button
                  className={styles.calendarMonthArrowButton}
                  type='button'
                  onClick={increaseMonth}
                  disabled={nextMonthButtonDisabled}
                >
                  <span className={styles.arrow}>{'>'}</span>
                </button>
              </div>
            )}
            className={styles.datePicker}
            locale={ko}
            selected={startDate}
            onChange={onChangeDate}
            startDate={startDate}
            endDate={endDate}
            minDate={DATA_MIN_DATE}
            maxDate={DATA_MAX_DATE}
            openToDate={DATA_MIN_DATE}
            selectsRange
            inline
            monthsShown={2}
            disabledKeyboardNavigation
          />
          <div className={styles.buttonWrapper}>
            <button type='button' onClick={onClickPeriodSelector}>
              닫기
            </button>
            <button type='button' onClick={onClickSetPeriod}>
              적용
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default PeriodSelector;

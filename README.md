# Dashboard App
![대시보드앱1](https://github.com/katej927/Algorithm/assets/69146527/cbaad542-52cc-40f5-b37f-e2dd2ed87e9c)

## 1️⃣ 프로젝트 개요



> 그래프를 이용한 마케팅 데이터 시각화 프로젝트
> 

- 프론트엔드 4명, 풀스택 1명

- 구현한 부분 : 통합 광고 현황 그래프
- 기간
    - 팀 전체 : ‘22.5.23~5.26

    - 개인 (나) : ‘22.5.24~5.26

## 2️⃣ Links



👉 화면 확인 : [배포 링크](https://dashboard-app-1a.netlify.app/)

👉 코드 확인 : [내가 구현한 코드](https://github.com/katej927/dashboard-app/tree/main/src/routes/dashboard/integratedAd/graphTwoTypes), [팀 전체 코드](https://github.com/katej927/dashboard-app)

## 3️⃣ Techs



※ 제가 사용하지 않은 기술들은 생략했습니다.

- React, Typescript, scss + classnames
- Recoil
- victory
- dayjs

## 4️⃣ 구현 내용



※ 팀원분들이 구현하신 것들은 생략했습니다.

### 🔸 **통합 광고 현황 그래프**
1. 드롭 다운

<details>
  <summary>주간 / 일별로 선택가능</summary>

  - 주간
      - UI
          
          ![대시보드앱5](https://github.com/katej927/Algorithm/assets/69146527/26bf14e5-364e-4d51-be83-aedcc578bcb9)

          
      - 구현 방법
          
          > 동일 주차의 평균을 구하여 주차 별로 반환
          > 
  
          1. 선택한 날짜들이 해당하는 월의 주차(n월 n주)를 구함
  
          2. 동일한 주에 해당하는 날짜들의 갯수를 구하고 데이터는 모두 더한 후 `해당 주차의 데이터 총합/해당 주차의 날짜 총 갯수`를 반환하여 주차별 평균을 반환
          - 코드
              
              `./src/routes/dashboard/integratedAd/graphTwoTypes/_shared/utils.ts`
              
              ```tsx
              const getWeekNumber = (cur: string) => {
                const currentDate = dayjs(cur).date();
                const weekDay = dayjs(cur).startOf('month').day();
                const weekNum = Math.trunc((weekDay - 1 + currentDate) / 7) + 1;
                return `${dayjs(cur).month() + 1}월 ${weekNum}주`;
              };
              
              const convertWeeklyData = (integratedAdInfo: IDay[], btnOption: Btn) => {
                let arrIndex = 0;
                let daysInWeek = 0;
                return integratedAdInfo?.reduce(
                  (acc, cur, i, src) => {
                    const accX = getWeekNumber(acc[arrIndex].x);
                    const curX = getWeekNumber(cur.date);
                    const btnValue = Array.isArray(btnOption) ? (cur[btnOption[0]] * cur[btnOption[1]]) / 100 : cur[btnOption];
              
                    if (i === 0) return acc;
              
                    daysInWeek += 1;
              
                    if (accX === curX) {
                      acc[arrIndex] =
                        i === src.length - 1
                          ? { x: accX, y: Math.round((acc[arrIndex].y + btnValue) / (daysInWeek += 1)) }
                          : { x: cur.date, y: acc[arrIndex].y + btnValue };
                      return acc;
                    }
              
                    acc[arrIndex] = { x: accX, y: Math.round(acc[arrIndex].y / daysInWeek) };
              
                    daysInWeek = 0;
                    arrIndex += 1;
                    acc[arrIndex] = { x: cur.date, y: btnValue };
                    return acc;
                  },
                  [
                    {
                      x: integratedAdInfo[0].date,
                      y: Math.round(
                        Array.isArray(btnOption)
                          ? (integratedAdInfo[0][btnOption[0]] + integratedAdInfo[0][btnOption[1]]) / 100
                          : integratedAdInfo[0][btnOption]
                      ),
                    },
                  ]
                );
              };
              ```

      - 선택이 불가능한 경우
          
          > 7일 이하의 기간을 선택했을 경우
          > 
  
          7일 이하의 기간 선택 시, 기간을 선택하는 드롭다운을 비활성화 시켜 주간 선택 불가
          
  - 일별
      - UI
          
          ![대시보드앱6](https://github.com/katej927/Algorithm/assets/69146527/43f30cb0-30f2-4f14-bbc6-13f27c380327)

          
      - 선택한 기간의 모든 데이터를 일별로 보여준다.
      - x축의 눈금 갯수

          기본적으로 눈금의 갯수(`tickCount`)를 7로 설정하여 보여지는 눈금 갯수에 통일성을 줌.
          
      - 코드
          
          `./src/routes/dashboard/integratedAd/graphTwoTypes/_shared/utils.ts`
          
          ```tsx
          const convertDailyData = (integratedAdInfo: IDay[], btn: Btn) =>
            integratedAdInfo?.map((day) => {
              return { x: day.date, y: Math.round(Array.isArray(btn) ? (day[btn[0]] * day[btn[1]]) / 100 : day[btn]) };
            });
          ```

</details>
<details>
  <summary>선택 시 반환할 데이터 계산</summary>

  - UI
    
    ![대시보드앱7](https://github.com/katej927/Algorithm/assets/69146527/aab992c7-812f-4733-aafd-196bff04c570)

    
  - 가공하는 데이터
      - 단위 값 (%, 원, 회)
  
      - 그래프에 보여줄 데이터 배열
      - y축 값 (y값 중의 최대값) 등
  - 코드
    
    `./src/routes/dashboard/integratedAd/graphTwoTypes/_shared/utils.ts`
    
    ```tsx
    const formatReturnData = (unitVal: string, integratedAdInfo: IDay[], btn: Btn, periodOption: PeriodOptions) => {
      const formatedData =
        periodOption === '일간' ? convertDailyData(integratedAdInfo, btn) : convertWeeklyData(integratedAdInfo, btn);
      return {
        unit: unitVal,
        formatedData,
        maxValue: formatedData && Math.max(...formatedData.map((obj: IFormatedData) => obj.y)),
      };
    };
    
    export const convertData = (integratedAdInfo: IDay[], btnOption: PrimaryOptions, periodOption: PeriodOptions) => {
      if (btnOption === 'ROAS') return formatReturnData('%', integratedAdInfo, 'roas', periodOption);
      if (btnOption === '광고비') return formatReturnData('원', integratedAdInfo, 'cost', periodOption);
      if (btnOption === '클릭 수') return formatReturnData('회', integratedAdInfo, 'click', periodOption);
      if (btnOption === '노출 수') return formatReturnData('회', integratedAdInfo, 'imp', periodOption);
      if (btnOption === '매출') return formatReturnData('원', integratedAdInfo, 'convValue', periodOption);
      if (btnOption === '전환 수') return formatReturnData('회', integratedAdInfo, ['cvr', 'click'], periodOption);
      return undefined;
    };
    ```

</details>

<details>
  <summary>첫 번째 드롭 다운에서 선택한 지표를 두번째 드롭다운(옵셔널)에서 선택 불가</summary>

  - UI
    
   <p align='center'>
<img src="https://github.com/katej927/Algorithm/assets/69146527/bc6038f3-3de1-4714-97dc-e543a890f156" width="300"></img>
<p>

    
  - 구현 이유
    
    1번째, 2번째 드롭 다운의 옵션들이 같기 때문에 서로 다른 옵션을 선택하도록 설정함.
    
  - 구현 방법
    
    `filter` 메소드 활용
    
  - 코드
    
    `./src/routes/dashboard/integratedAd/graphTwoTypes/_shared/utils.ts`
    
    ```tsx
    export const filterGraphOpt = (otherOpt: PrimaryOptions) => PRIMARY_OPTIONS.filter((option) => option !== otherOpt);
    
    export const filterPeriodOpt = (preiod: IPeriod) => {
      const { startDate, endDate } = preiod;
      const start = dayjs(startDate);
      const periodDiff = start.diff(endDate, 'd');
      return Math.abs(periodDiff) > 6 ? ['일간', '주간'] : ['일간'];
    };
    ```

</details>
<details>
  <summary>2가지 드롭 다운이 모두 선택될 경우, 그래프 우측에 y2 눈금자 제공</summary>

  - UI
    
    ![대시보드앱9](https://github.com/katej927/Algorithm/assets/69146527/54ee00ad-66a0-4e35-a85c-41b3ba0ce7a5)

    
  - 구현 이유
    
    2가지의 데이터를 선택했기 때문에 2가지의 y축 눈금으로 데이터를 수치화해서 정보를 보여준다.
    
  - 구현 방법
    
    y2축에 할당할 축(`VictoryAxis`)와 선(`VictoryLine` )을 key로 연결
    
  - 코드
    
    `./src/routes/dashboard/integratedAd/graphTwoTypes/index.tsx`
    
    ```tsx
    				(생략)
    				{secondOption !== '없음' && (
              <VictoryAxis
                dependentAxis
                key={secondOption}
                offsetX={960}
                tickFormat={(t) => {
                  return `${convertNumToUnit(t * (max2ndOption ?? 1) * 2)}${unit2ndOption}`;
                }}
                tickLabelComponent={<VictoryLabel verticalAnchor='start' textAnchor='start' {...properties.label2} />}
                {...properties.xAxis}
              />
            )}
    				(생략)
            {!isLoading && secondOption !== '없음' && (
              <VictoryLine
                key={secondOption}
                data={data2ndOption}
                y={(datum) => datum.y / ((max2ndOption ?? 1) * 2)}
                {...properties.line2}
              />
            )}
    				(생략)
    ```

</details>



2. 그래프

<details>
<summary>숫자 단위 변환</summary>

- UI
            
<p align='center'>
<img src="https://github.com/katej927/Algorithm/assets/69146527/442087f9-f709-49c1-a4ef-15638084b60f" width="180"></img>
<p>

- 값이 1만 이하일 경우

    반올림으로 소수점 제거 후, 천 단위마다 콤마(`,`) 형성
            
- 값이 1만~1조 일 경우
            
    한글 단위로 변환 (ex. 5백만원)
            
- 코드
            
   ```tsx
    export const convertNumToUnit = (num: number) => {
      if (num < 10000) {
        return Math.round(num)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
    
      const transUnit = [
        { value: 1e12, symbol: '조' },
        { value: 1e11, symbol: '천억' },
        { value: 1e10, symbol: '백억' },
        { value: 1e9, symbol: '십억' },
        { value: 1e8, symbol: '억' },
        { value: 1e7, symbol: '천만' },
        { value: 1e6, symbol: '백만' },
        { value: 1e5, symbol: '십만' },
        { value: 1e4, symbol: '만' },
        { value: 1e3, symbol: '천' },
      ];
      let i;
      for (i = 0; i < transUnit.length; i += 1) {
        if (num >= transUnit[i].value) {
          return (num / transUnit[i].value).toFixed(1).replace(/\.?0+$/, '') + transUnit[i].symbol;
        }
      }
      return num;
    };
   ```
</details>

<details>
<summary>툴팁 제공</summary>

> 그래프의 선을 hover하면 툴팁 확인 가능

- UI
            
    ![대시보드앱4](https://github.com/katej927/Algorithm/assets/69146527/fe439e16-e908-4694-8fd4-f9c5e25b2b49)

</details>

# 🚩 프로젝트 상세

> 🚀 **[Deploy Link](https://dashboard-app-1a.netlify.app/)**

[![Netlify Status](https://api.netlify.com/api/v1/badges/7b4f22e0-2eb5-4fb2-b8f2-1913259f1746/deploy-status)](https://app.netlify.com/sites/fancy-toffee-b37d4a/deploys)

>  🚀 **[Server Link](https://github.com/solchan98/wanted-madup-dashboard-app-1A-backend)**



매드업 선발 과제로 그래프를 이용한 마케팅 데이터 시각화 프로젝트입니다.

# ☑️ 요구 사항

1. 제시 된 [Figma ](https://www.figma.com/file/4LvAWqkU4ZMcI14MEZzJTx/Madup-X-Wanted-FE-PJT)디자인과 코멘트에 따른 화면 및 기능 구현
2. 임의적으로 Fetch 타임을 만들어 로딩화면 지원
3. 화면 이동 후 복귀 시 마지막 상태 유지

# 👤 팀원, 기간

- 팀원 : 박솔찬 신가은 이다슬 정선미 홍선영
- 기간 : 2022 / 05 / 22 ~ 2022 / 05 / 26

# ⚒️ 사용 기술, 라이브러리

- react , typescript, scss
- react-query
- recoil (전역 상태 관리)
- victory
- react-datepicker
- react-loading
- dayjs

<details>
  <summary>
<h1>💡실행 방법
</h1>
</summary>
  <div markdown="1">

   1. repository clone

        ```bash
        git clone https://github.com/wanted-pre-onboarding-FE-01/dashboard-app-1A.git
        ```
    
2. 해당 프로젝트 폴더로 이동
    
    ```bash
    cd dashboard-app-1A
    ```
    
3. 필요 package들 설치
    
    ```bash
    npm intall 
    or 
    yarn install
    ```
    
4. 프로젝트 실행
    
    ```bash
    npm start
    ```
  </div>
</details>

# 구현 기능

## 대시보드 페이지

### 1. **date picker**

- 구현사항
    - react-datepicker 라이브러리를 활용하여 커스텀
    - customHeader를 추가하여 현재 선택한(시작~끝) 날짜 표시
    - 선택한 날짜 적용 시 recoil 전역 상태로 저장

### 2. 통합 광고 현황

**광고 현황**

- 구현사항
  - 선택된 날짜의 통합 상태를 제공
  - 선택된 날짜의 데이터와 이전 날짜의 데이터를 통해 노출 데이터 계산
      - 비교를 통해 증감여부를 표현
  - 값의 단위에 따른 Unit 변환
      - 예로 메인 값이 ‘억'단위 일 때, 증감 여부의 값 단위가 ‘만'인 경우 0.1억 이런 식으로 치환
- 어려웠던 점
  - 값의 단위를 통일시키기 위한 유틸 작성을 위해 공통의 케이스를 찾기가 어려웠음
  - 선택된 날짜의 데이터를 계산하는 부분이 비교적 깔금하지 못함

**통합 광고 현황 그래프**

### 3. 매체 현황

**매체 현황 그래프**

[https://user-images.githubusercontent.com/79626675/170167392-a557045c-2612-4e9a-a3b2-2b96f94e690e.mov](https://user-images.githubusercontent.com/79626675/170167392-a557045c-2612-4e9a-a3b2-2b96f94e690e.mov)

- 구현 사항
  - `service/fetchMediaChannelData` : 선택된 날짜에 해당하는 데이터 api 호출
  - `util/formatMediaChannelGraph` : 반환된 데이터를 그래프 형식에 맞게 계산하여 반환
  - 소수점 3자리버림
  - 각 항목 별 값 tooltip에 표시
  - 그래프 렌더링 시 애니메이션
    
- 어려웠던 점
  - y축 항목들의 누적 값을 구한 후 전체 데이터에 해당하는 비율을 계산하는 것,
  - 툴팁에는 비율이 아닌 실제 데이터 값을 넣는 것이 복잡했다.

**매체 현황 테이블 차트** 

- 구현 사항
  - `util/formatMediaChannelTableData` 로부터 전달받은 데이터를 렌더링
  - 모니터 크기에 따른 횡스크롤 삽입

## 광고관리 페이지


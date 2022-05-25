export const transferUnit = (value: number, typeIsCnt = false, unit = 0): string => {
  const int = Number(value.toFixed(0)); // 혹시나 모를 소수점 값을 정수로 변환
  const strValue = String(int);
  switch (strValue.length) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5: {
      if (typeIsCnt && (unit >= 5 || strValue.length === 5)) {
        const tempValue = strValue.substring(0, strValue.length - 3);
        return `${(Number(tempValue) / 10).toFixed(1)}만`;
      }
      return int.toLocaleString();
    }
    case 6: {
      const tempValue = strValue.substring(0, strValue.length - 3);
      return `${(Number(tempValue) / 10).toFixed(1)}만`;
    }
    case 7:
    case 8: {
      const len = strValue.substring(strValue.length - 4).length;
      return unit >= 9 && strValue.length === 8 // ex) 4.5억 원의 prev는 0.4억 원
        ? `${(Number(`0${strValue}`.substring(0, 2)) / 10).toFixed(1)}억`
        : `${String(Number(strValue.substring(0, strValue.length - len)))}만`;
    }
    case 9: {
      return `${(Number(strValue.substring(0, 2)) / 10).toFixed(1)}억`;
    }
    case 10:
    case 11:
    case 12: {
      const len = strValue.substring(strValue.length - 8).length;
      return `${String(Number(strValue.substring(0, strValue.length - len)))}억`;
    }
    case 13: {
      return `${(Number(strValue.substring(0, 2)) / 10).toFixed(1)}조`;
    }
    case 14: {
      const len = strValue.substring(strValue.length - 12).length;
      return `${String(Number(strValue.substring(0, strValue.length - len)))}조`;
    }
    default:
      return int.toLocaleString();
  }
};

export const normalize = (investment) => {
  let accumulatedDeposits = 0;
  return investment.development.map((current) => {
    accumulatedDeposits += current.deposit;
    return [Date.parse(current.date), ((current.value / accumulatedDeposits) - 1) * 100];
  });
};

export const percentageDevelopmentDayToDay = investment =>
  investment.development.map((current, index, array) => {
    if (index === 0) {
      return 0.0;
    }
    return [Date.parse(current.date), (((current.value / array[index - 1].value) - 1) * 100)];
  });


export const monetary = investment =>
  investment.development.map(current => [Date.parse(current.date), current.value]);

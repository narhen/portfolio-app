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

export const getTotal = (investments) => {
  console.log(investments);
};

const getDepositByDate = (fond, date) => {
  const entry = fond.development.find(e => e.date === date);
  const emptyResult = {
    ticker: fond.ticker,
    deposit: '',
  };

  if (entry) {
    return Object.assign({}, emptyResult, { deposit: entry.deposit === 0 ? '' : entry.deposit });
  }
  return emptyResult;
};

export const groupDepositsByDate = (portfolio) => {
  const combined = portfolio.find(el => el.name === 'Portfolio');
  const fonds = portfolio.filter(el => el.name !== 'Portfolio');

  if (!combined || !fonds) {
    return [];
  }

  const res = combined.development.reduce((result, current) => {
    if (current.deposit <= 0) {
      return result;
    }
    return result.concat({
      date: current.date,
      deposits: fonds.map(fond => getDepositByDate(fond, current.date)),
    });
  }, []);

  return res;
};

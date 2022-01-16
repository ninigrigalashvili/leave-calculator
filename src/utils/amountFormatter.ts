export const amountFormatter = (amount) => {
  if (amount > 999 && amount < 999999) {
    return `${(amount / 1000)?.toFixed(2)}K` || 0;
  } else if (amount >= 999999) {
    return `${(amount / 1000000)?.toFixed(2)}M` || 0;
  }

  return amount ? `${amount?.toFixed(2)}` : 0;
};

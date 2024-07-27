export const formatCurrency = (amount: string | number): string=> {
  const options = { style: "currency", currency: "RUB" as const,  minimumFractionDigits: 0 };
  const currencyFormat = new Intl.NumberFormat("ru-RU", options as Intl.NumberFormatOptions);
  return typeof amount === "string" ? currencyFormat.format(+amount) : currencyFormat.format(amount);
}
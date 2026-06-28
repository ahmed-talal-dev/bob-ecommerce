const EGP_FORMATTER = new Intl.NumberFormat("ar-EG", {
  style: "currency",
  currency: "EGP",
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

export function formatCurrency(amountEgp: number): string {
  return EGP_FORMATTER.format(amountEgp);
}

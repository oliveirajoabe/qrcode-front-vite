export function formatDate(isoString: Date) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false, // Usa formato 24h
  })
    .format(new Date(isoString))
    .replace(",", " às");
}

export function copyToClipboard(text: string) {
  return navigator.clipboard
    .writeText(text)
    .then(() => true)
    .catch((err) => console.error("Erro ao copiar:", err));
}

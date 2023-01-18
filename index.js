// method to format zip code
function formatCep(value) {
  // remove characters, leave only numbers
  return String(value)
    .replace(/\D/g, "")
    .slice(0, 8)
    .replace(/(\d{5})(\d)/, "$1-$2");
}
// method to format CPF
function formatCPF(cpf) {
    // remove unwanted characters and perform formatting
    return String(cpf)
    .replace(/[^\d]/g, "")
    .slice(0, 11)
    .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

module.exports = {
  formatCep,
  formatCPF,
};

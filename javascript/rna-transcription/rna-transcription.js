export const toRna = (dato) => {
  return dato.replace(validLettersRegex, (nuc) => nucleotideComplements[nuc]);
};

const nucleotideComplements = {"G": "C", "C": "G", "T": "A", "A": "U"};
const validLettersRegex = /[GCTA]/g;
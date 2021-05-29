
export const isPangram = (letra) => {
  const lowerCaseString = letra.toLowerCase()
	return alfa.every((char) => lowerCaseString.includes(char));

};

const alfa = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'c',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
];
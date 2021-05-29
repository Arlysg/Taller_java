
export const decodedValue = (two_colors) => {

  let indice_1 = Colors.indexOf(two_colors [0]);
  let indice_2 = Colors.indexOf(two_colors [1]);

  return +`${indice_1}${indice_2}`;

  
};

export const Colors =[
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];

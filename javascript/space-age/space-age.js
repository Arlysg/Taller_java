
export const age = (planet, seconds) => {
  var orbitalPeriod;

  const solarsystem = {
      earth : 1,
      mercury : 0.2408467,
      venus : 0.61519726,
      mars : 1.8808158, 
      jupiter : 11.862615, 
      saturn : 29.447498, 
      uranus : 84.016846,
      neptune : 164.79132
  }
  orbitalPeriod = solarsystem[planet];

  return parseFloat((seconds / 31557600 / orbitalPeriod).toFixed(2));

};

var ageVal = age('mercury',2134835688);
console.log(ageVal, typeof(ageVal));
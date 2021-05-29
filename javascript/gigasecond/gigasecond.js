

export function gigasecond(date) {
  const gigasecond = 1000000000;
  return new Date(date.getTime() + gigasecond * 1000);
}

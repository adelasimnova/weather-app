export function getIconURL(weatherIcon: number): string {
  const iconNumberStringified = ("0" + weatherIcon).slice(-2);
  return `https://developer.accuweather.com/sites/default/files/${iconNumberStringified}-s.png`;
}

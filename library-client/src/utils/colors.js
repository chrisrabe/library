const colors = {
  primary: '#8EA8B4',
  secondary: '#ECAA4A',
  dark: '#493E3C',
  darkAccent: '#A77258',
  light: '#F8F8F5',
  success: '#D6D981',
  bg: '#516168',
};

export const getBookColor = () => {
  const colorChance = Math.round(Math.random() * 100);
  if (colorChance >= 0 && colorChance < 25) {
    return colors.light;
  } else if (colorChance >= 25 && colorChance < 50) {
    return colors.darkAccent;
  } else if (colorChance >= 50 && colorChance < 75) {
    return colors.primary;
  } else {
    return colors.secondary;
  }
};

export default colors;

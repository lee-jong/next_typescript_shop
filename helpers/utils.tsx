export const dotdotdot = (text : String , maxLength = 96) => {
  if (text.length > maxLength) {
    return `${text.substring(0, maxLength)}...`;
  }
  return text;
};

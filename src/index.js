module.exports = function check(str, bracketsConfig) {
  let stack = [];

  const OPEN_BRACKETS = ['(', '{', '[', '|', '1', '3', '5', '7', '8'];
  const double_brackets = ['|', '7', '8'];
  let pairObj = {};

  bracketsConfig.forEach((item) => {
    pairObj[item[1]] = item[0];
  });
  
  for (let i = 0; i < str.length; i++) {

    let top = stack[stack.length - 1];

    if (OPEN_BRACKETS.includes(str[i])) {

      if (stack.includes(str[i]) && double_brackets.includes(str[i])) {
        stack.pop(top);
      }
      else {
        stack.push(str[i]);
      }
      
    } else if (stack.length !== 0) {

      if (pairObj[str[i]] === top) {
        stack.pop(top);
      } else return false;
       
    } else if (stack.length === 0) {
      return false;
    }
  }

  return stack.length === 0 ? true : false;
}

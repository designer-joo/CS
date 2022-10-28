function checkNumber(event) {
    if(event.key === '.' 
       || event.key === '-'
       || event.key >= 0 && event.key <= 9) {
      return true;
    }
    alert("숫자만 입력해주세요.")
    return false;
  }
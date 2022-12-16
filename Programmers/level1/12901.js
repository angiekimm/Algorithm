function solution(a, b) {
    const monthOfDays = {
        1: 31, 2: 29, 3: 31, 4: 30, 5: 31, 6: 30, 7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31
    }
    const week = ['THU','FRI','SAT','SUN','MON','TUE','WED'];
    let days = b;
    for(let i=1; i<a; i++) {
        days += monthOfDays[i];
    }
    return week[days%7];
    
    // solution #2
  //   var arr = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
  //   var date = new Date(`2016-${a}-${b}`);
  // var day = date.getDay()
  //   return arr[day];
}
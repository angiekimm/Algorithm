function solution(today, terms, privacies) {
    var answer = [];
    
    // 약관 종류 별 유효기간 저장
    let termsDic = {};
    terms.forEach((e) => {
        let [type, month] = e.split(' ');
        termsDic[type] = Number(month) * 28;
    });
    
    // 오늘 일자
    const curDay = calcDate(today);
    // 개인정보별 유효기간 체크 
    privacies.forEach((e,i) => {
        let [collectDay, type] = e.split(' '); // [수집 일자, 약관 종류]
        collectDay = calcDate(collectDay);
        if (curDay >= collectDay + termsDic[type]) answer.push(i+1); // 날짜가 지났다면 번호 추가
    });
    return answer;
}

// 날짜를 일자로 계산
function calcDate(date) {
    return date.split('.').map((e,i) => {
        if (i === 0) return Number(e) * 12 * 28;
        else if (i === 1) return Number(e) * 28;
        else return Number(e);
    }).reduce((acc, cur) => acc + cur, 0);
}
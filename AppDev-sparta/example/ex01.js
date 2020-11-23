let fruit_list = ['사과', '감', '감', '배', '포도', '포도', '딸기', '포도', '감', '수박', '딸기']

let count = 0;
fruit_list.map((value, i) => {
    if (value == '딸기') {
        count++;
    }
})

console.log(`딸기의 갯수는 ${count}개 입니다.`);

// ----------------

function checkEmail(email) {
    var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (email.match(regExp) != null) {
        console.log('이메일이 맞습니다');
    } else {
        console.log('이메일이 아닙니다');
    }
}

// ----------------

checkEmail('gunhee21@gmail.com') // 이메일이 맞습니다
checkEmail('gunhee21$gmail.com') // 이메일이 아닙니다.
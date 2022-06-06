document.querySelector('#pwdCheck').onblur = isEqualPwd;
const pwdAlert = document.querySelector('.idpwdAlert');

document.memberFrm.onsubmit = function () {
  const userId = document.getElementById('userId');
  const pwd = document.getElementById('pwd');
  const pwdCheck = document.getElementById('pwdCheck');
  const nickName = document.getElementById('nickName');

  // 아이디
  const regExp1 = /^[a-z][a-z\d]{3,9}$/;
  if(!regExpTest(regExp1, userId, "영어소문자로 시작하는 4 ~ 10글자를 입력해주세요.(숫자포함)"))
    return false;

  // 비밀번호
  const regExp2 = /^\S{6,12}$/;
  const regExp3 = /\d+/;
  const regExp4 = /[a-zA-z]/i;
  const regExp5 = /[~!@#$%\\^&*]+/;
  if(!regExpTest(regExp2, pwd, "공백을 미포함한 6 ~ 12자리를 입력해주세요"))
    return false;
  if(!regExpTest(regExp3, pwd, "숫자가 1개이상 포함되어야합니다."))
    return false;
  if(!regExpTest(regExp4, pwd, "영어가 1개이상 포함되어야합니다."))
    return false;
  if(!regExpTest(regExp5, pwd, "특수문자(~!@#$%\^&* 1개이상 포함되어야합니다."))
    return false;

  // 비밀번호 검사
  if(!isEqualPwd()){
    return false;
  }

  // 닉네임
  const regExp6 = /^[\S][a-z\d가-힣]{2,8}$/i;
  if(!regExpTest(regExp6, nickName, "공백을 미포함한 2 ~ 8글자를 입력해주세요. 특수문자 불가")){
    return false;
  }

  // 아이디 중복 확인
  if(!idCheckMemberbook()){
    return false;
  };
  // 닉네임 중복 확인
  if(!nickCheckMemberbook()){
    return false;
  };
  
  alert('회원가입 완료!');
  window.open('./login.html', 'loginpage');
  pwdAlert.innerHTML = '';
};


function isEqualPwd() {
  if (pwd.value == pwdCheck.value) {
    pwdAlert.innerHTML = `&#9989; 비밀번호가 일치합니다.`;
    return true;
  } else {
    pwd.select();
    pwdAlert.innerHTML = `&#10060; 비밀번호가 일치하지 않습니다!`;
    return false;
  }
};

function regExpTest(regExp, el, msg) {
  if(regExp.test(el.value)) return true;
  alert(msg);
  el.select();
  return false;
};


class Memberbook {
  constructor (userId, pwd, nickName, signdate = Date.now()){
    this.userId = userId;
    this.pwd = pwd;
    this.nickName = nickName;
    this.signdate = signdate;
    }
}

// storage에 저장
const saveMemberbook = () => {
  const userIdVal = userId.value;
  const pwdVal = pwd.value;
  const nickNameVal = nickName.value;
  
  const memberbook = new Memberbook(userIdVal, pwdVal, nickNameVal);

  const memberbooks = JSON.parse(localStorage.getItem('memberbooks')) || [];
  memberbooks.push(memberbook);

  const data = JSON.stringify(memberbooks);
  localStorage.setItem('memberbooks', data);
  document.memberFrm.reset();
};

// id 중복확인
function idCheckMemberbook(){
  checkId = userId.value;
  const memberbooks = JSON.parse(localStorage.getItem('memberbooks'));
  if(!memberbooks) return true;
  let available = true;
  memberbooks
    .forEach((memberbook) => {
      const {userId} = memberbook;
      if(checkId == userId){
        alert('이미 사용중인 아이디입니다.');
        available = false;
      }
    });
    return available;
};
// 닉네임 중복확인
function nickCheckMemberbook(){
  checkNickName = nickName.value;
  const memberbooks = JSON.parse(localStorage.getItem('memberbooks'));
  if(!memberbooks) return true;
  let available = true;
  memberbooks
    .forEach((memberbook) => {
      const {nickName} = memberbook;
      if(checkNickName == nickName){
        alert('이미 사용중인 닉네임입니다.');
        available = false;
      }
    });
    return available;
};

// 올해년도
const yyyy = new Date().getFullYear();
document.querySelector('#thisYear').innerHTML += yyyy;
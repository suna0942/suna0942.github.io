const idpwdAlert = document.querySelector('.idpwdAlert');
document.login.onsubmit = function () {
  const userId = document.getElementById('userId');
  const pwd = document.getElementById('pwd');

  // 아이디 유무 검사
  if(!isExistId()){
    idpwdAlert.innerHTML = `&#10060; 존재하지 않는 아이디입니다.`;
    return false;
  }  

  // 비밀번호 일치 검사
  if(!isEqualPwd()){
    idpwdAlert.innerHTML = `&#10060; 일치하지 않는 비밀번호입니다.`;
    return false;
  }

  alert('로그인 성공!');
};

function isExistId(){
  checkId = userId.value;
  const memberbooks = JSON.parse(localStorage.getItem('memberbooks'));
  if(!memberbooks) return true;
  let exist = false;
  memberbooks
    .forEach((memberbook) => {
      const {userId} = memberbook;
      if(checkId == userId){
        exist = true;
      }
    });
  return exist;
};

function isEqualPwd() {
  checkId = userId.value;
  checkPwd = pwd.value;
  const memberbooks = JSON.parse(localStorage.getItem('memberbooks'));
  if(!memberbooks) return true;
  let exist = false;
  memberbooks
    .forEach((memberbook) => {
      const {userId, pwd} = memberbook;
      if (checkId == userId && checkPwd == pwd) {
        exist = true;
      }
    });
  return exist;
};


// 올해년도
const yyyy = new Date().getFullYear();
document.querySelector('#thisYear').innerHTML += yyyy
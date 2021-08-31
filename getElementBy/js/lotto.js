window.addEventListener('load', function () {
  document.getElementsByTagName('button')[0].addEventListener('click', function () {
    let lottoNum = [];
    let bonus = 0;
    for(let i = 0;i<7;i++){
      let flag = true;
      var randomNum = Math.floor(Math.random()*45)+1;
      for(let j = 0;j<45;j++){
        if(lottoNum[j] == randomNum) flag = false;
      }
      if(flag){
        if(i == 6) bonus = randomNum;
        else lottoNum.push(randomNum);
      }else{
        i--;
      }
    }
    document.getElementById('lottoNum').innerHTML = "추첨번호 : " + lottoNum.join(',');
    document.getElementById('bonusNum').innerHTML = "보너스번호 : " + bonus;
  });
});

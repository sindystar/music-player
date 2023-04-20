const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");
const audio = document.querySelectorAll("audio");

let i = 0;
let num = 0;
const deg = 45;
let active = 0;
const len = lists.lenth - 1;

//article의 갯수 믾큼 반복을 돌면서 
for (let el of lists) {
  //article의 위치값을 설정 => 45회전 하는 것들로 
  el.style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;
  // 각 article의 .pic에 백그라운드 이미지 넣을것
  let pic = el.querySelector(".pic");
  pic.style.backgroundImage = `url(img/member${i + 1}.jpg)`;
  i++;

  const play = el.querySelector(".play");
  const pause = el.querySelector(".pause");
  const load = el.querySelector(".load");

  play.addEventListener("click", (e) => {
    //클릭한 버튼의(play)의 부모를 찾아서 활성화(on) 되어 있는지를 판별해서 변수로 저장(boolean)
    let isActive = e.currentTarget.closest("article").classList.contains("on");

    if (isActive) {
      //클릭한 타겟의(이벤트리스터가 붙은 대상)가장 가까이 있는 아티클을 찾은후, 그안에 있는 .pic찾고 여기에 on을 붙인다
      e.currentTarget.closest("article").querySelector("pic").classList.add("on");
      el.querySelector("audio").play();
    }
  });

  //일시 정지 버튼 

  load.addEventListener("click", (e) => {
    let.isActive = e.currentTarget.closest("article").classList.contains("on");
    if (isActive) {
      //클릭한 타겟의(이벤트 리스너가 붙은 대상)가장 가까이 있는 아티클을 찾은후, 그안에 있는 .pic찾고 여기에 on을 붙인다.
      e.currentTarget.closest("article").querySelector(".pic").classList.add("on");
      el.querySelector("audio").load();
    }
  })
}

prev.addEventListener("click", () => {
  initMusic();
  num++;
  frame.style.transform = `rotate(${num * dog}deg)`;
})
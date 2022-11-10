const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  clock.innerText = new Date().toLocaleTimeString();
  // const hours = String(date.getHours()).padStart(2, "0");
  // const minutes = String(date.getMinutes()).padStart(2, "0");
  // const seconds = String(date.getSeconds()).padStart(2, "0");
  // clock.innerText = `${hours}:${minutes}:${seconds}`;
  // clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
getClock();
setInterval(getClock, 1000);

// intervals & timeout
// intervals : 매번 일어나는 사건
// setInterval(1:실행하고자하는 function, 2:function 실행간격ms)
// setInterval(sayHello, 5000); 콘솔에 5초마다 Hello가 찍힘
//setTimeout(sayHello, 5000); 콘솔에 5초에 한번 찍힘

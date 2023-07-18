let a=prompt("Enter the wifi name that you want to tackle")
let para1 = document.querySelector(".one");
let para2 = document.querySelector(".two");
let para3 = document.querySelector(".three");
let para4 = document.querySelector(".four");
let para5 = document.querySelector(".five");
let para6 = document.querySelector(".six");
let para7 = document.querySelector(".seven");
let para8 = document.querySelector(".eight");
let para9 = document.querySelector(".nine");
let para10 = document.querySelector(".ten");
const p0 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      para1.innerText = "Initializing Hack Program......";
      resolve();
    }, 1000);
  });
};

const p1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      para2.innerText = "Hacking Target device:Realme 6 pro......";
      resolve();
    }, 2000);
  });
};
const p2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      para3.innerText = "Connecting to instagram database......";
      resolve();
    }, 4000);
  });
};
const p3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      para4.innerText =
        "Getting response from Instagram database......Please Wait";
      resolve();
    }, 6000);
  });
};
const p4 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      para5.innerText = `Hacking ${a} PasswordXXXXXXX......Please Wait`;
      resolve();
    }, 8000);
  });
};
const p5 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      para6.innerText = "Login crediantials successfully fetched......";
      resolve();
    }, 10000);
  });
};
const p6 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      para7.innerText = "De-salting Password in 10 Minutes......Please Wait";
      resolve();
    }, 11000);
  });
};
const p7 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      para8.innerText = "Desalination Succcess ......";
      resolve();
    }, 15000);
  });
};
const p8 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      para9.innerText = "Login crediantials successfully saved in shell//45";
      resolve();
    }, 18000);
  });
};

const run = async () => {
  await p0();
  await p1();
  await p2();
  await p3();
  await p4();
  await p5();
  await p6();
  await p7();
  await p8();
};
run();

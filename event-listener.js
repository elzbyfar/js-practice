const clicker = document.querySelector('button')

console.log(clicker)
const counter = {
  cnt: 0, 
  inc() {
    counter.cnt += 1;
    console.log(counter.cnt);
  }
};

clicker.addEventListener('click', counter.inc, )

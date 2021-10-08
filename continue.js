let i = 0;
let n = 0;
while (i < 5) {     //i=0,1,2
  i++;
  if (i === 3) {
    continue;
  }
  n += i;     //n=0,1
  console.log(n);
}
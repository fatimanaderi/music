const d = new Date();
let newyear = d.getFullYear();
let years:{name:string}[] = [];
let i = newyear - 10;
while (i < newyear) {
  years.push({ name: `${i}` });
  i++;
}

export default years;

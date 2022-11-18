const toFixedOne = (n) => Number(n).toFixed(1).replace('.0','');

const print = (i) => {
  const I = toFixedOne(i);
  const J1 = toFixedOne(i + 1);
  const J2 = toFixedOne(i + 2);
  const J3 = toFixedOne(i + 3);
  console.log(`I=${I} J=${J1}`);
  console.log(`I=${I} J=${J2}`);
  console.log(`I=${I} J=${J3}`);
}

const func = (i = 0) => {
  print(i);
  i += 0.2;

  if (i <= 2) {
    func(i);
  }
}

func();
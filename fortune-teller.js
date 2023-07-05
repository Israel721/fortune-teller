const rng = () => {
  return Math.floor(Math.random() * 5);
};

const fortuneTeller = () => {
  switch(rng()) {
    case 0:
      return "Maybe... but probably not bud.";
    case 1:
      return "Not a chance!";
    case 2:
      return "If you keep grinding you'll have a good chance";
    case 3:
      return "Oh! Definitely!";
    case 4:
      return "Ask again later";
  }
};

console.log(fortuneTeller(rng()));
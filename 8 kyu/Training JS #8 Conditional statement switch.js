function howManydays(month) {
  let days;
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12: {
      days = 31;
      break;
    }

    case 4:
    case 6:
    case 9:
    case 11: {
      days = 30;
      break;
    }

    case 2: {
      days = 28;
      break;
    }
    default: {
      days = "Wrong month!";
      break;
    }
  }

  return days;
}

console.log(howManydays(5));
console.log(howManydays(9));
console.log(howManydays(2));
console.log(howManydays(13));

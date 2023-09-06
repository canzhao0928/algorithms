// Have the function BlackjackHighest(strArr) take the strArr parameter being passed which will be an array of numbers and letters representing blackjack cards. Numbers in the array will be written out. So for example strArr may be [“two”,”three”,”ace”,”king”]. The full list of possibilities for strArr is: two, three, four, five, six, seven, eight, nine, ten, jack, queen, king, ace. Your program should output below, above, or blackjack signifying if you have blackjack (numbers add up to 21) or not and the highest card in your hand in relation to whether or not you have blackjack. If the array contains an ace but your hand will go above 21, you must count the ace as a 1. You must always try and stay below the 21 mark. So using the array mentioned above, the output should be below king. The ace is counted as a 1 in this example because if it wasn’t you would be above the 21 mark. Another example would be if strArr was [“four”,”ten”,”king”], the output here should be above king. If you have a tie between a ten and a face card in your hand, return the face card as the “highest card”. If you have multiple face cards, the order of importance is jack, queen, then king.

// It sounds a bit confusing at first glance, but if you know how to play blackjack, the rules make sense, particularly the rules surrounding aces. Here are some test cases:

// Input = “four”,”ace”,”ten”; Output = “below ten”
// Input = “ace”,”queen”; Output = “blackjack ace”

function BlackjackHighest(strArr) {
  const cardValue = {
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    jack: 10,
    queen: 10,
    king: 10,
    ace: 11,
  };
  const faceCard = {
    ten: 1,
    jack: 2,
    queen: 3,
    king: 4,
  };

  let point = 0;
  let aceCount = 0;
  let biggest = 0;

  for (let i = 0; i < strArr.length; i++) {
    point += cardValue[strArr[i]];
    if (strArr[i] === "ace") {
      aceCount++;
    } else {
      if (biggest === 0 || cardValue[strArr[i]] > cardValue[biggest]) {
        biggest = strArr[i];
      } else if (
        cardValue[strArr[i]] === cardValue[biggest] &&
        faceCard[biggest] &&
        faceCard[strArr[i]] > faceCard[biggest]
      )
        biggest = strArr[i];
    }
  }

  let highest = aceCount ? "ace" : biggest;
  if (point < 21) {
    return "below " + highest;
  } else if (point === 21) {
    return "blackjack " + highest;
  } else {
    let newPoint = point;
    for (let count = aceCount; count > 0; ) {
      newPoint -= 10;
      count--;
      let highest2 = count ? "ace" : biggest;
      if (newPoint < 21) {
        return "below " + highest2;
      } else if (newPoint === 21) {
        return "blackjack " + highest2;
      }
    }
    return "above " + biggest;
  }
}

console.log(BlackjackHighest(["four", "ace", "ten"]));
console.log(BlackjackHighest(["ace", "queen"]));
console.log(BlackjackHighest(["ace", "ace", "king"]));
console.log(BlackjackHighest(["ace", "ten", "king"]));
console.log(BlackjackHighest(["king", "ten", "ace"]));

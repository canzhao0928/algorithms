// var addTwoNumbers = function (l1, l2) {
//   const length = l1.length - l2.length ? l1.length : l2.length;
//   const sums = [];
//   let carry = 0;

//   for (let index = 0; index < length; index++) {
//     if (l1[index] === undefined) l1[index] = 0;
//     if (l2[index] === undefined) l2[index] = 0;
//     let sum = l1[index] + l2[index] + carry;
//     if (carry !== 0) {
//       carry = 0;
//     }
//     if (sum >= 10) {
//       sum = sum - 10;
//       carry = 1;
//     }
//     sums.push(sum);
//   }
//   if (carry === 1) sums.push(1);
//   return sums.reverse();
// };

// console.log(sum);

//Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
// var addTwoNumbers = function (l1, l2) {
//   let carry = 0;
//   const head = new ListNode();
//   let iter = head;
//   let n = 0;
//   while (l1 || l2) {
//     let sum = 0;
//     if (!l1) {
//       sum = l2.val + carry;
//       l2 = l2.next;
//     } else if (!l2) {
//       sum = l1.val + carry;
//       l1 = l1.next;
//     } else {
//       sum = l1.val + l2.val + carry;
//       l1 = l1.next;
//       l2 = l2.next;
//     }
//     if (carry !== 0) {
//       carry = 0;
//     }
//     if (sum >= 10) {
//       sum = sum - 10;
//       carry = 1;
//     }
//     if (n === 0) {
//       iter.val = sum;
//     } else {
//       iter.next = new ListNode(sum);
//       iter = iter.next;
//     }
//     n++;
//   }
//   if (carry !== 0) {
//     iter.next = new ListNode(1);
//   }
//   return head;
// };

//refactor
var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  const head = new ListNode();
  let iter = head;
  let n = 0;
  while (l1 || l2 || carry != 0) {
    let sum = (l1?.val || 0) + (l2?.val || 0) + carry;
    l1 = l1?.next;
    l2 = l2?.next;
    carry = Math.floor(sum / 10);
    if (n === 0) {
      iter.val = sum % 10;
    } else {
      iter.next = new ListNode(sum % 10);
      iter = iter.next;
    }
    n++;
  }
  return head;
};
// const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
// const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
// const l1 = new ListNode(0);
// const l2 = new ListNode(0);
const l1 = new ListNode(
  9,
  new ListNode(
    9,
    new ListNode(
      9,
      new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))
    )
  )
);
const l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));
// const sum = addTwoNumbers(l1, l2);

let iter = new ListNode();
for (i = 4; i > 0; i--) {
  if (iter.next === null && iter.val === 0) {
    iter.val = i;
  } else {
    iter = new ListNode((iter.val, new ListNode(i)));
  }
  console.log(iter);
}

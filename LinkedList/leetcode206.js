// Reverse Linked List
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
// var reverseList = function (head) {
//   let tail = null;
//   let initial = true;
//   while (head) {
//     if (initial) {
//       tail = new ListNode(head.val);
//       initial = false;
//     } else {
//       tail = new ListNode(head.val, tail);
//     }
//     head = head.next;
//   }
//   return tail;
// };

//refactor
var reverseList = function (head) {
  let prev = null;
  let cur = head;
  while (cur) {
    const next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
};

const head = new ListNode(1, new ListNode(2, new ListNode(3)));

reverseList(head);

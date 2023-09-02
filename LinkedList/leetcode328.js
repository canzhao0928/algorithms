// 328. Odd Even Linked List
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var oddEvenList = function (head) {
  let oddList = new ListNode(0);
  let evenList = new ListNode(0);
  let cur = head;
  let odd = oddList;
  let even = evenList;
  while (cur && cur.next) {
    odd.next = cur;
    even.next = cur.next;
    odd = odd.next;
    even = even.next;
    cur = cur.next.next;
  }
  if (cur) {
    odd.next = cur;
    odd = odd.next;
    even.next = null;
  }
  //connect two lists
  odd.next = evenList.next;
  console.log(oddList.next);
  return oddList.next;
};

const head = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);
oddEvenList(head);

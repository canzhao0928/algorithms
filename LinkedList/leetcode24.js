// Swap Nodes in Pairs
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var swapPairs = function (head) {
  if (head === null || head.next === null) return head;
  const newList = new ListNode(0, head);
  pre = newList;
  while (pre.next && pre.next.next) {
    const a = pre.next.next;
    const b = pre.next;
    pre.next = a;
    b.next = a.next;
    a.next = b;
    pre = pre.next.next;
  }
  // console.log(newList);
  return newList.next;
};

const head = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, null)))
);

swapPairs(head);

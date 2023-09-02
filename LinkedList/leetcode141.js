// 141. Linked List Cycle

//set a timer
var hasCycle = function (head) {
  let cur = head;
  const startTime = Date.now();
  while (Date.now() - startTime < 5) {
    if (cur === null) return false;
    cur = cur.next;
  }
  return true;
};

//cpmpare the speed
var hasCycle = function (head) {
  let fast = head;
  let slow = head;
  while (fast && slow && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      return true;
    }
  }
  return false;
};

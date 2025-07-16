// ListNode class (Never changes)
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Helper function to create a linked list from an array (Never changes)
function createLinkedList(arr) {
  let dummy = new ListNode(0);
  let current = dummy;
  for (let num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }
  return dummy.next;
}

// Helper function to print a linked list (for debugging) (Never changes)
function printLinkedList(head) {
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  console.log(arr.join(" -> "));
}

// Your actual solution class (only this changes based on question)
class Solution {
  reverseList(head) {
    if (!head) return null;

    let previous = null;
    let current = head;

    while (current) {
      let nextNode = current.next;
      current.next = previous;
      previous = current;
      current = nextNode;
    }
    return previous;
  }
}

// Testing
const sol = new Solution();
let head = createLinkedList([1, 2, 3, 4, 5]);
let reversedHead = sol.reverseList(head);
printLinkedList(reversedHead);

// Definition for Doubly Linked List Node
class ListNode {
  constructor(val = 0, next = null, prev = null) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}

class Solution {
  /**
   * @param {ListNode} list1
   * @param {ListNode} list2
   * @return {ListNode}
   */
  mergeTwoLists(list1, list2) {
    // let array = [];
    // let list1Current = list1;
    // let list2Current = list2;
    // while (list1Current) {
    //   let nextNode = list1Current.next;
    //   array.push(list1Current.val);
    //   list1Current = nextNode;
    // }
    // while (list2Current) {
    //   let nextNode = list2Current.next;
    //   array.push(list2Current.val);
    //   list2Current = nextNode;
    // }
    // array.sort();
    // let dummy = new ListNode(0);
    // let current = dummy;
    // for (let num of array) {
    //   let nextNode = new ListNode(num);
    //   current.next = nextNode;
    //   current = nextNode;
    // }
    // return dummy.next;

    if (!list1) return list2;
    if (!list2) return list1;

    const dummy = { val: 0, next: null };
    let node = dummy;

    while (list1 && list2) {
      if (list1.val < list2.val) {
        node.next = list1;
        list1 = list1.next;
      } else {
        node.next = list2;
        list2 = list2.next;
      }
      node = node.next;
    }

    if (list1) {
      node.next = list1;
    } else {
      node.next = list2;
    }

    return dummy.next;
  }
}

// Helper function to create a doubly linked list from array
function createDoublyLinkedList(arr) {
  let dummy = new ListNode();
  let current = dummy;
  for (let num of arr) {
    let newNode = new ListNode(num);
    current.next = newNode;
    newNode.prev = current;
    current = current.next;
  }
  let head = dummy.next;
  if (head) head.prev = null; // remove dummy reference
  return head;
}

// Helper function to print a doubly linked list
function printDoublyLinkedList(head) {
  let output = [];
  while (head) {
    output.push(head.val);
    head = head.next;
  }
  console.log(output.join(" <-> "));
}

// Example Usage:
const list1 = createDoublyLinkedList([1, 3, 5]);
const list2 = createDoublyLinkedList([2, 4, 6]);

const solution = new Solution();
const merged = solution.mergeTwoLists(list1, list2);

printDoublyLinkedList(merged);

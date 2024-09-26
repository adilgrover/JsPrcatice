// https://leetcode.com/problems/palindrome-linked-list/description/    leetcode 234

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// Input: head = [1,2,2,1]
// Output: true


class ListNode {
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
  }
const head = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1))));


console.log("test",head);













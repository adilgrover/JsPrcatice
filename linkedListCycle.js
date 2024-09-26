// https://leetcode.com/problems/linked-list-cycle/description/


// https://www.youtube.com/watch?v=wDgDAOVqhhA&t=166s



// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached 
// again by continuously following the next pointer. Internally, pos is used to denote the index of the node 
// that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Implements Floyd's Tortoise and Hare algorithm to detect a cycle.

// let slow = head; // Tortoise
//     let fast = head; // Hare
  

// solved directly on leetcode 
// bus ek while loop leni hai with condition fast && fast.next 

// jab fast slow ke barabar ho gya toh true warna false
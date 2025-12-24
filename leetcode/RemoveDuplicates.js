import { ListNode } from './data/ListNode.js';
import { createLinkedList, printLinkedList } from './util/NodeUtil.js';

function removeDuplicates(head) {
  if (head === null || head === undefined) return head;

  let tmp = head;
  while (tmp !== null) {
    let next = tmp.next;

    while (next !== null && tmp.val === next.val) {
      next = next.next;
    }

    tmp.next = next;
    tmp = tmp.next;
  }

  return head;
}

const head = createLinkedList([1, 1, 2]);
removeDuplicates(head);
printLinkedList(head);

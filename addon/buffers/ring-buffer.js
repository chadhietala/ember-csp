import {EMPTY, acopy} from '../utils/index';

export function RingBuffer(head, tail, length, array) {
    this.head = head;
    this.tail = tail;
    this.length = length;
    this.array = array;
}

RingBuffer.prototype = {
  pop: function () {
    var array = this.array,
      tail = this.tail,
      item;

    if (this.length === 0) {
      return EMPTY;
    }

    item = array[tail];
    array[tail] = null;
    this.tail = (tail + 1) % array.length;
    this.length--;
    return item;
  },

  unshift: function(item) {
    var array = this.array,
        head = this.head;
    array[head] = item;
    this.head = (head + 1) % array.length;
    this.length++;
  },

  unboundedUnshift: function(item) {
    if (this.length + 1 === this.array.length) {
      this.resize();
    }
    this.unshift(item);
  },

  resize: function() {
    var array = this.array,
        newArraySize = array.length * 2,
        newArray = new Array(newArraySize),
        head = this.head,
        tail = this.tail,
        length = this.length;

    if (tail < head) {
      acopy(array, tail, newArray, 0, length);
      this.tail = 0;
      this.head = length;
      this.array = newArray;
    } else if (tail > head) {
      acopy(array, tail, newArray, 0, array.length - tail);
      acopy(array, 0, newArray, array.length - tail, head);
      this.tail = 0;
      this.head = length;
      this.array = newArray;
    } else if (tail === head) {
      this.tail = 0;
      this.head = 0;
      this.array = newArray;
    }
  },

  cleanup: function(predicate) {
    var length = this.length;
    for (var i = 0; i < length; i++) {
      var item = this.pop();
      if (predicate(item)) {
        this.unshift(item);
      }
    }
  }
};
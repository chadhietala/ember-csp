import { RingBuffer } from './buffers/ring-buffer';
import { FixedBuffer } from './buffers/fixed-buffer';
import { SlidingBuffer } from './buffers/sliding-buffer';
import { DroppingBuffer } from './buffers/dropping-buffer';

var ring = function ringBuffer(n) {
  return new RingBuffer(0, 0, 0, new Array(n));
}

var fixed = function fixedBuffer(n) {
  return new FixedBuffer(ring(n), n);
};

var sliding = function slidingBuffer(n) {
  return new SlidingBuffer(ring(n), n);
};

var dropping = function droppingBuffer(n) {
  return new DroppingBuffer(ring(n), n);
}

export { ring, fixed, sliding, dropping };
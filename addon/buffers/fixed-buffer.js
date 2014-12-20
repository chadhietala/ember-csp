export function FixedBuffer (buf, n) {
  this.buf = buf;
  this.n = n;
}

FixedBuffer.prototype = {
  get full () {
    return this.buf.length > this.n;
  },
  remove: function(item) {
    return this.buf.pop();
  },
  add: function(item) {
    this.buf.unboundedUnshift(item);
  },
  get count () {
    return this.buf.length;
  } 
};
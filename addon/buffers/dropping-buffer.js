export function DroppingBuffer (buf, n) {
  this.buf = buf;
  this.n = n;
}

DroppingBuffer.prototype = Object.create({
  get full () {
    return false;
  },
  remove: function(item) {
    return this.buf.pop();
  },
  add: function(item) {
    if (this.buf.length < this.n) {
      this.buf.unshift(item);
    }
  },
  get count () {
    return this.buf.length;
  } 
});
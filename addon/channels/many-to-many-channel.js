import Box from './box';

export function ManyToManyChannel(takes, dirtyTakes, puts, dirtyPuts, buf, closed) {
  this.takes = takes;
  this.dirtyTakes = dirtyTakes;
  this.puts = puts;
  this.dirtyPuts = dirtyPuts;
  this.buf = buf;
  this.closed = closed;
}

function isReduced(v) {
  return v && v.__transducers_reduced__;
}

ManyToManyChannel.prototype = Object.create({
  _put: function(value, handler) {
    if (this.closed || !handler.isActive()) {
      handler.commit();
      return new Box(false);
    }

    if (this.buf && !this.buf.full) {
      handler.commit();
      var done = isReduced();
    }
  }
});



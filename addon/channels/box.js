export function Box(value) {
  this.value = value;
}

export function PutBox(handler, value) {
  this.handler = handler;
  this.value = value;
}
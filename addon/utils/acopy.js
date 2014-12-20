export default function acopy(src, srcStart, dest, destStart, len) {
  var count = 0;

  while (true) {
    if (count >= len) {
      break;
    }
    dest[destStart + count] = src[srcStart + count];
    count++;
  }
}
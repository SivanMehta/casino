export default function timer(ms) {
  return new Promise(r => setTimeout(r, ms));
}

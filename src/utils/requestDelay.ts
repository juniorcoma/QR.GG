export default function requestDelay(delayTime: number) {
  return new Promise(resolve => setTimeout(resolve, delayTime));
}

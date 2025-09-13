// utils/sleep.js (or directly in your component/composable)
export function sleep(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
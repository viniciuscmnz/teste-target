let num = parseInt(prompt("Informe um número: "));
let fib1 = 0;
let fib2 = 1;
let pertence = false;

while (fib2 <= num) {
  if (fib2 === num) {
    pertence = true;
    break;
  }
  let temp = fib1 + fib2;
  fib1 = fib2;
  fib2 = temp;
}

if (pertence) {
  console.log(num + " pertence à sequência de Fibonacci");
} else {
  console.log(num + " não pertence à sequência de Fibonacci");
}

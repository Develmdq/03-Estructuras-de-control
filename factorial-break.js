let factorial = 1;
let step = 1;
while (step <= 10) {
  if (step === 11) break
  factorial *= step;
  step++;
}
console.log(`El factorial de 10 es ${factorial}`);

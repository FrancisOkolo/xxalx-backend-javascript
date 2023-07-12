export default function guardrail(mathFunction) {
  const queue = [];
  let mathF;

  try {
    mathF = mathFunction();
  } catch (error) {
    mathF = error.toString();
  }
  queue.push(mathF);
  queue.push('Guardrail was processed');
  return queue;
}

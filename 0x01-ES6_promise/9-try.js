import mathFunction from './8-try';

export default function guardrail(mathFunction) {
  const queue = [];
  try {
    queue.push(mathFunction());
  } catch (err) {
    err.toString();
    queue.push(err);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}

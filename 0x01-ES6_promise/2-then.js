export default function handleResponseFromAPI(promise) {
  const pro = { status: 200, body: 'success' };

  return promise
    .then(() => pro)
    .catch(() => new Error())
    .finally(() => {
      console.log('Got a response from the API');
    });
}

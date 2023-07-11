import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const b = uploadPhoto();
  const c = createUser();

  return Promise.all([b, c])
    .then((value) => console.log(`${value[0].body} ${value[1].firstName} ${value[1].lastName}`),
      () => console.log('Signup system offline'));
}

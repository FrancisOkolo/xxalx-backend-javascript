import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    return {
      photo: await uploadPhoto(),
      user: await createUser(),
    };
  } catch (e) {
    return Promise.resolve({
      photo: null,
      user: null,
    });
  }
}

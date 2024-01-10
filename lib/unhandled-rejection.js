import loudRejection from 'loud-rejection';

if (process.env._TESTING) {
  loudRejection();
}

import loudRejection from 'loud-rejection';


// in a testing environment (environment variable is set in `armor-gulp-utils`)
// make sure unhandled promise rejections are made visible
if (process.env._TESTING) {
  loudRejection();
}

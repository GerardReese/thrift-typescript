const glob = require('glob');
const rimraf = require('rimraf');

const matches = glob.sync('./**/codegen', { dot: true });
const paths = ['./dist', ...matches];
const unique = Array.from(new Set(paths));

if (unique.length === 0) {
  process.exit(0);
}

unique.forEach(p => {
  try {
    rimraf.sync(p);
    console.log('removed', p);
  }
  catch (err) {
    console.error('failed to remove', p, err && err.message ? err.message : err);
  }
});

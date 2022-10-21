import * as R from 'ramda';

const fn = (obj, val = '') => R.map(() => val)(obj);

export default fn;

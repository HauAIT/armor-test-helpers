import {stubEnv} from '../../build/lib/index';
import chai from 'chai'
const expect = chai.expect;
const should = chai.should();

describe('env-utils', function () {
  describe('stubEnv', function () {
    should.exist(stubEnv);
    stubEnv();

    it('setting env variable', function () {
      process.env.ABC = 'abc';
    });

    it('env varible should not be set', function () {
      expect(process.env.ABC).not.to.exist;
    });
  });
});

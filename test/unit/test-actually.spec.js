'use strict';

let actually = require('../../dist/index.js');
let expect = require('expect.js');
let result;

const mike = 0;
const missle = 1000;

// Test namespace
const act = { ually: {}};

// actually.likeMagic
act.ually.likeMagic = (ok = 0, done) => {
  let sir, mix, alot = 'a lot';
  const meow = () => {
    sir = { mix: alot };
    expect(sir.mix).to.equal(alot);
    done();
  };
  actually.justWork(meow, ok);
} 

describe('actuallyjs', function() {

    before(function () {
        console.log('actually testing...');
    });

    it ('actually not undefined', function() {
        result = actually.isActually(undefined);
        expect(result).not.to.be.ok();
    });

    it ('actually not empty string', function() {
        result = actually.isActually('');
        expect(result).not.to.be.ok();
    });

    it ('actually not null', function() {
        result = actually.isActually(null);
        expect(result).not.to.be.ok();
    });

    // JustWork
    it (`just work...like magic`, done => act.ually.likeMagic(done));
    it (`just work...like magic (${mike})`, done => act.ually.likeMagic(mike, done));
    it (`just work...like magic (${missle})`, done => act.ually.likeMagic(missle, done));

    after( function() {
        console.log('because reasons');
    });

});

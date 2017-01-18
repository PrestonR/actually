'use strict';

let actually = require('../../dist/index.js');
let expect = require('expect.js');
let result;

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

    after( function() {
        console.log('because reasons');
    });

});

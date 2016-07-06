var assert = require('chai').assert;
var expect = require('chai').expect;
var http = require('http-server');
var Browser = require('zombie');
var List = require('../lib/list.js').list;
var Item = require('../lib/item.js').item;
var Printer = require('../lib/Printer.js').printer;
var path = require('path');
console.log(http);


describe('homepage', function() {

  before(function() {

    var server = http.createServer({ root: path.join(__dirname, '../')});
    server.listen(3000);
    browser = new Browser({site: 'http://localhost:3000'})
  });

  before(function(done) {
    browser.visit('/', done);
  });

  it('Title is To Do List', function() {
    assert.equal(browser.text('title'), 'To Do List');
  });
});

//   server.close(function () {
//   console.log("closing server"
// )};

// afterEach(function() {
//   console.log("fuck you you stupid cunt")//Stop server after the test
//   server.close(function () {
//     console.log("closing server");
//   });
// });

//   it('should store a item when constructed', function() {
//     var item = new Item('phone grandma');
//     expect(item.get()).to.equal('phone grandma');
//   });
//
//   it('Item completion is set to false by default ', function() {
//     var item = new Item('phone grandma');
//     expect(item.status()).to.be.false;
//   });
// });

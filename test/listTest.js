var assert = require('chai').assert;
var expect = require('chai').expect;
var sinon = require('sinon');
var List = require('../lib/list.js');

describe('List', function() {

  var Stub = sinon.stub();
  Stub.withArgs('phone grandma').returns({ _item: 'phone grandma', _complete: false });
  Stub.withArgs('eat chocolate').returns({ _item: 'eat chocolate', _complete: false });


  it('should print a list of items', function() {
    var todo = new List();
    todo.addItem('phone grandma', Stub);
    todo.addItem('eat chocolate', Stub);
    expect(todo._list[0]._item).to.equal('phone grandma');
    expect(todo._list[1]._item).to.equal('eat chocolate');
  });
});

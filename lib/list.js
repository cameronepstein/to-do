(function(exports) {

  var List = function()  {
    this._list = [];
  };

  List.prototype.addItem = function(item, itemConstructor = Item){
    this._list.push(this._createItem(item, itemConstructor));
    return this._list;
  };

  List.prototype._createItem = function(item, itemConstructor) {
    return new itemConstructor(item);
  };

  List.prototype.getList = function() {
    return this._list;
  };

  exports.List = List;

})(this)

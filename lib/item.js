(function(exports) {var Item = function(item)  {
  this._item = item;
  this._complete = false;
};

Item.prototype.getName = function() {
  return this._item
};

Item.prototype.status = function() {
  return this._complete;
}


exports.item = Item;
})(this);

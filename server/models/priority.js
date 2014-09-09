'use strict';

function Priority(o){
}

Object.defineProperty(Priority, 'collection', {
  get: function(){return global.mongodb.collection('priorities');}
});

Priority.create = function(o, cb){
  Priority.collection.save(o, cb);
};

Priority.all = function(cb){
  Priority.collection.find().toArray(cb);
};

module.exports = Priority;

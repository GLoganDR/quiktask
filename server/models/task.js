'use strict';

function Task(o){
}

Object.defineProperty(Task, 'collection', {
  get:function(){return global.mongodb.collection('tasks');}
});

Task.create = function(o, cb){
  o.isComplete = false;
  Task.collection.save(o, cb);
};

Task.all = function(cb){
  Task.collection.find().toArray(cb);
};

module.exports = Task;

(function(exports) {
  var List = function(Task) {
    this.Task = Task;
    this.tasks = [];
    this.mustacheList = {tasks: this.tasks }
    this.html = [];
  };

  List.prototype = {
  	addToDo: function(chore) {
      var task = new this.Task(chore);
      this.tasks.push(task);
  	},

    printHTML: function() {
      this.html = [];
      for(var i = 0; i < this.tasks.length; i++) {
        this.html.push("<li>"+this.tasks[i].task+" - "+ this.tasks[i].isComplete() + "<button id='done_" + i + "'>Done</button>" + "</li>" +"");
      }
      return this.html.join('')
    },
  };
  exports.List = List;
})(this);


FIND THE ID OF BUTTON
CHANGE THAT NUMBER TASK TO FINISHED


FIND THE ID NUM OF THE BUTTON PRESSED
FIND TAT NUMBER TASK IN tasklist
RUN COMPLETE ON THAT NUMBER TASK

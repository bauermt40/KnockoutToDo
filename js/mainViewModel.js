
qvid.mainViewModel = function() {
    var self = this;
    
    self.todos = ko.observableArray([
        new qvid.TodoItem('Make a sweet app.', false),
        new qvid.TodoItem('Present the talk.', false),
        new qvid.TodoItem('Learn Angular.', true),
        new qvid.TodoItem('Do cool things.', true),
        new qvid.TodoItem('Another goal.', false)
      ]);
    
    self.newTask = ko.observable();
    
    self.finishedCss = ko.computed(function() {
        return 'finished'; 
    });
    
    self.addNewTask = function() {
        self.todos.unshift(new qvid.TodoItem(self.newTask(), false));
        self.newTask('');
    };
    
    self.clearCompleted = function() {
        var _filtered = ko.utils.arrayFilter(self.todos(), function(todo) {
           return !todo.finished(); 
        });
        self.todos(_filtered);
      };
    
    self.deleteTodo = function(todo) {
        self.todos.remove(todo);
      }
};

ko.applyBindings(qvid.mainViewModel);
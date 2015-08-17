qvid.TodoItem = function(name, finished) {
    this.name = name;
    this.finished = ko.observable(finished)
};
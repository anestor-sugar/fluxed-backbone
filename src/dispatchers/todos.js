'use strict';

define(['app/dispatcher', 'app/constants'], function(AppDispatcher, Constants) {

    var register = function(todos) {
        // Register callback to handle all updates
        AppDispatcher.register(function(action) {
            var title;
            var todo;

            switch (action.actionType) {
                case Constants.TODO_CREATE:
                    title = action.title.trim();
                    if (title !== '') {
                        todos.create({
                            title: title,
                            order: todos.nextOrder(),
                            completed: false
                        });
                    }
                    break;

                case Constants.TODO_TOGGLE:
                    todo = todos.get(action.id);
                    if (todo) {
                        todo.toggle();
                    }
                    break;

                case Constants.TODO_UPDATE_TITLE:
                    todo = todos.get(action.id);
                    title = action.title.trim();
                    if (todo && title !== '') {
                        todo.save({title: title});
                        // force triggering change event
                        todo.trigger('change');
                    }
                    break;

                case Constants.TODO_DESTROY:
                    todo = todos.get(action.id);
                    if (todo) {
                        todo.destroy();
                    }
                    break;

                default:
                // no op
            }
        });
    };

    return {
        register: register
    }
});

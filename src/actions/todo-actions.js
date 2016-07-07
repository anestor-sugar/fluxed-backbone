'use strict';
define(['app/dispatcher', 'app/constants'], function(AppDispatcher, Constants) {
    return {
        /**
         * @param  {string} title
         */
        create: function(title) {
            AppDispatcher.dispatch({
                actionType: Constants.TODO_CREATE,
                title: title
            });
        },

        /**
         * @param  {string} id The ID of the ToDo item
         * @param  {string} title
         */
        updateTitle: function(id, title) {
            AppDispatcher.dispatch({
                actionType: Constants.TODO_UPDATE_TITLE,
                id: id,
                title: title
            });
        },

        /**
         * Toggle whether a single ToDo is complete
         * @param  {string} id
         */
        toggle: function(id) {
            var actionType = Constants.TODO_TOGGLE;
            AppDispatcher.dispatch({
                actionType: actionType,
                id: id
            });
        },

        /**
         * @param  {string} id
         */
        destroy: function(id) {
            AppDispatcher.dispatch({
                actionType: Constants.TODO_DESTROY,
                id: id
            });
        }
    };
});

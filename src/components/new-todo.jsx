'use strict';
define(['jquery', 'react', 'app/actions/todo-actions'], function($, React, TodoActions) {
    return React.createClass({

        componentDidMount: function() {
            $('#new-todo').on('keypress', this.handleKeyPressed);
        },

        componentWillUnmount: function() {
            $('#new-todo').off('keypress');
        },

        handleKeyPressed: function(e) {
            var $input = $('#new-todo');
            if (e.which !== 13 || !$input.val().trim()) {
                return;
            }

            TodoActions.create($input.val().trim());
            $input.val('');
        },

        render: function() {
            return (
                <div>
                    <label>New Item</label>
                    <input
                        type="text"
                        className="form-control"
                        id="new-todo"
                        defaultValue={this.props.value}
                    />
                </div>
            );
        }
    });
});

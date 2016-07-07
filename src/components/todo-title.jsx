'use strict';
define(['react'], function(React) {
    return React.createClass({

        render: function() {
            var completedStyle = {
                textDecoration: 'line-through',
                fontStyle: 'italic'
            };
            return (
                <span style={this.props.completed ? completedStyle : null }>{this.props.title}</span>
            );
        }
    });
});

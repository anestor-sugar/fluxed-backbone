'use strict';
define(['react'], function(React) {
    return React.createClass({
        render: function() {
            return (
                <button onClick={this.props.onClick}>{this.props.text}</button>
            );
        }
    });
});

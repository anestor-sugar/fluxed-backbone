'use strict';
define(['react'], function(React) {
    return React.createClass({
        render: function() {
            return (
                <input type="checkbox" onClick={this.props.onClick} defaultChecked={this.props.checked}/>
            );
        }
    });
});

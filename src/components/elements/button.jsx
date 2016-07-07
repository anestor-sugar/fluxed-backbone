'use strict';
define(['react'], function(React) {
    return React.createClass({
        render: function() {
            var btnStyle = {
                marginRight: '5px',
                marginLeft: '5px',
                float: 'right'
            };
            return (
                <button className="btn btn-xs" style={btnStyle} onClick={this.props.onClick}>{this.props.text}</button>
            );
        }
    });
});

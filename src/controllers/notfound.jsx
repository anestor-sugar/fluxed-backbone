define([
    'react',
    'reactDOM'
], function(React, ReactDOM) {
    return function() {
        ReactDOM.render(<div>404. There is no such page</div>, document.getElementById('content'));
    };
});

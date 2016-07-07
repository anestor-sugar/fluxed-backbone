define([
    'react',
    'reactDOM',
    'app/components/list',
    'app/collections/todos'
], function(React, ReactDOM, List, Todos) {
    return function() {
        ReactDOM.render(<List todos={Todos}/>, document.getElementById('content'));
        Todos.fetch({reset:true});
    };
});

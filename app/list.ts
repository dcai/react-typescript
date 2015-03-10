import React = require('react/addons');

interface Props {
    size: number;
}

// <Props, State, Context>
class List extends React.Component<Props, any, any> {
    static defaultProps = { size: 2 };
    render() {
        var lists = [];
        for (var i = 0; i < this.props.size; i++) {
            lists.push(React.jsx(`<li key={i}>Item {i+1}</li>`));
        }
        return React.jsx(`
            <ul>{lists}</ul>
        `);
    }
}


export = List;

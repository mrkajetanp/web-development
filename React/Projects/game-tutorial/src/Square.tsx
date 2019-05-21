import React from 'react';

class Square extends React.Component {
    props: {value: string | null, onClick: (() => void)};

    constructor(props: {value: string | null, onClick: (() => void)}) {
        super(props);
        this.props = { value: props.value, onClick: props.onClick };
    }

    render() {
        return (
            <button className="square" onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }
}

export default Square;

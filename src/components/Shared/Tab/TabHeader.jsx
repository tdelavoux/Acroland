import React from 'react';

export class TabHeader extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            content: props.content,
            active: props.active ?? null,
        }
    }

    render(){
        return (
            <span className={`atom-pan-tab-header-item ${this.state.active}`} onClick={() => this.props.onClick()}>
                {this.state.content}
            </span>
        );
    }
}
import React from 'react';

import { TabHeader } from '/src/components/Shared/Tab/TabHeader.jsx'

export class Tab extends React.Component{

    // TODO utiliser des id auto générés pour le passage de target
    constructor(props){
        super(props);
        this.state= {
            content: props.content,
            actifContent: props.content[0].content
        }
    }

    render(){
        const headers = this.state.content.map((el, i) => {
            return <TabHeader onClick={() => this.updateContent(i)} content={el.title} key={el.title + el.active} active={el.active} />
        });

        return (
            <div className="atom-pan-tab">
                <div className="atom-pan-tab-header a-tab-primary">
                    {headers}
                </div>
                <div className="atom-pan-tab-body">
                    {this.state.actifContent}
                </div>
            </div>
        );
    }

    updateContent(i){
        this.setState({ 
            actifContent : this.state.content[i].content,
            content : this.state.content.map((el, j) => {
                return {title: el.title, content:el.content, active: (i==j ? 'active' : null)}
            })
        });
    }
}
import React from 'react';
import Navigation from './navigation';
import Example from "./carousel";

export class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div className="container">
                    <Navigation/>
                </div>
                <div className="container">
                    <Example/>
                </div>
            </div>
        )
    }
}
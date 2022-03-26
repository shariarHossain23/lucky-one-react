import React from 'react';
import './question.css';

const Question = () => {
    return (
        <div >
            <h1>Question</h1>
             <h2>Props vs State</h2>
             <div className='question'>
            <div className='props-state'>
                <div>
                <ol>
                <h5>props</h5>
                <li>props read only</li>
                <li>props is immutable</li>
                <li>props can access by child component</li>
                </ol>
                </div>
                   <div>
                   <ol>
                       <h5>state</h5>
                       <li>state change by asychornusly</li>
                       <li>state is mutule</li>
                       <li>state cannot access by child component</li>
                   </ol>

                   </div>
            </div>
            <div className='state'>
                <h2>state</h2>
                <p>React component has built in object.the state is where you store data.A component state change every time.component state dont acccess by child component.state can modified user action.the state componet can store multiple propertiesThe state is an instance of React Component Class can be defined as an object of a set of observable properties that control the behavior of the component</p>
            </div>
            <div>
                <h2>how react work</h2>
            ReactJS is simply a JavaScript library for building user interfaces. It was created by Facebook and now has a large community, including FB, that actively maintains it.

            JavaScript library  bunch of pre-written JavaScript codes.react work with diff algorithm and render by jsx.jsx means we can write html and javascript mixed code in react.
            </div>
        </div>
        </div>
    );
};

export default Question;
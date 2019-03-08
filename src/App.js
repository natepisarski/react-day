//@flow
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './custom-styles.scss';

// "Functional Component"

const shape = {
    message: '',
    anotherThing: ''
};

const StoreTitle = ({message, ...otherProps}) => {
    return <h2>{message}</h2>;
};

const sampleDestructuringFunction = (...parameters) => {
    const ourObject = {
        name: 'Joe',
        town: 'Camden',
        zip: '08030'
    };

    // "Destructuring"
    const {name, town, zip} = ourObject;

    // "Array Destructuring"
    const [firstElement, secondElement, ...rest] = [1, 2, 3, 4, 5];
    // [3, 4, 5]

    const firstArrray = [1, 2, 3];
    const secondArray = [4, 5, 6];

    const combinedArrays = [
        ...firstArrray,
        ...secondArray
    ];

    const firstObject = {
        firstKey: 'firstKeyValue'
    };

    const secondObject = {
        firstKey: 'secondKeyValue'
    };

    const thirdObject = {
        ...firstObject,
        ...secondObject
    };
    // [1, 2, 3, 4, 5, 6]
    // [ [1, 2, 3], [4, 5, 6] ]
};

class App extends Component {
    render() {

        const myName = 'George';
        const theNumber = 1;
        const renderedThing = StoreTitle({message: 'Hello'});
        sampleDestructuringFunction(1, 2, 3);

        const StoreTitleProps = {
            message: 'The New Message',
            anotherThing: 'Yo'
        };


        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p className={'big-blue'}>
                        {'Edit'} <code>src/App.js</code> and save to reload!
                    </p>

                    {/*<StoreTitle message={'The New Message'} anotherThing={'Yo'}/>*/}
                    <StoreTitle {...StoreTitleProps} />
                    < a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {'Learn React'}
                    </a>
                </header>
            </div>
        );
    }
}

export default App;

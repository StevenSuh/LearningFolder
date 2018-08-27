import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('renders a comment box', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);

    // start test
    expect(div.innerHTML).toContain('Comment Box');
    // end test
    

    ReactDOM.unmountComponentAtNode(div);
});
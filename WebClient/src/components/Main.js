require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Button from './Button';
import Button2 from './Button2';
import Header from './Header';

class AppComponent extends React.Component {
  render() {
    return (
        <div>
            <h1>Ja żyje !!!</h1>
            <Header />
            <Button />
            <Button2 />
        </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;

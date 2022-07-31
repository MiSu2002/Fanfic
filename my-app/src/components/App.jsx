import React from 'react';
import Header from './header';
import Body1 from './firstBody'

function App(){
    return( 
    <div className='main container-fluid p-0'>
        <Header className='header'/>
        <Body1 className='body1'/>
    </div>
    );
}

export default App;
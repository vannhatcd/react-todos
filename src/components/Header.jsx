import React from 'react';

function Header(props) {
    const styleHeader = {
        padding: '5px 0px',
        background: 'grey',
        textAlign: 'center',
        color: 'white'
    }

    return (
        <header style={styleHeader}>
            <h1>Đây là header</h1>
        </header>
    );
}

export default Header;
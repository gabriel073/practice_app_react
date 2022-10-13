import PropTypes from 'prop-types';
import React from 'react';


const Header = React.memo(({title}) => {
    return (  
        <h3>{title} 🔥</h3>
    );
})


// Documentacion

Header.propTypes = {
    title: PropTypes.string.isRequired,

}
 
export default Header;
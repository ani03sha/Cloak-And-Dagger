import React from 'react';

const Greetings = (props) => {
    const { greeting, message } = props
    return(
		<>
			<h1>{greeting}</h1>
            <p>{message}</p>
	    </>
    );
}

export default Greetings;
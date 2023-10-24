const NotFound = ({ msg }) => {
    return(
        <>
            <img width="64" height="64" src="https://img.icons8.com/arcade/64/sad-ghost.png" alt="sad-ghost"/>
            <p>{msg} not found</p>
        </>
    );
}

export default NotFound;
import PropTypes from 'prop-types'

const Header = ({ title, setItems, setItemId, setCompletedItems }) => {

    //Reset Button
    const reset = () => {
        setItems([]);
        setItemId(1);
        setCompletedItems([]);
        sessionStorage.removeItem('mydata');
        sessionStorage.removeItem('itemId');
        sessionStorage.removeItem('completed');
    }
    return (
        <header className='header'>
            <h1 >{title}</h1>
            <button className='btn' style={{ backgroundColor: 'red' }} onClick={reset}>Reset</button>
        </header>
    )
}

Header.defaultProps = {
    title: 'To Do List',
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header
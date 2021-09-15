import PropTypes from 'prop-types';
import Button from '../components/Button';

const Header = ({title}) => {
    const onClick = () => {
        console.log("click");
    }
    return (
        <header className='header'>
            <h1 style={{color: 'orange', backgroundColor: 'beige'}}>{title}</h1>
            <Button color='green' 
                    text ='add' 
                    onClick = {onClick}></Button>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}
export default Header

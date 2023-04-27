//// PROP TYPES
import PropTypes from 'prop-types'
import Button from './button';

//// Props can be an object to be structured
const Header = ({ title, onAdd, showAdd }) => {
    // const onClick = () => {
    //     console.log("Click"); 
    // }
    
    return (
        <div className='header'>
            <h1>{title}</h1>
            <Button 
            onClick={onAdd} 
            color={showAdd ? 'Red' : 'Green'}
            text={showAdd ? 'Close' : 'Add'} />
        </div>
    )
}

Header.propTypes = {
    title: PropTypes.string,
}

//// In components file, you can go
//// under the main bracket
Header.defaultProps = {
    // title: PropTypes.string.isRequired,
    title: 'Task Tracker',
}

//// Making CSS not inline
//// CSS in JS
const headingStyle = {
    color: 'red',
    backgroundColor: 'black'
}

export default Header
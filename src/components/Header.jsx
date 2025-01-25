import PropTypes from 'prop-types';

function Header({text}) {
  const headerStyle = {backgroundColor: 'blue', color:'red'}

  return (
    <header style={headerStyle}>
    <div className="container">
        <h2>{text}</h2>
    </div>
      
    </header>
  )
}
Header.defaultProps = {
    text:'Feedback UI',
    bgColor:'rgba(0,0,0,0.4)',
    textColor: '#ff6a95'
}

Header.propTypes = {
    text: PropTypes.string,
}

export default Header




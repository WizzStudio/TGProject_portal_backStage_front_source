import React from 'react';
import PropTypes from 'prop-types';


class projectInfo extends React.Component{
  constructor(props) {
    super(props);
  }
  
  
  render (){
    return (
      <p>hello</p>
    )
  }
}


projectInfo.propTypes={
  data:PropTypes.array
}

export default projectInfo

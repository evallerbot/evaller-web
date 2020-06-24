import React, { useState, useEffect } from 'react';

export default function GetResult(props) {
  const [ id, setId ] = useState('');
  const [ pasteName, setPasteName ] = useState('');
  
  useEffect(() => {
    setId(props.match.params.id);
    setPasteName(props.match.params.pasteName);
  }, [props.match.params.id, props.match.params.pasteName]);

  return(
    <>
      {id}
      {'\n'}
      {pasteName}
    </>
  )

}
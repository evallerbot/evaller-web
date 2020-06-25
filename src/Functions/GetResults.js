import React, { useState, useEffect } from 'react';
import SignUp from '../Components/ShareScreen';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function GetResult(props) {
  const params = {
    id: props.match.params.id,
    pasteName: props.match.params.pasteName
  }

  const [ json, setJson ] = useState(undefined);
  
  useEffect(() => {
    const url = `https://evaller--randomlylelo.repl.co/${params.id}/${params.pasteName}`;

    async function fetchJson() {
			try {
				const result = await fetch(url);
				const json = await result.json();
				setJson(json);
        console.log(json)
			} catch(e) {
				console.log(e);
			}
    }
    fetchJson();

  }, [params.id, params.pasteName]);

  return(
    <>
			{json ? 
      <SignUp json={json}/>
      : <CircularProgress style={{ height: '50vh', width: '50vh',  }} />}
    </>
  );

}
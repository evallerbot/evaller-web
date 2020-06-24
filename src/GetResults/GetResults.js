import React, { useState, useEffect } from 'react';

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

  }, []);

  return(
    <>
      {params.id}
      {params.pasteName}
			{json ? 
      <>
        <p>{json.code}</p>
        <p>{json.date}</p>
        <p>{json.lang}</p>
        <p>{json.output}</p>
      </> 
      : <p>loading</p>}
    </>
  )

}
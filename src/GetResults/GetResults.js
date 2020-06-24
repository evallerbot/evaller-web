import React, { useState, useEffect } from 'react';

export default function GetResult(props) {
  const params = {
    id: props.match.params.id,
    pasteName: props.match.params.pasteName
  }

  const [ json, setJson ] = useState(undefined);
  
  useEffect(() => {
    const url = `https://mmh.apoorvsingal.repl.co/${params.id}/${params.pasteName}`;
    async function fetchJson() {
      const result = await fetch(url);
      console.log(result.json());
    }
    fetchJson();

  }, [params]);

  return(
    <>
      {params.id}
      {params.pasteName}
    </>
  )

}
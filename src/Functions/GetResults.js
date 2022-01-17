import React, { useState, useEffect } from 'react';
import SignUp from '../Components/ShareScreen';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useParams } from 'react-router';

export default function GetResult(props) {
  const { id, pasteName } = useParams();

  const [json, setJson] = useState(undefined);

  useEffect(() => {
    const url = `https://evaller.apoorvsingal.repl.co/${id}/${pasteName}`;

    async function fetchJson() {
      try {
        const result = await fetch(url);
        const json = await result.json();
        setJson(json);
        // console.log(json);
      } catch (e) {
        console.log(e);
      }
    }
    fetchJson();
  }, [id, pasteName]);

  return (
    <>
      {json ? (
        <SignUp json={json} />
      ) : (
        <CircularProgress
          size="5rem"
          style={{
            top: '50%',
            left: '50%',
            position: 'absolute',
            transform: 'translate(-50%, -50%)',
          }}
        />
      )}
    </>
  );
}

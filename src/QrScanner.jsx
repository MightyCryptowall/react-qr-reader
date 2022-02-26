import { useState } from "react";
import QrReader from 'react-qr-scanner'

const QrScanner = () => {
  const [state, setState] = useState({
    delay: 100,
    result: 'No result',
  });

  const handleScan = (value) => {
    setState({result: value });
  };

  const handleError = (err) => {
    console.error(err);
  };

  const previewStyle = {
    height: 240,
    width: 320,
  };
  return (
    <>
     <QrReader
          delay={state.delay}
          style={previewStyle}
          onError={handleError}
          onScan={handleScan}
          />
        <p>{state.result}</p>
    </>
  );
};

export default QrScanner;

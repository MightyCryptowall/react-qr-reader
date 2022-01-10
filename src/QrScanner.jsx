import { useState } from "react";
import QRScan from 'qrscan'

const QrScanner = () => {
  const [state, setState] = useState({ value: '', watching: false });

  const onFind = (value) => {
    setState({ value, watching: false })
  }
  return (
    <>
        <h1>QRScan Demo</h1>
        {state.watching
          ? (
            <QRScan onFind={onFind} />
          )
          : (
            <>
              <button onClick={() => setState({ watching: true })}>Scan</button>
              <h4>value: {state.value}</h4>
            </>
          )
        }
      </>
  );
};

export default QrScanner;

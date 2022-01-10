import { useState } from "react";
import QRScan from "./QrScan";

const QrScanner = () => {
  const [state, setState] = useState({ value: "", watching: false });

  const onFind = (value) => {
    setState({ value, watching: false });
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
      <h1 style={{color: state.watching ? "red" :"black"}}>QRScan Demo</h1>
      {state.watching ? (
        <div style={{width:"20vw"}}>
          <QRScan onFind={onFind} />
        </div>
      ) : (
        <>
          <button onClick={() => setState({ watching: true })}>Scan</button>
          <h4>value: {state.value}</h4>
        </>
      )}
    </>
  );
};

export default QrScanner;

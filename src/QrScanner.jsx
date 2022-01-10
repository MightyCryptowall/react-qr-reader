import { useState } from "react";
import QrReader from "react-qr-scanner";

const QrScanner = () => {
  const [state, setState] = useState({
    delay: 100,
    result: "No Result",
  });

  const handleScan = (data) => {
    setState({
      result: data,
    });
  };

  const handleError = (err) => {
    console.error(err);
  };

  const previewStyle = {
    height: 240,
    width: 320,
  };
  return (
    <div>
        <h1>Hello</h1>
      <QrReader
        delay={100}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
      <p>{state.result}</p>
    </div>
  );
};

export default QrScanner;

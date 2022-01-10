import { useState } from "react";

const QrReader = () => {

    const [result, setResult] = useState("No Result");

    const handleScan = data => {
        if (data) {
          setResult({
            result: data
          })
        }
      }
      const handleError = err => {
        console.error(err)
      }


  return (
    <div>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: "100%" }}
      />
      <p>{result}</p>
    </div>
  );
};

export default QrReader;

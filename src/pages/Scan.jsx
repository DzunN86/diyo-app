import { QrScanner } from "@yudiel/react-qr-scanner";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavBack } from "../components";

function ScanPage() {
  const [isScanning, setIsScanning] = React.useState(false);
  const navigate = useNavigate();

  const decodeQr = (result) => {
    let splitResult = result.split(":");
    navigate("/" + splitResult[0] + "/" + splitResult[1]);
  };

  useEffect(() => {
    // open camera when mount
    setIsScanning(true);
    return () => {
      // close camera when unmount
      setIsScanning(false);
    };
  }, []);
  return (
    <>
      <NavBack />
      <div className="bg-black min-h-screen flex items-center">
        <div className="w-full">
          {isScanning && (
            <QrScanner
              scanDelay={1000}
              onDecode={decodeQr}
              onError={(error) => console.log(error?.message)}
            />
          )}
          <div className="flex justify-center py-3 px-4">
            <p className="text-primary">Silahkan scan barcode di meja!</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ScanPage;

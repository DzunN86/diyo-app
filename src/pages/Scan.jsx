import { QrScanner } from "@yudiel/react-qr-scanner";
import React from "react";

function ScanPage() {
  return (
    <>
      <div className="fixed top-0 z-30 w-full max-w-screen-xs bg-transparent">
        <div className="flex items-center text-white gap-4 py-3 px-4 text-xl font-bold">
          <button className="flex bg-primary px-1 rounded-full">
            <i className="ri-arrow-left-line"></i>
          </button>
        </div>
      </div>
      <div className="bg-black min-h-screen flex items-center">
        <div className="w-full">
          <QrScanner
            onDecode={(result) => console.log(result)}
            onError={(error) => console.log(error?.message)}
          />
          <div className="flex justify-center py-3 px-4">
            <p className="text-primary">Silahkan scan barcode di meja!</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ScanPage;

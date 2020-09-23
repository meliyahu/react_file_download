import React from 'react';
import axios from "axios";
import fileDownload from "js-file-download";

import './App.css';

const App = () => {
  const img_url = "https://swift.rc.nectar.org.au/v1/AUTH_05bca33fce34447ba7033b9305947f11/bioimages/public/phenocam/vicd_whroo/overstorey_oblique_01/2000/200001/1920_vicd_whroo_overstorey_oblique_01_whroo20000101_200045M_tern_phenocam_2000-01-01T000000-1100.jpg"
  const handleDownload = (url) => {
    const fileName = img_url.split("/").pop();
    axios
      .get(url, {
        responseType: "blob",
      })
      .then((res) => fileDownload(res.data, fileName));
  }
  return (
    <div className="App">
      <button style={{ width: "200px", height:"50px"}} onClick={() => handleDownload(img_url)}></button>      
    </div>
  );
}

export default App;

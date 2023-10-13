import axios from "axios";
import React, { useEffect, useState } from "react";

function Home() {
    const [bankData, setBankData] = useState({});
  async function getBankData() {
    let response = "";
    response = await axios.get(
      "https://run.mocky.io/v3/9936ff4a-7946-41d2-938c-596aa875b566"
    );
    console.log(response.data);
  }
  useEffect(() => {
    getBankData();
  });
  return <>
  </>;
}

export default Home;

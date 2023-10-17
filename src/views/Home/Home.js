import axios from "axios";
import React, { useEffect, useState } from "react";
import DetailsCards from "../../components/DetailsCards/DetailsCards";

function Home() {
  const [bankData, setBankData] = useState([]);
  const [findName, setFindName] = useState("");
  async function getBankData() {
    let response = "";

    try {
      response = await axios.get(
        "https://run.mocky.io/v3/9936ff4a-7946-41d2-938c-596aa875b566"
      );
      console.log(response.data.users);
      setBankData(response.data.users);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getBankData();
  });
  return (
    <>
      <div className="container mt-2 py-5 bg-danger-subtle">
        <div className="container w-50">
          <input
            type="text"
            className="form-control"
            value={findName}
            onChange={(e) => {
              setFindName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="mx-auto d-flex justify-content-center align-items-center flex-column ">
        {bankData.map((user) => {
          const { id, avatar, name, email, password, bankAccounts } = user;

          return (
            <DetailsCards
              id={id}
              avatar={avatar}
              name={name}
              email={email}
              password={password}
              bankAccounts={bankAccounts}
            />
          );
        })}
      </div>
    </>
  );
}

export default Home;

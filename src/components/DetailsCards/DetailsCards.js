import React from "react";

function DetailsCards({ id, avatar, name, email, bankAccounts }) {
  return (
    <>
      <div
        className="card  mt-3"
        style={{ width: "38rem", backgroundColor: "#F7F2CB" }}
      >
        <div className="p-1 text-dark">
          <div className="d-flex justify-content-evenly">
            <div className="">
              {" "}
              <img
                src={avatar}
                alt="fsd"
                className="mt-3"
                style={{
                  width: "80px",
                  borderRadius: "50%",
                  padding: "2px",
                  border: "3px solid blue",
                }}
              />
            </div>
            <div>
              <div className="">
                <p>id :{id}</p>
                <p>Name: {name}</p>
                <p>email: {email}</p>
              </div>
            </div>
            <div>
              {bankAccounts.map((bankacount, i) => {
                const { accountNumber, balance, accountType } = bankacount;
                return (
                  <>
                    <h5 className="fw-bold">Acount {i + 1}</h5>
                    <p>bank ac number {accountNumber}</p>
                    <p>bank balane : {balance}</p>
                    <p>bank ac type: {accountType}</p>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailsCards;

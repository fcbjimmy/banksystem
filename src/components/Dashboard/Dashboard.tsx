import React from "react";
import Navbar from "../navbar/Navbar";
import Balance from "./Balance";
import Table from "./Table";

const Dashboard = () => {
  const data = [
    { name: "Jimmy Chan", date: "2/26/2020", value: 30.0, type: "withdrawal" },
    { name: "Test", date: "12/25/2019", value: 8500.0, type: "deposit" },
    {
      name: "Ernst Handel",
      date: "11/1/2019",
      value: 3210.0,
      type: "withdrawal",
    },
    {
      name: "Island Trading Co. Ltd.",
      date: "2/6/2019",
      value: 3400.0,
      type: "deposit",
    },
    {
      name: "Ernst Handel",
      date: "11/1/2019",
      value: 3210.0,
      type: "withdrawal",
    },
    {
      name: "Ernst Handel",
      date: "11/1/2019",
      value: 3210.0,
      type: "withdrawal",
    },
    {
      name: "Ernst Handel",
      date: "11/1/2019",
      value: 3210.0,
      type: "withdrawal",
    },
    {
      name: "Ernst Handel",
      date: "11/1/2019",
      value: 3210.0,
      type: "withdrawal",
    },
    {
      name: "Island Trading Co. Ltd.",
      date: "2/6/2019",
      value: 3400.0,
      type: "deposit",
    },
    {
      name: "Island Trading Co. Ltd.",
      date: "2/6/2019",
      value: 3400.0,
      type: "deposit",
    },
  ];
  return (
    <>
      <Navbar />
      <Balance />
      <Table data={data} />
    </>
  );
};
export default Dashboard;

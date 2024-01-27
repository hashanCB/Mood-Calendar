"use client";
import React, { useState, useRef } from "react";
import { FaRegFaceLaugh } from "react-icons/fa6";
import { FaRegFaceGrinBeam } from "react-icons/fa6";
import { FaRegFaceMeh } from "react-icons/fa6";
import { FaRegFaceSadTear } from "react-icons/fa6";
import { FaRegFaceSadCry } from "react-icons/fa6";

const Month = () => {
  const [verygood, setVerygood] = useState(false);
  const [good, setgood] = useState(false);
  const [nothing, setnothing] = useState(false);
  const [bad, setbad] = useState(false);
  const [verybad, setVerybad] = useState(false);
  const [clickedDates0, setClickedDates0] = useState([]); //verybad
  const [clickedDates1, setClickedDates1] = useState([]); //bad
  const [clickedDates2, setClickedDates2] = useState([]); //nothing
  const [clickedDates3, setClickedDates3] = useState([]); //good
  const [clickedDates4, setClickedDates4] = useState([]); //varygood
  const year = 2024;
  const monthname = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const getdates = (months, year) => new Date(year, months, 0).getDate(); //number of dates per months 1st mothsn januray 0 day eka 0 denna one 2nd month nam febluary 0 day eka 0 denna one

  const getfristday = (months, year) => new Date(year, months, 1).getDay(); // month start days , monday=1

  const reandercalander = [];

  const clickchage = (name) => {
    console.log(name);
  };

  const handleDateClick = (ky) => {
    let alreadyClicked = "";
    if (verygood) {
      alreadyClicked = clickedDates4.find((element) => element.ky === ky);
    } else if (good) {
      alreadyClicked = clickedDates3.find((element) => element.ky === ky);
    } else if (nothing) {
      alreadyClicked = clickedDates2.find((element) => element.ky === ky);
    } else if (bad) {
      alreadyClicked = clickedDates1.find((element) => element.ky === ky);
    } else if (verybad) {
      alreadyClicked = clickedDates0.find((element) => element.ky === ky);
    }
    // Check if the clicked date is already in the array

    // const alreadyClicked = clickedDates.find((element) => element.ky === ky);
    // if (alreadyClicked) {
    // // Handle the case where a matching element is found
    // console.log("Element found:", alreadyClicked);
    // } else {
    // // Handle the case where no matching element is found
    // console.log("Element not found");
    // }
    // Update state with the new clicked date

    if (verygood) {
      setClickedDates4(
        (prevDates) =>
          alreadyClicked
            ? prevDates // If already clicked, do not modify the state
            : [...prevDates, { ky }] // If not clicked, add to the array
      );
    } else if (good) {
      setClickedDates3(
        (prevDates) =>
          alreadyClicked
            ? prevDates // If already clicked, do not modify the state
            : [...prevDates, { ky }] // If not clicked, add to the array
      );
    } else if (nothing) {
      setClickedDates2(
        (prevDates) =>
          alreadyClicked
            ? prevDates // If already clicked, do not modify the state
            : [...prevDates, { ky }] // If not clicked, add to the array
      );
    } else if (bad) {
      setClickedDates1(
        (prevDates) =>
          alreadyClicked
            ? prevDates // If already clicked, do not modify the state
            : [...prevDates, { ky }] // If not clicked, add to the array
      );
    } else if (verybad) {
      setClickedDates0(
        (prevDates) =>
          alreadyClicked
            ? prevDates // If already clicked, do not modify the state
            : [...prevDates, { ky }] // If not clicked, add to the array
      );
    }
  };
  for (let i = 0; i < monthname.length; i++) {
    const renderdays = [];
    const monthdays = getdates(i + 1, year);
    const startdayname = getfristday(i, year);

    for (let c = 1; c < startdayname; c++) {
      renderdays.push(<div></div>);
    }

    for (let r = 1; r <= monthdays; r++) {
      const ky = r + monthname[i];
      //   const isClicked = clickedDates.find((element) => element.ky === ky);

      let isClicked4 = "";
      let isClicked3 = "";
      let isClicked2 = "";
      let isClicked1 = "";
      let isClicked0 = "";

      isClicked4 = clickedDates4.find((element) => element.ky === ky);

      isClicked3 = clickedDates3.find((element) => element.ky === ky);

      isClicked2 = clickedDates2.find((element) => element.ky === ky);

      isClicked1 = clickedDates1.find((element) => element.ky === ky);

      isClicked0 = clickedDates0.find((element) => element.ky === ky);

      renderdays.push(
        <div
          key={`date-${r + monthname[i]}`}
          className={`p-2 m-1 hover:scale-110 cursor-pointer ${
            isClicked4
              ? "bg-green-500"
              : isClicked3
              ? "bg-blue-500"
              : isClicked2
              ? "bg-gray-500"
              : isClicked1
              ? "bg-yellow-500"
              : isClicked0
              ? "bg-red-500 "
              : "bg-slate-700"
          } text-white rounded-full items-center justify-center text-center`}
          onClick={() => handleDateClick(ky)}
        >
          {r}
        </div>
      );
    }

    reandercalander.push(
      <div>
        <div className=" text-black">{monthname[i]}</div>
        <div className=" grid grid-cols-7">
          <div className="text-center text-gray-500">Mon</div>
          <div className="text-center text-gray-500">Tue</div>
          <div className="text-center text-gray-500">Wed</div>
          <div className="text-center text-gray-500">Thu</div>
          <div className="text-center text-gray-500">Fri</div>
          <div className="text-center text-gray-500">Sat</div>
          <div className="text-center text-gray-500">Sun</div>
        </div>

        <div className=" grid grid-cols-7 justify-center ">{renderdays}</div>
      </div>
    );
  }

  return (
    <>
      <div className="bg-white p-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-black">2019 Mood Calendar</h1>
          <p className="text-sm text-gray-600 mt-1">
            ~ color each day depending on what your mood was / is ~
          </p>
        </div>
        <div className="flex justify-center items-center space-x-4 my-6  ">
          <FaRegFaceGrinBeam
            className={`text-green-500 w-8 h-8 ${
              verygood ? `bg-gray-500` : ""
            } rounded-full  cursor-pointer hover:scale-110 `}
            onClick={clickchage(verygood)}
          />
          <FaRegFaceLaugh
            className={`text-blue-500 w-8 h-8 
            ${good ? `bg-gray-500` : ""} cursor-pointer hover:scale-110 `}
            onClick={() => setgood(!good)}
          />
          <FaRegFaceMeh
            className={`text-gray-500  ${
              nothing ? `bg-gray-500` : ""
            } w-8 h-8 cursor-pointer hover:scale-110 `}
            onClick={() => setnothing(!nothing)}
          />
          <FaRegFaceSadTear
            className={`text-yellow-500 ${
              bad ? `bg-gray-500` : ""
            } w-8 h-8 cursor-pointer hover:scale-110 `}
            onClick={() => setbad(!bad)}
          />
          <FaRegFaceSadCry
            className={`text-red-500 ${
              verybad ? `bg-gray-500` : ""
            } w-8 h-8 cursor-pointer hover:scale-110`}
            onClick={() => setVerybad(!verybad)}
          />
        </div>
        <div className="text-center text-sm mb-4 ">
          Select mood: then click on the circles below
        </div>
        <div className="flex flex-wrap justify-center -mx-2" />

        <div className=" grid grid-cols-4 gap-5">{reandercalander}</div>
        <div className="text-center text-xs text-gray-500 mt-10">
          Part of #100Days100Projects
        </div>
      </div>
    </>
  );
};

export default Month;

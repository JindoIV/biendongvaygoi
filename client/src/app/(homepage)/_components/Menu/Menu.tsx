"use client";
import Image from "next/image";
import "./Menu.css";
import React, { useState, useEffect } from "react";

export default function Menu() {
  return (
    <>
      <div className={"menu"}>
        <div className={"am_luong_btn"}></div>
        <div className={"map_btn"}></div>
      </div>
    </>
  );
}

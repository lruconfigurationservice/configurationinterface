'use client'
import Login from "@/components/Login";
import Form from "./UINextApi/Form";
import { useState } from "react";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div className="bg-slate-200 h-[100vh]">
    <Login onLoginSuccess={() => setIsLoggedIn(true)}/>
    {isLoggedIn && <Form />}
    </div>
  );
}

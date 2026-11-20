import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className=" bg-black text-white h-[100vh] flex items-center justify-center flex-col ">
      <div className="flex items-center justify-center text-3xl gap-x-4 pb-10">
        <p className="font-black">404</p>
        <span>|</span>
        This page could not be found.
      </div>
      <button class="button" onClick={() => navigate("/")}>
        <div class="button-outer">
          <div class="button-inner">
            <span>Back to home</span>
          </div>
        </div>
      </button>
    </div>
  );
};

export default NotFoundPage;

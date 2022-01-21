import React, { useEffect } from "react";
import "../../css/toast.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastText = () => {
  return (
    <div>
      <p className="toast_content">
        SITMUN in collaboration with SSUIMUN is conducting an online MUN
        Workshop.{" "}
        <a href="https://rb.gy/0rcixn" target="_blank">
          <b>Register Now</b>
        </a>{" "}
        to avail this opportunity, free of cost!
      </p>
    </div>
  );
};

const Toast = () => {
  const notify = () =>
    toast(ToastText, {
      position: "bottom-left",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  useEffect(() => {
    notify();
  }, []);

  return (
    <div>
      <ToastContainer
        position="bottom-left"
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
    </div>
  );
};

export default Toast;

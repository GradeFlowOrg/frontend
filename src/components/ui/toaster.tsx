"use client";

import { ToastContainer } from "react-toastify";

export default function Toaster() {
    return (
        <ToastContainer
            // style={{ zIndex: 99999 }}
            position="top-right"
            autoClose={3000}
            theme="colored"
            hideProgressBar={false}
            closeOnClick={true}
            rtl={false}
            draggable={true}
            pauseOnHover={false}
        />
    );
}
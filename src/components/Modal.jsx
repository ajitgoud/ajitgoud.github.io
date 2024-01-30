import React, { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import { CloseIcon } from "../assets/icons/Icons";

const Modal = forwardRef(function Modal({ className, children }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
      close() {
        dialog.current.close();
      },
    };
  });
  
  return createPortal(
    <dialog ref={dialog} className={className}>
      <form method="dialog" className="flex justify-end">
        <button className=" w-10 h-10 p-2 rounded-full fill-slate-500 hover:fill-slate-200 hover:bg-app-dark hover:opacity-80">
          <CloseIcon />
        </button>
      </form>
      {children}
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;

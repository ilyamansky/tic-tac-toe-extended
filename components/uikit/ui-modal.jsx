import clsx from "clsx";
import { createPortal } from "react-dom";

export function UiModal({
  width = "md",
  className,
  children,
  isOpen = false,
  onClose,
}) {
  if (!isOpen) {
    return null;
  }
  const handleClick = (e) => {
    if (e.target.closest("[data-id=modal]")) return;
    onClose();
  };
  const modal = (
    <div
      onClick={handleClick}
      className={clsx(
        "fixed inset-0 backdrop-blur bg-slate-900/60 pt-10 pb-10",
        className,
      )}
    >
      <div
        data-id="modal"
        className={clsx(
          "bg-white min-h-[320px] mx-auto rounded-lg relative flex flex-col",
          {
            md: "max-w-[540px] w-full",
            lg: "mx-5",
          }[width],
        )}
      >
        <button
          onClick={onClose}
          className="flex absolute top-0 left-[calc(100%+12px)] 
        w-8 h-8 items-center justify-center bg-white/20 hover:bg-white/40 rounded-lg transition-colors"
        >
          <CrossIconLight className="w-4 h-4 text-white" />
        </button>
        {children}
      </div>
    </div>
  );
  return createPortal(modal, document.getElementById("modals"));
}

UiModal.Header = function UiModalHeader({ children, className }) {
  return (
    <div className={clsx("px-6 pt-6 pb-4 text-2xl", className)}>{children}</div>
  );
};

UiModal.Body = function UiModalBody({ children, className }) {
  return <div className={clsx("", className)}>{children}</div>;
};

UiModal.Footer = function UiModalFooter({ children, className }) {
  return (
    <div
      className={clsx("mt-auto pr-4 pb-4 flex justify-end gap-4", className)}
    >
      {children}
    </div>
  );
};

function CrossIconLight({ className }) {
  return (
    <svg
      className={className}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.99809 5.99999L11.793 1.20507C12.069 0.929082 12.069 0.482986 11.793 0.206994C11.517 -0.068998 11.0709 -0.068998 10.7949 0.206994L6.00001 5.00191L1.20507 0.206994C0.929082 -0.068998 0.482986 -0.068998 0.206994 0.206994C-0.068998 0.482986 -0.068998 0.929082 0.206994 1.20507L5.00191 5.99999L0.206994 10.7949C-0.068998 11.0709 -0.068998 11.517 0.206994 11.793C0.344638 11.9306 0.525336 11.9998 0.706034 11.9998C0.886732 11.9998 1.06743 11.9306 1.20507 11.793L5.99999 6.99807L10.7949 11.793C10.9325 11.9306 11.1132 11.9998 11.2939 11.9998C11.4746 11.9998 11.6553 11.9306 11.793 11.793C12.069 11.517 12.069 11.0709 11.793 10.7949L6.99809 5.99999Z"
        fill="currentColor"
      />
    </svg>
  );
}

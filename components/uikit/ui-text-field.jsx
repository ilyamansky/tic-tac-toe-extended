import clsx from "clsx";

export function UiTextField({
  label,
  errorText,
  helperText,
  ...textFieldProps
}) {
  return (
    <div>
      {label && (
        <label
          for="label"
          className="mb-1 block text-sm font-medium text-gray-700 
          after:ml-0.5 after:text-red-500 after:content-['*']"
        >
          {label}
        </label>
      )}

      <input
        type="email"
        id="2"
        className={clsx([
          `block w-full py-2 px-4 rounded-md shadow-sm border outline-0
           disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500`,
          errorText
            ? "focus:border-orange-600 focus:ring focus:ring-orange-600 focus:ring-opacity-50 border-orange-600"
            : "focus:border-slate-300 focus:ring focus:ring-slate-300 focus:ring-opacity-50 borger-slate-300",
        ])}
        placeholder="your@email.com"
      />
      {helperText ||
        (errorText && (
          <p
            className={clsx(
              "mt-1 text-sm",
              errorText && "text-red-500",
              helperText && "text-orange-500",
            )}
          >
            {errorText ?? helperText}
          </p>
        ))}
    </div>
  );
}

import React, { useId } from "react";

const TextInput = ({ label, ...props }) => {
  const id = useId();
  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-primary-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-primary-900 ring-4 ring-transparent transition focus:border-primary-600 focus:outline-none focus:ring-primary-300/20 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-primary-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-primary-900 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-primary-900"
      >
        {label}
      </label>
    </div>
  );
};

export default TextInput;

import React from "react";

export function Date({ value, holder, id, handleInputChange, labelTag, type }) {
  return (
    <div className="flex flex-col w-14 align-middle justify-center">
      <label
        htmlFor="month"
        className="text-primarybtn mb-3 flex justify-center text-2xl"
      >
        {labelTag}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={handleInputChange}
        placeholder={holder}
        className="border-b-2 border-primarybtn placeholder-primarybtn p-2 w-full outline-none focus:primarybtn placeholder:text-4xl"
      />
    </div>
  );
}

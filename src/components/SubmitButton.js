import React from "react";

export default function SubmitButton(props) {
  return (
    <div className="flex justify-center mt-4">
      <button
        //className="px-6 py-2 text-lg font-semibold bg-pink-500 hover:bg-pink-600 text-white rounded-full shadow-md neon-button transition "
        className="px-6 py-2 text-lg font-semibold text-white border border-pink-500 rounded-lg hover:bg-pink-500 shadow-md   transition"
        onClick={props.analyseSentiment}
        disabled={props.disabled}
      >
        {props.disabled ? "Processing..." : "Analyze Review"}
      </button>
    </div>
  );
}

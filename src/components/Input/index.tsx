import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>

export function Input(props: InputProps) {
  return(
    <>
      <input className="bg-amber-50 rounded-lg p-1 border-0 px-2 mb-3 text-lg" 
        type="text" 
        placeholder="Test" 
        {...props} 
      />
    </>
  )

}
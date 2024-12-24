import React from 'react';

interface SigninButtonProps {
    content: string;
    children?: React.ReactNode;
}

const  SigninButton:React.FC<SigninButtonProps> = ({content, children}) => {
  
  return (
    <div className='w-96 h-10 pt-1 border-2 border-neutral-300 rounded-md'>
    <button className="w-full h-full flex justify-center items-center gap-3 font-semibold text-base text-neutral-900">
        {children}{content}</button>
    </div>
  );
}

export default SigninButton;
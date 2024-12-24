import logo from '../assets/logo.svg'
import SigninButton from './SigninButton'   
import github from '../assets/github.svg'
import bitbucket from '../assets/bitbucket.svg'
import azure from '../assets/azure.svg'
import gitlab from '../assets/gitlab.svg'
import key from '../assets/key.svg'
import { useState } from 'react'

enum SigninMode {
    SASS = "SASS",
    SelfHosted = "Self Hosted"
}

function RightSection() {
    const [signinMode, setSigninMode] = useState(SigninMode.SASS)

    return <div className="h-screen sm:w-1/2 flex flex-col justify-center items-center px-4">
        
        <div className="flex flex-col border-2 border-neutral-300 h-[600px] sm:w-[532px] sm:h-[450px] mt-14 rounded-xl">
        <div className='mb-6'>
        <div className="mt-5 mx-4 sm:w-[500px] h-[100px] flex flex-col justify-between items-center">
            <div className="flex"><img src={logo} alt="Logo" className="w-8 h-8"/>   
            <div className="text-2xl font-normal font-satoshi px-2">CodeAnt AI</div></div>  
            <div className="text-3xl font-semibold">Welcome to CodeAnt AI</div>
        </div>
        {/* buttons */}
        <div className="mt-5 mx-4 w-[500px] h-[50px] rounded-lg border-neutral-300 border flex">
        <button onClick={ () => setSigninMode(SigninMode.SASS)} className = {signinMode === SigninMode.SASS ? "w-[248px] h-fit bg-blue-600  text-white ring-1 ring-blue-300 rounded-lg font-semibold text-2xl sm:text-xl px-5 py-2.5"
        : "w-[248px] h-fit text-black rounded-lg font-semibold text-2xl sm:text-xl px-5 py-2.5"}>SASS</button>
        <button onClick={ () => setSigninMode(SigninMode.SelfHosted)} className={signinMode === SigninMode.SelfHosted ? "w-[248px] h-fit bg-blue-600  text-white ring-1 ring-blue-300 rounded-lg font-semibold text-2xl sm:text-xl px-5 py-2.5"
        : "w-[248px] h-fit text-black rounded-lg font-semibold text-2xl sm:text-xl px-5 py-2.5"}>Self Hosted</button>
        </div>
        </div>
        <hr className='border border-neutral-300'></hr>
        {/* buttons */}
        { signinMode === SigninMode.SASS ? ( 
            <div className='flex-1 h-auto sm:h-[244px] flex flex-col justify-center items-center gap-4'>
                <SigninButton content='Signin with Github'><img src={github} alt="github" className='w-5 h-5'/></SigninButton>
                <SigninButton content='Signin with Bitbucket'><img src={bitbucket} alt="bitbucket" className='w-5 h-5'/></SigninButton>
                <SigninButton content='Signin with Azure Devops'><img src={azure} alt="azure" className='w-5 h-5'/></SigninButton>
                <SigninButton content='Signin with GitLab'><img src={gitlab} alt="gitlab" className='w-5 h-5'/></SigninButton>
                </div>
        ):( 
            <div className="flex-1 h-auto sm:h-[244px] pt-2 flex flex-col justify-center items-center gap-6">
                <SigninButton content='Self Hosted Gitlab'><img src={gitlab} alt="gitlab" className='w-5 h-5'/></SigninButton>
                <SigninButton content='Signin with SSO'><img src={key} alt="key" className='w-5 h-5'/></SigninButton>
            </div>
            )}
        </div>
        <div className="text-center mt-4">By signing up you agree to the <span className='font-bold' >Privacy Policy.</span ></div>
        
    </div>
}


export default RightSection
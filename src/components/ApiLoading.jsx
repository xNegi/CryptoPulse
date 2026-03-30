import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleExclamation} from "@fortawesome/free-solid-svg-icons";

const ApiLoading = () => {
  return (
    <main>

        <div className='flex flex-col items-center gap-2 justify-center h-[61vh] w-full animate-pulse '>
            <h2 className='font-semibold text-2xl'> 
                <FontAwesomeIcon icon={faCircleExclamation}/> 
                Oops , Looks like api is currently unavailable...</h2>
            <p>fetching data please wait or visit us again later</p>
        </div>
      
    </main>
  )
}

export default ApiLoading

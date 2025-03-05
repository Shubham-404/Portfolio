import React from 'react'

const Input = (props) => {
    return (
        <div className="w-full md:w-1/2 !p-3 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for={props.For}>
                {props.Lable}
            </label>
            <input className="appearance-none block w-full bg-gray-900/60 text-gray-700 border border-purple-300/20 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-900" id={props.id} type={props.Type} placeholder={props.Place} />
            {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>
    )
}

export default Input
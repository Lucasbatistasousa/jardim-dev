function ContactButton({titulo}) {

    return (
        <button className=' rounded-4xl pt-2 pb-2 pr-5.5 pl-5.5 text-center cursor-pointer text-white border border-white hover:bg-red-600 transition duration-300 ease-in-out active:opacity-70'>{titulo}</button>
    )
}

export default ContactButton
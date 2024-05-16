import { useEffect } from "react"

export default function ScrollTopTop() {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })

    return (
        <>
            <div className='h-[800vh]'>

            </div>
        </>
    )
}

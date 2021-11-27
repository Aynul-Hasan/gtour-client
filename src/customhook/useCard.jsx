import axios from "axios"
import { useEffect, useState } from "react"

const useCard=()=>{
    const [card, setcard] = useState([])
    const [isloding, setisloding] = useState(true)
    useEffect(() => {
        const callCard=async()=>{
            try{
                // setisloding(true)
                const res= await axios.get('https://grim-treat-11847.herokuapp.com/service')
                setcard(res.data)
                setisloding(false)
            }catch(err){

            }
        }
        callCard()
    }, [])
    return{card,isloding}
}
export default useCard;
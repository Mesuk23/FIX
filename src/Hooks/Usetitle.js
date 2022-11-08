import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title}- FIX`;
    }, [title])
}

export default useTitle;
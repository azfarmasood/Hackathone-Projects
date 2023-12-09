import { FC } from "react"
const Wrapper:FC<{children:React.ReactNode}> = ({children}) => {
    return (  
        <div className="mx-auto container">
            {children}
        </div>
    );
}
 
export default Wrapper;
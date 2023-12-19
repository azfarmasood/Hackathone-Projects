import { FC } from "react";

interface WrapperProp {
    children: React.ReactNode
}

const Wrapper:FC<WrapperProp> = ({children}) => {
    return ( 
        <div className="px-4 container max-w-screen-2.5 mx-auto">
            {children}
        </div>
     );
}
 
export default Wrapper;
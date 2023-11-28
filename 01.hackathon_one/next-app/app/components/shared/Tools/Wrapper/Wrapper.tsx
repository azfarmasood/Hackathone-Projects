import { FC } from "react"

const Wrapper:FC<{children:React.ReactNode}> = ({children}) => {
  return (
    <div className="max-w-screen-2.5 mx-auto lg:px-16 px-6">
        {children}
    </div>
  )
}

export default Wrapper
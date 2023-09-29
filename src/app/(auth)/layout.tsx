import { FC, ReactNode } from "react"

interface AuthlayoutProps {
    children: ReactNode;
}

const Authlayout: FC<AuthlayoutProps> = ({ children }) => {
  return (
    <div className="bg-slate-200 w-full px-10 py-5 rounded-md sm:w-full sm:px-20 md:w-3/5 md:px-20 lg:w-2/5 lg:px-20 xl:w-1/3 xl:px-20">
      {children}
    </div>
  )
}

export default Authlayout
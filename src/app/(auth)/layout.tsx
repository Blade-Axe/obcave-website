import { FC, ReactNode } from "react"

interface AuthlayoutProps {
    children: ReactNode;
}

const Authlayout: FC<AuthlayoutProps> = ({ children }) => {
  return (
    <div className="bg-slate-200 w-full sm:w-full md:w-3/5 lg:w-2/5 xl:w-1/3 p-20 rounded-md">{children}</div>
  )
}

export default Authlayout
import { ReactNode } from "react"

export default ({ children, dialog }: { children: ReactNode, dialog: ReactNode }) => {
    return (
        <div>
            {children}
            {dialog}
        </div>
    )
}
import React from "react";

export default function CalcasLayout({
    children,
}:{
    children: React.ReactNode
}) 
{
    return(
        <React.Fragment>
            {children}
        </React.Fragment>
    )
}
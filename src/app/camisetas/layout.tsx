import React from "react";

export default function CamisetasLayout({
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
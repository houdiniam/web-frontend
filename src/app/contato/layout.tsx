import React from "react";

export default function ContatoLayout({
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
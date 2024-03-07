import React from "react";

export default function SapatosLayout({
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
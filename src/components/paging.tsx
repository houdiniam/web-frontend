import React from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function Paging() {

    return (
        <div className="flex items-center gap-4 my-5">
            <Button
                placeholder="botao"
                variant="text"
                className="flex items-center gap-2"
                style={{ color: "#00A8A9" }}
            >
                <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-2">
                <IconButton placeholder="paging" style={{ backgroundColor: "white", color: "gray" }} >1</IconButton>
                <IconButton placeholder="paging" style={{ backgroundColor: "white", color: "gray" }} >2</IconButton>
                <IconButton placeholder="paging" style={{ backgroundColor: "#CB0D1F" }}>3</IconButton>
                <IconButton placeholder="paging" style={{ backgroundColor: "white", color: "gray" }} >4</IconButton>
                <IconButton placeholder="paging" style={{ backgroundColor: "white", color: "gray" }} >5</IconButton>
            </div>
            <Button
                placeholder="botao"
                variant="text"
                className="flex items-center gap-2"
                style={{ color: "#00A8A9" }}
            >
                <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
            </Button>
        </div>
    );
}
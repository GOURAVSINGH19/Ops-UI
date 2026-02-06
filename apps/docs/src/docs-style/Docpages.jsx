import React from "react"
import { cn } from "@workspace/ui/lib/utils"

export const Overview = ({ title, description }) => {
    return (
        <div className={cn("flex flex-col gap-2")}>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}

export const Installation = ({ title, description }) => {
    return (
        <div className={cn("flex flex-col gap-2")}>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}

export const Preview = ({ title, description }) => {
    return (
        <div className={cn("flex flex-col gap-2")}>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}

export const Anatomy = ({ title, description }) => {
    return (
        <div className={cn("flex flex-col gap-2")}>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}

export const Customizing = ({ title, description }) => {
    return (
        <div className={cn("flex flex-col gap-2")}>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}

export const Tips = ({ title, description }) => {
    return (
        <div className={cn("flex flex-col gap-2")}>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}

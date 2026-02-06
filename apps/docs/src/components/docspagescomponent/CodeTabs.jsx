import * as React from "react"

import { useConfig } from "../../hooks/useConfig"
import { Tabs } from "@workspace/ui/components/ui/tabs"

export function CodeTabs({ children }) {
    
    const [config, setConfig] = useConfig()

    const installationType = React.useMemo(() => {
        return config.installationType || "cli"
    }, [config])

    return (
        <Tabs
            value={installationType}
            onValueChange={(value) =>
                setConfig({ ...config, installationType: value})
            }
            className="relative mt-6 w-full "
        >
            {children}
        </Tabs>
    )
}
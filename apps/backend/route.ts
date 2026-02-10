import fs from "fs-extra"
import path from "path"

export async function POST(req: any) {
    try {
        const body = await req.json()
        const { name, category, code, dependencies } = body
        console.log(body);

        if (!name || !category || !code) {
            return req.json(
                { error: "Missing required fields (name, category, or code)" },
                { status: 400 }
            )
        }

        const sanitizedName = name.replace(/[^a-zA-Z0-9]/g, "")

        const baseDir = path.join(process.cwd(), "components", "docs")
        const categoryDir = path.join(baseDir, category)
        const componentDir = path.join(categoryDir, sanitizedName)

        await fs.ensureDir(componentDir)

        const codePath = path.join(componentDir, "index.tsx")
        await fs.writeFile(codePath, code, "utf-8")

        const metadataPath = path.join(componentDir, "metadata.json")
        const metadata = {
            name: sanitizedName,
            type: `components:${category}`,
            title: sanitizedName.replace(/([A-Z])/g, ' $1').trim(),
            description: `A new ${category} component called ${sanitizedName}.`,
            dependencies: dependencies || [],
            registryDependencies: []
        }
        await fs.writeFile(metadataPath, JSON.stringify(metadata, null, 2), "utf-8")

        console.log(`Component ${sanitizedName} registered successfully at ${componentDir}`)

        return req.json({
            success: true,
            message: `Component ${sanitizedName} registered successfully.`,
            path: componentDir
        })

    } catch (error) {
        console.error("Error registering component:", error)
        return req.json(
            { error: "Internal Server Error", details: error || "error" },
            { status: 500 }
        )
    }
}

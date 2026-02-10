import fs from "fs-extra"
import path from "path"
import { components } from "../registry/components"

const SRC_DIR = path.join(process.cwd(), "src")
const TYPES_DIR = path.join(process.cwd(), "types")
const OUTPUT_FILE = path.join(process.cwd(), "scripts", "registry.json")
const TYPES_OUTPUT_FILE = path.join(process.cwd(), "scripts", "types.json")

async function buildRegistry() {
    console.log("Building registry from config...")

    try {
        const registry = await Promise.all(components.map(async (component) => {
            const sourcePath = path.join(SRC_DIR, component.source.path)

            if (!await fs.pathExists(sourcePath)) {
                console.warn(`Warning: Source file not found for ${component.id} at ${sourcePath}`)
                return null
            }

            const content = await fs.readFile(sourcePath, "utf-8")

            return {
                name: component.id,
                type: "components:ui",
                files: [
                    {
                        path: component.source.path,
                        content
                    }
                ],
                dependencies: component.dependencies || [],
                registryDependencies: []
            }
        }))

        // Filter out any components that were not found
        const filteredRegistry = registry.filter(c => c !== null)

        await fs.ensureDir(path.dirname(OUTPUT_FILE))
        await fs.writeFile(OUTPUT_FILE, JSON.stringify(filteredRegistry, null, 2))
        console.log(`Registry built with ${filteredRegistry.length} components at ${OUTPUT_FILE}`)

        // Build Types Registry
        if (await fs.pathExists(TYPES_DIR)) {
            const typeFiles = await fs.readdir(TYPES_DIR)
            const filteredTypeFiles = typeFiles.filter(file => file.endsWith(".ts") || file.endsWith(".tsx"))
            await fs.writeFile(TYPES_OUTPUT_FILE, JSON.stringify(filteredTypeFiles, null, 2))
            console.log(`Types manifest built with ${filteredTypeFiles.length} files at ${TYPES_OUTPUT_FILE}`)
        }
    } catch (error) {
        console.error("Failed to build registry:", error)
        throw error
    }
}

buildRegistry().catch(err => {
    console.error(err)
    process.exit(1)
})

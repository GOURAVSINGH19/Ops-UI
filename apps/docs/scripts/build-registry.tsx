
import fs from "fs-extra"
import path from "path"

const COMPONENTS_DIR = path.join(process.cwd(), "src/components/docs/ui")
const OUTPUT_FILE = path.join(process.cwd(), "src/scripts", "registry.json")

async function buildRegistry() {
    console.log("Building registry...")
    const registry: any[] = []

    async function scanDir(dir: string, relativePath = "") {
        if (!fs.existsSync(dir)) return;
        const items = await fs.readdir(dir)

        for (const item of items) {
            const itemPath = path.join(dir, item)
            const stat = await fs.stat(itemPath)
            const currentRelativePath = path.join(relativePath, item)

            if (stat.isDirectory()) {
                const metadataPath = path.join(itemPath, "metadata.json")
                const indexPath = path.join(itemPath, "index.jsx")

                if (await fs.pathExists(metadataPath) && await fs.pathExists(indexPath)) {
                    // It's a structured component directory
                    const metadata = await fs.readJson(metadataPath)
                    const content = await fs.readFile(indexPath, "utf-8")

                    registry.push({
                        ...metadata,
                        files: [
                            {
                                path: `components/ui/${currentRelativePath}/index.jsx`,
                                content
                            }
                        ]
                    })
                } else {
                    // Keep scanning
                    await scanDir(itemPath, currentRelativePath)
                }
            } else if (stat.isFile() && item.endsWith(".jsx") && !item.startsWith("index")) {
                // It's a standalone component file
                const name = path.basename(item, ".jsx").toLowerCase()
                const content = await fs.readFile(itemPath, "utf-8")

                registry.push({
                    name,
                    type: "components:ui",
                    files: [
                        {
                            path: `components/ui/${currentRelativePath}`,
                            content
                        }
                    ],
                    dependencies: [],
                    registryDependencies: [],
                })
            }
        }
    }

    await scanDir(COMPONENTS_DIR)

    await fs.ensureDir(path.dirname(OUTPUT_FILE))
    await fs.writeFile(OUTPUT_FILE, JSON.stringify(registry, null, 2))

    console.log(`Registry built with ${registry.length} components at ${OUTPUT_FILE}`)
}

buildRegistry().catch(err => {
    console.error(err)
    process.exit(1)
})

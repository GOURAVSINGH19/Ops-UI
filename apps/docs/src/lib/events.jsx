import va from "@vercel/analytics"
import { z } from "zod"

const eventSchema = z.object({
  name: z.enum([
    "copy_npm_command",
  ]),
  properties: z
    .record(z.union([z.string(), z.number(), z.boolean(), z.null()]))
    .optional(),
})


export function trackEvent(input) {
  const event = eventSchema.parse(input)
  if (event) {
    va.track(event.name, event.properties)
  }
}
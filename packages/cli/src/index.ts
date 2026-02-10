#!/usr/bin/env node

import { Command } from "commander"
import { add } from "./command/add"
import { init } from "./command/init"
import { list } from "./command/list"
import { help } from "./command/help"

const program = new Command()

program
  .name("ops-cli")
  .description("CLI for OPS-UI")
  .version("0.0.1")

program.addCommand(init)
program.addCommand(add)
program.addCommand(list)
program.addCommand(help)

program.parse()

---
layout: page
title: neotest-bash
description: Neovim test adapter for Bash scripts
img:
importance: 2
category: open-source
github: https://github.com/rcasia/neotest-bash
---

A Neovim test adapter plugin for Bash scripts that enables test execution and debugging for shell scripts directly from Neovim. This plugin extends the neotest framework to support Bash testing, making it easier to write and test shell scripts.

## Features

- Bash script test discovery
- Test execution and result reporting
- Integration with neotest framework
- Support for common Bash testing patterns
- Works with various Bash testing frameworks

## Installation

Install using your favorite Neovim package manager:

```lua
-- Using lazy.nvim
{
  "rcasia/neotest-bash",
  dependencies = {
    "nvim-neotest/neotest",
  },
  config = function()
    require("neotest").setup({
      adapters = {
        require("neotest-bash"),
      },
    })
  end,
}
```

## Usage

The plugin automatically discovers and runs tests in your Bash scripts. Use neotest commands to execute tests and view results directly in Neovim.

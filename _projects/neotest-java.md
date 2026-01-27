---
layout: page
title: neotest-java
description: Neovim test adapter for Java projects using JUnit 5
img:
importance: 1
category: open-source
github: https://github.com/rcasia/neotest-java
---

A Neovim test adapter plugin for Java projects that integrates with JUnit 5. This plugin enables seamless test execution and debugging directly from Neovim, providing a smooth development experience for Java developers using the neotest framework.

## Features

- Full JUnit 5 support
- Test discovery and execution
- Integration with neotest framework
- Debugging capabilities
- Works with Maven and Gradle projects

## Installation

Install using your favorite Neovim package manager:

```lua
-- Using lazy.nvim
{
  "rcasia/neotest-java",
  dependencies = {
    "nvim-neotest/neotest",
  },
  config = function()
    require("neotest").setup({
      adapters = {
        require("neotest-java"),
      },
    })
  end,
}
```

## Usage

Once installed, you can run tests directly from Neovim using neotest commands. The plugin automatically discovers and runs JUnit 5 tests in your Java project.

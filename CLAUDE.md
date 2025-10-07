# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Jovo is a framework for building conversational and multimodal experiences across voice and chat platforms (Alexa, Google Assistant, web, Messenger, etc.). It uses a component-based architecture with TypeScript decorators and supports output templates that render to different platforms.

## Monorepo Structure

This is a Lerna monorepo with independent versioning. Key package groups:

- **`framework/`** - Core framework with App, BaseComponent, Jovo, middleware system
- **`output/`** - Output template system for cross-platform rendering
- **`common/`** - Shared utilities and types
- **`platforms/`** - Platform integrations (alexa, googleassistant, web, facebookmessenger, etc.)
- **`integrations/`** - Database (dynamodb, mongodb, redis), NLU (dialogflow, nlpjs), CMS (airtable, googlesheets), analytics, and server adapters
- **`clients/`** - Web client SDKs (Vue 2, Vue 3, vanilla)
- **`examples/`** - Example projects for testing local changes
- **`docs/`** - Documentation (served with Docsify)

## Development Commands

```bash
# Initial setup - bootstrap monorepo and build all packages
npm run setup:dev

# Build all packages (excludes examples and e2e)
npm run build

# Run tests across all packages
npm run test

# Lint and format
npm run eslint
npm run prettier

# Clean and reinstall
npm run clean
lerna bootstrap --hoist --no-ci --nohoist=@babel/* --nohoist=babel-*

# Documentation (Docsify)
npm run docs:dev    # Serve docs at localhost:3000
```

### Working on a Specific Package

When developing a package, navigate to its directory:

```bash
cd integrations/db-dynamodb  # Example

npm run build     # Compile TypeScript
npm run watch     # Watch mode - rebuild on changes
npm run test      # Run package tests
npm run prettier  # Format code
npm run eslint    # Lint code
```

### Testing Changes in Examples

Examples are linked to local packages for testing:

```bash
cd examples/typescript/basic

npm run start:dev  # Run dev server with watch mode
```

## Architecture

### Component System

Components are the primary unit of application logic, defined using decorators:

- **`@Component()`** - Marks a class as a component (defined in `framework/src/decorators/Component.ts`)
- **`BaseComponent`** - Base class all components extend from
- **`@Intents([])`** - Maps intents to handler methods
- **`@Handle({})`** - Advanced handler configuration
- **`@Global()`** - Makes handler available globally across components
- **`@Output()`** - Marks methods as output template methods

Component lifecycle follows handler routing → component instantiation → method execution.

### Middleware System

Request processing flows through middleware chains defined in `APP_MIDDLEWARES`:

1. `request.start` → `request` → `request.end`
2. `interpretation.start` → `interpretation.asr` → `interpretation.nlu` → `interpretation.end`
3. `dialogue.start` → `dialogue.router` → `dialogue.logic` → `dialogue.end`
4. `response.start` → `response.output` → `response.tts` → `response.end`

Extensible plugins can hook into these middlewares via `MiddlewareCollection`.

### Output Templates

Output templates (in `output/`) use `OutputTemplateConverter` with platform-specific strategies to transform structured output into platform-native responses. Each platform implements `OutputTemplateConverterStrategy`.

### Platform Integration

Platforms extend the `Platform` base class and implement:
- Request/response transformation
- Platform-specific capabilities
- Output template conversion strategies

### Dependency Injection

The framework uses `DependencyInjector` with `@Injectable()` and `@Inject()` decorators for component dependencies.

### Key Classes

- **`App`** - Application root, manages components and plugins
- **`Jovo`** - Request context object (`$jovo`) with helpers like `$send()`, `$redirect()`, `$resolve()`
- **`HandleRequest`** - Per-request handler that clones App configuration
- **`ComponentTree`** - Manages component hierarchy and navigation
- **`Platform`** - Base class for platform integrations

## Build System

Each package has multiple TypeScript build targets:
- `tsconfig.build.cjs.json` - CommonJS output
- `tsconfig.build.esm5.json` - ES5 modules
- `tsconfig.build.esm2015.json` - ES2015 modules
- `tsconfig.build.types.json` - Type declarations

Builds use `experimentalDecorators` and `emitDecoratorMetadata`.

## Git Workflow

**Branches:**
- `v4/latest` - Current npm release and docs (use for docs-only PRs)
- `v4/dev` - Development branch (use for code PRs)

**Branch naming:**
- `v4/feature/<name>` - New features
- `v4/bugfix/<name>` - Bug fixes
- `v4/docs/<name>` - Documentation

**Commit messages:** Use [gitmoji](https://gitmoji.dev/) conventions:
- `:memo:` - Documentation
- `:sparkles:` - New feature
- `:bug:` - Bug fix
- `:recycle:` - Refactoring
- `:white_check_mark:` - Tests

## Testing Strategy

Run tests for individual packages before submitting PRs. The examples in `examples/` are linked to local packages for integration testing.

## Important Notes

- Uses decorator-based architecture extensively (TypeScript `experimentalDecorators`)
- Platform plugins transform generic output templates to platform-specific responses
- Examples are used for local development testing, not published to npm
- The project has been sunset (see README), but code remains available

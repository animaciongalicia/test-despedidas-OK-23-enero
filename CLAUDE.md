# CLAUDE.md - AI Assistant Guide

## Project Overview

**Repository**: animaciongalicia/test-despedidas-OK-23-enero
**Purpose**: Test project for "despedidas" (farewells/send-offs) functionality
**Last Updated**: 2026-01-22

This document serves as a comprehensive guide for AI assistants (like Claude) working on this codebase. It explains the project structure, development workflows, coding conventions, and best practices to follow.

---

## Repository Structure

```
test-despedidas-OK-23-enero/
├── src/                    # Source code directory
│   ├── components/         # Reusable UI components
│   ├── pages/             # Application pages/routes
│   ├── services/          # Business logic and API services
│   ├── utils/             # Utility functions and helpers
│   ├── types/             # TypeScript type definitions
│   └── config/            # Configuration files
├── tests/                 # Test files
│   ├── unit/              # Unit tests
│   ├── integration/       # Integration tests
│   └── e2e/               # End-to-end tests
├── docs/                  # Documentation
├── public/                # Static assets
└── config/                # Build and environment configuration
```

**Note**: This structure is indicative. Always verify the actual structure when working on the codebase.

---

## Development Workflows

### Git Workflow

#### Branch Naming Convention
- Feature branches: `feature/<description>`
- Bug fixes: `fix/<description>`
- Claude AI branches: `claude/<session-id>` (automatically created)
- Test branches: `test/<description>`

#### Commit Guidelines
1. **Commit Message Format**:
   ```
   <type>: <short description>

   <optional detailed description>

   <optional footer>
   ```

2. **Commit Types**:
   - `feat:` - New feature
   - `fix:` - Bug fix
   - `docs:` - Documentation changes
   - `style:` - Code style changes (formatting, missing semicolons, etc.)
   - `refactor:` - Code refactoring
   - `test:` - Adding or updating tests
   - `chore:` - Maintenance tasks

3. **Examples**:
   ```
   feat: add user authentication flow

   Implemented JWT-based authentication with login and logout functionality.
   Includes form validation and error handling.
   ```

#### Push Protocol
- **Always use**: `git push -u origin <branch-name>`
- **Branch requirement**: Must start with `claude/` for AI assistant branches
- **Retry logic**: On network failures, retry up to 4 times with exponential backoff (2s, 4s, 8s, 16s)

#### Pull Request Process
1. Ensure all tests pass
2. Update documentation if needed
3. Write clear PR description explaining:
   - What was changed
   - Why it was changed
   - How to test the changes
4. Reference related issues

---

## Code Conventions

### General Principles

1. **KISS (Keep It Simple, Stupid)**
   - Avoid over-engineering
   - Only add features that are explicitly requested
   - Don't add "nice-to-have" improvements unless asked

2. **YAGNI (You Aren't Gonna Need It)**
   - Don't add functionality for hypothetical future requirements
   - Don't create abstractions for one-time operations
   - Three similar lines are better than a premature abstraction

3. **Clean Code**
   - Write self-documenting code with clear variable and function names
   - Add comments only when logic isn't self-evident
   - Keep functions small and focused on a single responsibility

### Language-Specific Conventions

#### JavaScript/TypeScript
- Use `const` by default, `let` only when reassignment is needed
- Prefer arrow functions for callbacks
- Use template literals for string interpolation
- Prefer async/await over promise chains
- Use destructuring when it improves readability

#### Python
- Follow PEP 8 style guide
- Use type hints for function parameters and return values
- Prefer list comprehensions over map/filter when readable
- Use context managers (with statements) for resource management

#### CSS/Styling
- Use consistent naming convention (BEM, CSS Modules, or project-specific)
- Avoid inline styles unless absolutely necessary
- Keep selectors specific but not overly nested

### Error Handling

1. **Validate at System Boundaries**
   - User input
   - External API calls
   - File system operations

2. **Don't Add Unnecessary Error Handling**
   - Trust internal code and framework guarantees
   - Don't wrap every operation in try/catch
   - Only handle errors you can actually recover from

3. **Security-First Approach**
   - Never introduce security vulnerabilities (XSS, SQL injection, command injection)
   - Sanitize user input
   - Use parameterized queries
   - Validate and escape output
   - Follow OWASP top 10 guidelines

---

## Testing Strategy

### Test Coverage Goals
- Unit tests: Core business logic and utilities
- Integration tests: API endpoints and service interactions
- E2E tests: Critical user flows

### Running Tests
```bash
# Run all tests
npm test  # or: pytest, cargo test, etc.

# Run specific test file
npm test <test-file>

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

### Writing Tests
1. **Arrange-Act-Assert** pattern
2. One assertion per test (when possible)
3. Clear, descriptive test names
4. Test behavior, not implementation
5. Mock external dependencies

---

## Common Tasks for AI Assistants

### When Making Changes

1. **Always Read Before Editing**
   - Never propose changes to code you haven't read
   - Understand context before modifying
   - Use Read tool to examine existing code

2. **Use TodoWrite for Multi-Step Tasks**
   - Break complex tasks into smaller steps
   - Track progress throughout implementation
   - Mark todos as completed immediately after finishing
   - Keep only ONE task in_progress at a time

3. **Minimal Changes Principle**
   - Only change what's necessary
   - Don't refactor unrelated code
   - Don't add comments/docstrings to unchanged code
   - Avoid backwards-compatibility hacks

4. **Testing After Changes**
   - Run relevant tests after making changes
   - Fix any breaking tests before committing
   - Add new tests for new functionality

### Common Patterns

#### Adding a New Feature
```
1. Read existing code to understand patterns
2. Create TodoWrite plan with steps
3. Implement feature following existing conventions
4. Add/update tests
5. Update documentation if needed
6. Commit with descriptive message
```

#### Fixing a Bug
```
1. Reproduce the bug (if possible)
2. Read relevant code to understand root cause
3. Create TodoWrite plan if complex
4. Fix the issue with minimal changes
5. Add regression test
6. Verify fix works
7. Commit with "fix:" prefix
```

#### Refactoring
```
1. Only refactor when explicitly requested
2. Ensure tests exist before refactoring
3. Make small, incremental changes
4. Run tests after each change
5. Commit frequently with clear messages
```

---

## File References

When referencing code in responses, use the format:
```
file_path:line_number
```

Example:
- "The authentication logic is in src/services/auth.ts:45"
- "Error handling happens in src/utils/errors.ts:23-67"

---

## Codebase-Specific Conventions

### Despedidas Project

This project handles "despedidas" (farewells/send-offs) functionality. Key considerations:

1. **User Experience**
   - Focus on emotional and respectful presentation
   - Ensure smooth workflows for creating/managing farewells
   - Handle user data with care and privacy

2. **Data Handling**
   - May involve personal/sensitive information
   - Implement proper data validation
   - Consider GDPR/privacy requirements

3. **Media Management**
   - Likely includes photos, videos, or other media
   - Optimize for performance
   - Handle various file formats gracefully

---

## AI Assistant Best Practices

### DO
- ✅ Read files before modifying them
- ✅ Use TodoWrite for complex multi-step tasks
- ✅ Follow existing code patterns and conventions
- ✅ Write clear, concise commit messages
- ✅ Run tests before committing
- ✅ Ask for clarification when requirements are unclear
- ✅ Use specialized tools (Read, Edit, Write) over bash commands
- ✅ Make parallel tool calls when operations are independent
- ✅ Fix security vulnerabilities immediately if introduced
- ✅ Provide file:line references when discussing code

### DON'T
- ❌ Make changes to code you haven't read
- ❌ Over-engineer solutions
- ❌ Add features not explicitly requested
- ❌ Create premature abstractions
- ❌ Add unnecessary error handling
- ❌ Refactor unrelated code
- ❌ Add backwards-compatibility hacks
- ❌ Use bash for file operations (use Read/Edit/Write instead)
- ❌ Batch multiple todo completions (mark completed immediately)
- ❌ Guess or use placeholders in tool parameters

### Communication Style
- Be concise and technical
- Output text directly to communicate (not via bash echo)
- Use GitHub-flavored markdown for formatting
- Avoid emojis unless explicitly requested
- Focus on facts over validation
- Prioritize technical accuracy

---

## Project-Specific Notes

### Current Status
- Repository initialized on 2026-01-22
- Currently in early development/setup phase
- Branch: `claude/claude-md-mkq2a4c84ycpqekp-4ve6X`

### Next Steps
As the project develops, this section should be updated with:
- Technology stack details (React, Vue, Angular, etc.)
- Build and deployment processes
- Environment configuration
- API documentation references
- Database schema information
- Third-party integrations

---

## Resources

### Useful Commands

```bash
# Check repository status
git status

# View recent commits
git log --oneline -10

# Find files by pattern
find . -name "*.js"  # Or use Glob tool

# Search code for patterns
grep -r "pattern" .  # Or use Grep tool

# List directory contents
ls -la
```

### File Operations
Always prefer specialized tools:
- **Reading files**: Use `Read` tool, not `cat/head/tail`
- **Editing files**: Use `Edit` tool, not `sed/awk`
- **Writing files**: Use `Write` tool, not `echo >` or heredocs
- **Finding files**: Use `Glob` tool, not `find`
- **Searching code**: Use `Grep` tool, not `grep/rg`

---

## Troubleshooting

### Common Issues

1. **Git Push Fails (403 Error)**
   - Ensure branch name starts with `claude/` for AI assistant work
   - Verify branch name ends with session ID
   - Check network connectivity

2. **Tests Failing**
   - Read test output carefully
   - Check for missing dependencies
   - Verify environment configuration
   - Don't mark tasks complete if tests fail

3. **Can't Find Files**
   - Use Glob tool to search by pattern
   - Use Grep tool to search by content
   - Check if files exist in different directory than expected

---

## Maintenance

This document should be updated when:
- Project structure changes significantly
- New conventions are established
- Technology stack is modified
- New development workflows are introduced
- Common issues or patterns emerge

**Last Review**: 2026-01-22
**Next Review**: When project structure is established

---

## Contact & Support

For questions or issues:
1. Check this CLAUDE.md first
2. Review project README.md (if exists)
3. Check inline code documentation
4. Review git commit history for context
5. Ask the development team for clarification

---

*This document is a living guide. As the codebase evolves, keep this file updated to reflect current practices and conventions.*

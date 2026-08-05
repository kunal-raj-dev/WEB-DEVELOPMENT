# CSS Display Notes

## Important Concepts & Tags
- `display: block`: Renders on a new line, takes up full width.
- `display: inline`: Stays in line, ignores height/vertical padding rules.
- `display: inline-block`: Stays in line, respects height/width/padding controls.
- `display: none`: Completely removes the element from the document layout.

## Common Mistakes
- Assigning width and height to inline elements (like `<a>` or `<span>`) and wondering why they don't apply.
- Confusing `display: none` (removes from document flow) with `visibility: hidden` (hides visually but leaves space).

## Interview Notes
- **How does display: inline-block differ from display: inline?** An `inline-block` element can be styled with custom width, height, and margins, while behaving like an inline element (staying on the same line as surrounding text).

## Practice Ideas
- Build a horizontal navigation bar using list items styled with `display: inline-block`.

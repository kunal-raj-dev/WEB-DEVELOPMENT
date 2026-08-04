# CSS Inheritance Notes

## Important Concepts & Tags
- `inherit`: Explicitly forces an element to inherit styles from its parent.
- `initial`: Resets a property value to its default CSS standard value.

## Common Mistakes
- Expecting margins, padding, or borders to inherit down to child containers.
- Forgetting that form inputs and buttons override inherited parent text properties, requiring explicit settings.

## Interview Notes
- **Which CSS properties are inherited by default?** Typography properties (like `font-family`, `font-size`, `color`, `line-height`) are inherited. Box properties (like `border`, `padding`, `margin`, `width`, `height`) are not inherited.
- **How can you force a non-inheriting property to inherit?** You can set its value explicitly to `inherit` (e.g. `border: inherit;`).

## Practice Ideas
- Create a dark-themed wrapper div and check how child components inherit typography color.

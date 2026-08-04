# CSS Box Model Notes

## Important Concepts & Tags
- Content area: Text and images inside.
- Padding: Spacing between content and borders.
- Border: Outer wrapper around content and padding.
- Margin: Spacing outside borders, between adjacent elements.
- `box-sizing`: Switches calculation method between standard `content-box` and layout-friendly `border-box`.

## Common Mistakes
- Struggling with layout sizing due to forgetting that padding and border are added to width in standard `content-box` calculations.
- Confusing margin (outside elements) with padding (inside elements).

## Interview Notes
- **What does box-sizing: border-box do?** It forces the padding and borders to be included within the element's total declared width and height, preventing content overflows.
- **What is margin collapse?** Adjacent top and bottom margins of block elements sometimes merge into a single margin equal to the largest of the two.

## Practice Ideas
- Build two boxes side-by-side: one using standard sizing and another using `border-box` sizing to inspect layout behavior.

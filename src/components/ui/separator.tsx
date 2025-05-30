// import * as React from "react"
// import * as SeparatorPrimitive from "@radix-ui/react-separator"

// import { cn } from "@/lib/utils"

// function Separator({
//   className,
//   orientation = "horizontal",
//   decorative = true,
//   ...props
// }: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
//   return (
//     <SeparatorPrimitive.Root
//       data-slot="separator-root"
//       decorative={decorative}
//       orientation={orientation}
//       className={cn(
//         "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
//         className
//       )}
//       {...props}
//     />
//   )
// }

// export { Separator }


import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

type SeparatorProps = React.ComponentProps<typeof SeparatorPrimitive.Root> & {
  /** When vertical, render a simple "|" instead of a CSS line */
  asPipe?: boolean
}

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  asPipe = true,
  ...props
}: SeparatorProps) {
  // If vertical + asPipe: render a text‐based pipe
  if (orientation === "vertical" && asPipe) {
    return (
      <span
        role="separator"
        aria-orientation="vertical"
        aria-hidden={decorative}
        // center the pipe and prevent text-selection
        className={cn(
          "select-none leading-none inline-block",
          className
        )}
        {...props}
      >
        |
      </span>
    )
  }

  // Otherwise use the Radix SeparatorPrimitive
  return (
    <SeparatorPrimitive.Root
      data-slot="separator-root"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0",
        // horizontal → dotted line (top border)
        "data-[orientation=horizontal]:w-full data-[orientation=horizontal]:border-t data-[orientation=horizontal]:border-dotted data-[orientation=horizontal]:border-border",
        // vertical → solid line (left border)
        "data-[orientation=vertical]:h-full data-[orientation=vertical]:border-l data-[orientation=vertical]:border-solid data-[orientation=vertical]:border-border",
        className
      )}
      {...props}
    />
  )
}

export { Separator }


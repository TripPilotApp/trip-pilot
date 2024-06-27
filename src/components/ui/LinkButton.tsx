import { cva, type VariantProps } from "class-variance-authority";
import { Link, LinkProps  } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const LinkVariants = cva(
  [
    "font-sora",
    "rounded-2xl",
    "font-bold",
    "tracking-widest",
    "shadow-3xl",
    "gap-2",
    "py-1.5"
  ],
  {
    variants: {
      intent: {
        blue: [
          "bg-blue",
          "text-white",
          "border-transparent",
          "hover:bg-blue-500",
        ],
        teal: ["bg-teal", "border-gray-400", "hover:bg-teal-400"],
      },
      size: {
        small: ["text-xl", "py-3", "px-6", "w-full"],
        medium: ["text-base", "py-2", "px-4"],
        large: ["w-full", "text-xl", "py-3", "px-10"],
      },
    },
    compoundVariants: [
      {
        intent: "blue",
        size: "medium",
      },
    ],
    defaultVariants: {
      intent: "blue",
      size: "medium",
    },
  }
);

export interface LinkButtonProps
  extends LinkProps,
  VariantProps<typeof LinkVariants> {
  children: React.ReactNode;
  className?: string;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  intent,
  size,
  className,
  ...props
}) => (
  <Link
    {...props}
    className={twMerge(LinkVariants({ className, intent, size }))}
  />
);
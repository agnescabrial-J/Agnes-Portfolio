import * as React from "react";
const colors = [
  "#ADFF2F",
  "#32CD32",
  "#3CB371",
  "#2E8B57",
  "#9ACD32",
  "#808000",
  "#556B2F",
  "#20B2AA",
];
// Avatar Root
interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className = "", ...props }, ref) => (
    <div
      ref={ref}
      className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`}
      {...props}
    />
  )
);
Avatar.displayName = "Avatar";

// Avatar Image
interface AvatarImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
}

const AvatarImage = React.forwardRef<HTMLImageElement, AvatarImageProps>(
  ({ className = "", ...props }, ref) => {
    const [error, setError] = React.useState(false);

    // If image fails, render fallback instead
    if (error) {
      // props.alt can be used for the fallback letter
      const fallbackLetter = props.alt?.charAt(0).toUpperCase() || "A";

      return (
        <AvatarFallback>
          {fallbackLetter}
        </AvatarFallback>
      );
    }

    return (
      <img
        ref={ref}
        className={`aspect-square h-full w-full object-cover ${className} border-2 border-[var(--color-primary-from)] rounded-full`}
        {...props}
        onError={() => setError(true)}
      />
    );
  }
);

AvatarImage.displayName = "AvatarImage";

// Avatar Fallback
interface AvatarFallbackProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const AvatarFallback = React.forwardRef<HTMLDivElement, AvatarFallbackProps>(
  ({ className = "", children, ...props }, ref) => {
    let letter = "A";
    let content: React.ReactNode = null;

    if (typeof children === "string" && children.length > 0) {
      letter = children[0].toUpperCase();
      content = letter;
    } else if (React.isValidElement(children)) {
      // If a valid icon or element is passed
      content = children;
    } else {
      // Default fallback if nothing is passed
      content = letter;
    }

    return (
      <div
        ref={ref}
        className={`flex h-full w-full items-center justify-center rounded-full text-white text-sm font-medium ${className}`}
        style={{
          backgroundColor: colors[letter.charCodeAt(0) % colors.length],
        }}
        {...props}
      >
        {content}
      </div>
    );
  }
);
AvatarFallback.displayName = "AvatarFallback";

export { Avatar, AvatarImage, AvatarFallback };
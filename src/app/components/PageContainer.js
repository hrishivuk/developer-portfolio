/**
 * Matches the navbar width, centering, and horizontal padding exactly.
 */
export function pageContainerClassName(extra = "") {
  return [
    "mx-auto w-full max-w-[1440px]",
    "px-5 sm:px-8 lg:px-12 xl:px-16",
    extra,
  ]
    .filter(Boolean)
    .join(" ");
}

export default function PageContainer({ children, className = "", style = {} }) {
  return (
    <div className={pageContainerClassName(className)} style={style}>
      {children}
    </div>
  );
}

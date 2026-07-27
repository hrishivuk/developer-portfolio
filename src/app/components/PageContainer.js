/**
 * Matches the navbar width, centering, and horizontal padding exactly.
 */
export function pageContainerClassName(extra = "") {
  return [
    "w-[calc(100%-1rem)] sm:w-[calc(100%-1.5rem)] md:w-[calc(100%-2rem)]",
    "max-w-full md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1320px] 2xl:max-w-[1560px] min-[1920px]:max-w-[1760px]",
    "mx-auto px-3 sm:px-4 md:px-6 lg:px-8",
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

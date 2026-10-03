/**
 * Responsive WebP image with optional LCP-priority attrs.
 * Pass `src900` + optional denser/wider descriptors, or a full `srcSet`.
 */
const ResponsiveImg = ({
  src,
  src900,
  srcSet,
  alt = "",
  className,
  sizes = "(max-width: 1024px) 100vw, 55vw",
  width,
  height,
  src900Width = 900,
  srcWidth = 1600,
  priority = false,
  loading,
  decoding = "async",
  ...rest
}) => {
  const resolvedLoading = loading ?? (priority ? "eager" : "lazy");
  const resolvedSrcSet =
    srcSet ??
    (src900 ? `${src900} ${src900Width}w, ${src} ${srcWidth}w` : undefined);

  return (
    <img
      src={src}
      srcSet={resolvedSrcSet}
      sizes={resolvedSrcSet ? sizes : undefined}
      width={width}
      height={height}
      alt={alt}
      className={className}
      fetchPriority={priority ? "high" : undefined}
      loading={resolvedLoading}
      decoding={decoding}
      {...rest}
    />
  );
};

export default ResponsiveImg;

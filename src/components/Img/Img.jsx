const Img = ({ src, alt, ...props }) => {
  const fallbackSrc = "/img/fall-back-img.png"; // Defina a URL da imagem cinza
  return (
    <img
      top={props.$top}
      src={src}
      onError={(e) => {
        e.target.onerror = null; // Evita loops infinitos
        e.target.src = fallbackSrc; // Define a imagem de fallback
      }}
      alt={alt}
      {...props}
    />
  );
};

export { Img }
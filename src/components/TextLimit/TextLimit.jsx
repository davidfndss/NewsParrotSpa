function TextLimit({text, limit, isTitle}) {
  const textLimited = text?.length > limit ? `${text.substring(0, limit)}...` : text

  if (isTitle) {
    return <h1>{textLimited}</h1>
  }
  
  return <p>{textLimited}...</p>
}

export { TextLimit }
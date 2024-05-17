import { LoadingSectionStyled } from "./LoadingSectionStyled"
import 'ldrs/ring2'

const LoadingSection = () => {
  return ( 
    <LoadingSectionStyled>
      <l-ring-2
      size="35"
      stroke="5"
      stroke-length="0.25"
      bg-opacity="0.1"
      speed="0.8"
      color="black" 
      ></l-ring-2> 
    </LoadingSectionStyled>
  )
}

export { LoadingSection }
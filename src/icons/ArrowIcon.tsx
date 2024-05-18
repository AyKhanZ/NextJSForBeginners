import * as React from "react"
import { SVGProps } from "react"

interface Props{
  w:number;
  h:number;
}
const SvgComponent = ({h,w}:Props,props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={w}
    height={h}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="M782.876 512.999c-6.868 0-13.165-3.929-15.864-10.376-1.98-4.679-51.462-115.67-236.468-137.652-38.536-4.678-84.69-7.078-140.74-7.497v138.341c0 6.388-3.449 12.176-9.117 15.235-5.638 2.939-12.386 2.519-17.634-.99L7.617 270.804A17.198 17.198 0 0 1 0 256.529c0-5.728 2.819-10.946 7.617-14.305L363.203 2.938c5.248-3.63 11.936-3.869 17.634-.87 5.698 3.059 9.087 8.847 9.087 15.055v128.745C467.236 155.944 800 215.743 800 495.965c0 8.127-5.728 15.235-13.765 16.854-1.11.18-2.279.18-3.359.18Z"
    />
  </svg>
)
export default SvgComponent

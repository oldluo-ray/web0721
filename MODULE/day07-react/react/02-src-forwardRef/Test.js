import React from 'react'

export default function Test(props) {
  console.log(props)
  return (
    <div>
      <input type='text' ref={props.a} />
    </div>
  )
}

// export default React.forwardRef((props, ref) => {
// //   console.log(props, ref)
//   return (
//     <div>
//       <input type='text' ref={ref} />
//     </div>
//   )
// })

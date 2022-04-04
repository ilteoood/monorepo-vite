import React, {Suspense} from 'react'

const SuspenserFallback = () => <div>{'Loading...'}</div>

const Suspenser = ({children}) => {
  return (
        <Suspense fallback={<SuspenserFallback />}>
            {children}
        </Suspense>
  )
}

export default Suspenser

'use client'

const FilterError = ({error}) => {
  return (
    <div id="error">
        <h2>에러!!</h2>     
        <p>{error.message}</p>
    </div>
  )
}

export default FilterError;
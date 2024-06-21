import React from 'react'

const ArchiveLayout = ({archive, lastest}) => {
  return (
    <div>
      <h1>News Archive======================</h1>
      <section id="archive-filter">
           1. {archive}
      </section>
      <section id="archive-latest">
          2. {lastest}
      </section>
    </div>
  )
}

export default ArchiveLayout
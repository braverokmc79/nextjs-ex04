import React from 'react'

const ArchiveLayout = ({archive, lastest}) => {
  return (
    <div>
      <h1>News Archive</h1>
      <section id="archive-filter">
           {archive}
      </section>
      <section id="archive-latest">
           {lastest}
      </section>
    </div>
  )
}

export default ArchiveLayout
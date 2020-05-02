import React from 'react'

const product = ({ pageContext }) => {
    return (
        <div>
            <img
src={pageContext.image}
alt={pageContext.title}
style={{ float: "left", marginRight: "1rem", width: 150 }}
/>
<p>{pageContext.price}</p>
<div dangerouslySetInnerHTML={{ __html: pageContext.description }}>
</div>
        </div>
    )
}

export default product


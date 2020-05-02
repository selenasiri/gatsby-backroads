exports.createPages = ({ actions: { createPage }}) => {
    createPage({
        path: '/page-with-context/',
        component: require.resolve("./src/templates/with-context.js"),
        context: {
        title: "We Don't Need No Stinkin' GraphQL!",
        content: "<p>This is page content.</p><p>No GraphQL required! </p>",
    }
    })
}

exports.createPages = ({ actions: { createPage } }) => {
    const products = require("./data/products.json")
products.forEach(product => {
    createPage({
        path: `/product/${product.slug}/`,
        component: require.resolve("./src/templates/product.js"),
        context: {
            title: product.title,
            description: product.description,
            image: product.image,
            price: product.price,
        },
    })
})
}


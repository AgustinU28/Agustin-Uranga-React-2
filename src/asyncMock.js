const products = [
    { 
        id: '1', 
        name: 'iphone 14', 
        price: 1400, 
        category: 'celular', 
        img:'https://d500.epimg.net/cincodias/imagenes/2022/10/04/smartphones/1664888888_232618_1664889212_sumario_normal.jpg', 
        stock: 25, 
        description:'Descripcion de Iphone 14',
    },
    { id: '2', name: 'samsung s22 ULTRA', price: 2000, category: 'celular', img:'https://http2.mlstatic.com/D_NQ_NP_635300-MLA52140990600_102022-O.jpg', stock: 16, description:'Descripcion de Samsung s22 ULTRA'},
    { id: '3', name: 'Tablet 2023', price: 3000, category: 'tablet', img:'https://s1.eestatic.com/2021/12/03/actualidad/631948900_217191977_1024x576.jpg', stock: 10, description:'Descripcion de Tablet 2023'},
    { id: '4', name: 'MSI GAMER', price: 5000, category: 'notebook', img:'https://infoservice-cba.com.ar/wp-content/uploads/2022/07/MSI-GF63-THIN-GAMING-10SCXR-222.jpg', stock: 10, description:'Descripcion de MSI GAMER'},
]


export const getProducts = (categoryId) => {
    console.log(categoryId)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}



export const addService = (name, price) => ({
    type: 'ADD_SERVICE',
    name,
    price,
})

export const removeService = (name) => ({
    type: 'REMOVE_SERVICE',
    name,
})

export const addPrice = (price) => ({
    type: 'ADD_PRICE',
    price,
})

export const subtractPrice = (price) => ({
    type: 'SUB_PRICE',
    price,
})

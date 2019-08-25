//global state
const initState = {
    product:[
      { id:1, nama:'laptop 1', kategori:1, harga:1240000 },
      { id:2, nama:'laptop 2', kategori:1, harga:4240000 },
      { id:3, nama:'hp 1', kategori:2, harga:240000 },
      { id:4, nama:'hp 2', kategori:2, harga:440000 },
      { id:5, nama:'key 2', kategori:3, harga:500000 }
    ],
    kategori: [
      { id:1, nama:'laptop' },
      { id:2, nama:'hp'},
      { id:3, nama:'aksesoris' }
    ],
    productDetail:[
      { id:1,idProduk:1, warna:'merah', size:'xl' },
      { id:2,idProduk:2, warna:'kuning', size:'l' },
      { id:3,idProduk:3, warna:'hijau', size:'s' },
      { id:4,idProduk:4, warna:'biru', size:'xxl' },
      { id:5,idProduk:5}
    ]
  }

  const productReducer = (state = initState,action)=>{
      return state
  }

  export default productReducer;
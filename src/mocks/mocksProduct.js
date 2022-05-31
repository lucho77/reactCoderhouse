const products = [
{
    id:1,
    name:'Sansung Galaxy S1',
    stock:1,
    price:5000,
    category:'phone',
    img:'',
    desc:'Telefono Sansung Glaxy S1 año 2010'
},
{
    id:2,
    name:'Sansung Galaxy S2',
    stock:10,
    price:7350,
    category:'phone',
    img:'',
    desc:'Telefono Sansung Glaxy S2 año 2011'
},
{
    id:3,
    name:'Sansung Galaxy S3',
    stock:14,
    price:9854,
    category:'phone',
    img:'',
    desc:'Telefono Sansung Glaxy S3 año 2012'
},
{
    id:4,
    name:'Sansung Galaxy S4',
    stock:23,
    price:11485,
    category:'phone',
    img:'',
    desc:'Telefono Sansung Glaxy S4 año 2013'
},
{
    id:5,
    name:'Sansung Galaxy S5',
    stock:56,
    price:17000,
    category:'phone',
    img:'',
    desc:'Telefono Sansung Glaxy S5 año 2014'
},
{
    id:6,
    name:'Sansung Galaxy S6',
    stock:1,
    price:24510,
    category:'phone',
    img:'',
    desc:'Telefono Sansung Glaxy S6 año 2015'
},
{
    id:7,
    name:'Sansung Galaxy S7',
    stock:89,
    price:32458,
    category:'phone',
    img:'',
    desc:'Telefono Sansung Glaxy S7 año 2016'
},
{
    id:8,
    name:'Sansung Galaxy S8',
    stock:154,
    price:42545,
    category:'phone',
    img:'',
    desc:'Telefono Sansung Glaxy S8 año 2017'
},
{
    id:9,
    name:'Sansung Galaxy S9',
    stock:568,
    price:57878,
    category:'phone',
    img:'',
    desc:'Telefono Sansung Glaxy S9 año 2018'
}


]
const getProducts = ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
                resolve(products);
        },2000)
    });
}
const getProductsById = (clave)=>{
    return new Promise((resolve)=>{
                resolve(products.find(id=> id=clave));                      
    });
}
export   {getProducts, getProductsById};
import { createContext, useEffect, useState } from 'react'

export const AppContext = createContext()

const dbProps = [
  {
    id: 1,
    street: 'Soldados de la independencia al 500',
    zone: 'Capital Federal',
    neighboord: 'Merlo',
    subNeighboord: 'Las Cañitas',
    type: 'Deposito',
    operation: 'Compra',
    ambients: 3,
    price: 9500,
    images: [
      'https://tse3.mm.bing.net/th?id=OIP.5BdOFr7RjOGAozibfXwW3AHaE6&pid=Api&P=0',
      'https://c5e6g5f8.rocketcdn.me/wp-content/uploads/2015/11/Entrada-Lobby-Departamento-Juriquilla-Tres-Vistas-Quer%C3%A9taro.jpg'
    ],
    featured: true,
    area: 300.0,
    orientation: true,
    expenses: 200000,
    antique: 5,
    bathrooms: 4,
    garages: 2,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aspernatur corporis laboriosam maxime modi. Fugit dignissimos corporis nesciunt libero officiis iusto voluptates cupiditate dolore, veniam repudiandae provident sit explicabo facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aspernatur corporis laboriosam maxime modi. Fugit dignissimos corporis nesciunt libero officiis iusto voluptates cupiditate dolore, veniam repudiandae provident sit explicabo facilis.'
  },
  {
    id: 2,
    street: 'Mill Passage al 20002',
    zone: 'Capital Federal',
    neighboord: 'La Boca',
    subNeighboord: 'Las Cañitas',
    type: 'Departamento',
    operation: 'Venta',
    ambients: 1,
    price: 15500,
    images: [
      'https://i.pinimg.com/originals/2b/10/b4/2b10b4b206d8b78fb4f3084d82911b71.jpg',
      'https://c5e6g5f8.rocketcdn.me/wp-content/uploads/2015/11/Entrada-Lobby-Departamento-Juriquilla-Tres-Vistas-Quer%C3%A9taro.jpg'
    ],
    area: 300.0,
    orientation: true,
    expenses: 200000,
    antique: 2,
    bathrooms: 1,
    garages: 0,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aspernatur corporis laboriosam maxime modi. Fugit dignissimos corporis nesciunt libero officiis iusto voluptates cupiditate dolore, veniam repudiandae provident sit explicabo facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aspernatur corporis laboriosam maxime modi. Fugit dignissimos corporis nesciunt libero officiis iusto voluptates cupiditate dolore, veniam repudiandae provident sit explicabo facilis.'
  },
  {
    id: 3,
    street: 'Honor Avenue al 12300',
    zone: 'Capital Federal',
    neighboord: 'Palermo',
    subNeighboord: 'Las Cañitas',
    type: 'Departamento',
    operation: 'Alquiler',
    ambients: 2,
    price: 6000,
    images: [
      'https://www.decorarhogar.es/wp-content/uploads/2020/07/casas-bonitas-dentro-fotos.jpg',
      'https://c5e6g5f8.rocketcdn.me/wp-content/uploads/2015/11/Entrada-Lobby-Departamento-Juriquilla-Tres-Vistas-Quer%C3%A9taro.jpg'
    ],
    featured: true,
    area: 300.0,
    orientation: true,
    expenses: 200000,
    antique: 7,
    bathrooms: 1,
    garages: 2,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aspernatur corporis laboriosam maxime modi. Fugit dignissimos corporis nesciunt libero officiis iusto voluptates cupiditate dolore, veniam repudiandae provident sit explicabo facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aspernatur corporis laboriosam maxime modi. Fugit dignissimos corporis nesciunt libero officiis iusto voluptates cupiditate dolore, veniam repudiandae provident sit explicabo facilis.'
  },
  {
    id: 4,
    street: 'Queen Route al 350',
    zone: 'Capital Federal',
    neighboord: 'La Boca',
    subNeighboord: 'Las Cañitas',
    type: 'Departamento',
    operation: 'Compra',
    ambients: 5,
    price: 15500,
    images: [
      'https://www.decorablog.com/wp-content/2009/09/2casa-8.jpg',
      'https://c5e6g5f8.rocketcdn.me/wp-content/uploads/2015/11/Entrada-Lobby-Departamento-Juriquilla-Tres-Vistas-Quer%C3%A9taro.jpg'
    ],
    area: 300.0,
    orientation: true,
    expenses: 200000,
    antique: 10,
    bathrooms: 3,
    garages: 3,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aspernatur corporis laboriosam maxime modi. Fugit dignissimos corporis nesciunt libero officiis iusto voluptates cupiditate dolore, veniam repudiandae provident sit explicabo facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aspernatur corporis laboriosam maxime modi. Fugit dignissimos corporis nesciunt libero officiis iusto voluptates cupiditate dolore, veniam repudiandae provident sit explicabo facilis.'
  },
  {
    id: 5,
    street: 'Windmill Route al 500',
    zone: 'Capital Federal',
    neighboord: 'La Boca',
    subNeighboord: 'Las Cañitas',
    type: 'Departamento',
    operation: 'Venta',
    ambients: 5,
    price: 15500,
    images: [
      'https://i0.wp.com/inspirahogar.com/wp-content/uploads/2014/09/Casa-en-Cadaqu%C3%A9s-Coderch000.jpg?resize=800%2C800',
      'https://c5e6g5f8.rocketcdn.me/wp-content/uploads/2015/11/Entrada-Lobby-Departamento-Juriquilla-Tres-Vistas-Quer%C3%A9taro.jpg'
    ],
    featured: true,
    area: 300.0,
    orientation: true,
    expenses: 200000,
    antique: 10,
    bathrooms: 3,
    garages: 3,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aspernatur corporis laboriosam maxime modi. Fugit dignissimos corporis nesciunt libero officiis iusto voluptates cupiditate dolore, veniam repudiandae provident sit explicabo facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aspernatur corporis laboriosam maxime modi. Fugit dignissimos corporis nesciunt libero officiis iusto voluptates cupiditate dolore, veniam repudiandae provident sit explicabo facilis.'
  },
  {
    id: 6,
    street: 'Great Street al 1234',
    zone: 'Capital Federal',
    neighboord: 'La Boca',
    subNeighboord: 'Las Cañitas',
    type: 'Departamento',
    operation: 'Compra',
    ambients: 5,
    price: 15500,
    images: [
      'https://housfy.s3.eu-west-1.amazonaws.com/prod/blog/images/2019/10/16083841/1277528.jpeg',
      'https://c5e6g5f8.rocketcdn.me/wp-content/uploads/2015/11/Entrada-Lobby-Departamento-Juriquilla-Tres-Vistas-Quer%C3%A9taro.jpg'
    ],
    area: 300.0,
    orientation: true,
    expenses: 200000,
    antique: 10,
    bathrooms: 3,
    garages: 3,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aspernatur corporis laboriosam maxime modi. Fugit dignissimos corporis nesciunt libero officiis iusto voluptates cupiditate dolore, veniam repudiandae provident sit explicabo facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aspernatur corporis laboriosam maxime modi. Fugit dignissimos corporis nesciunt libero officiis iusto voluptates cupiditate dolore, veniam repudiandae provident sit explicabo facilis.'
  },
  {
    id: 7,
    street: 'Chestnut Route al 1230',
    zone: 'Capital Federal',
    neighboord: 'La Boca',
    subNeighboord: 'Las Cañitas',
    type: 'Deposito',
    operation: 'Alquiler',
    ambients: 5,
    price: 15500,
    images: [
      'https://3.bp.blogspot.com/-CeaKPxxyjyY/VbkmuoN9tSI/AAAAAAAAA-I/2D_C-c7mX0o/s1600/182915_snapphanevagen_17_11_1.jpg',
      'https://c5e6g5f8.rocketcdn.me/wp-content/uploads/2015/11/Entrada-Lobby-Departamento-Juriquilla-Tres-Vistas-Quer%C3%A9taro.jpg'
    ],
    featured: true,
    area: 300.0,
    orientation: true,
    expenses: 200000,
    antique: 10,
    bathrooms: 3,
    garages: 3,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aspernatur corporis laboriosam maxime modi. Fugit dignissimos corporis nesciunt libero officiis iusto voluptates cupiditate dolore, veniam repudiandae provident sit explicabo facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aspernatur corporis laboriosam maxime modi. Fugit dignissimos corporis nesciunt libero officiis iusto voluptates cupiditate dolore, veniam repudiandae provident sit explicabo facilis.'
  },
  {
    id: 8,
    street: 'Orchard Passage al 3000',
    zone: 'Capital Federal',
    neighboord: 'La Boca',
    subNeighboord: 'Las Cañitas',
    type: 'Casa',
    operation: 'Venta',
    ambients: 5,
    price: 15500,
    images: [
      'https://odis.homeaway.com/odis/listing/63a9dbe2-35ff-4cc4-be6b-efc806bc8077.c10.jpg',
      'https://c5e6g5f8.rocketcdn.me/wp-content/uploads/2015/11/Entrada-Lobby-Departamento-Juriquilla-Tres-Vistas-Quer%C3%A9taro.jpg'
    ],
    area: 300.0,
    orientation: true,
    expenses: 200000,
    antique: 10,
    bathrooms: 3,
    garages: 3,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aspernatur corporis laboriosam maxime modi. Fugit dignissimos corporis nesciunt libero officiis iusto voluptates cupiditate dolore, veniam repudiandae provident sit explicabo facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aspernatur corporis laboriosam maxime modi. Fugit dignissimos corporis nesciunt libero officiis iusto voluptates cupiditate dolore, veniam repudiandae provident sit explicabo facilis.'
  },
  {
    id: 9,
    street: 'Blossom Way al 120',
    zone: 'Capital Federal',
    neighboord: 'La Boca',
    subNeighboord: 'Las Cañitas',
    type: 'Deposito',
    operation: 'Alquiler',
    ambients: 5,
    price: 15500,
    images: [
      'https://s3.amazonaws.com/assets.moveglobally.com/property_images/501010/8127379/EB-AX1010.jpg?1498751630',
      'https://c5e6g5f8.rocketcdn.me/wp-content/uploads/2015/11/Entrada-Lobby-Departamento-Juriquilla-Tres-Vistas-Quer%C3%A9taro.jpg'
    ],
    featured: true,
    area: 300.0,
    orientation: true,
    expenses: 200000,
    antique: 10,
    bathrooms: 3,
    garages: 3,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aspernatur corporis laboriosam maxime modi. Fugit dignissimos corporis nesciunt libero officiis iusto voluptates cupiditate dolore, veniam repudiandae provident sit explicabo facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aspernatur corporis laboriosam maxime modi. Fugit dignissimos corporis nesciunt libero officiis iusto voluptates cupiditate dolore, veniam repudiandae provident sit explicabo facilis.'
  },
  {
    id: 10,
    street: 'Globe Street al 230',
    zone: 'Capital Federal',
    neighboord: 'La Boca',
    subNeighboord: 'Las Cañitas',
    type: 'Casa',
    operation: 'Alquiler',
    ambients: 5,
    price: 15500,
    images: [
      'https://i.pinimg.com/originals/b0/67/60/b0676029b73d2e809438bdce623c1ec2.jpg',
      'https://c5e6g5f8.rocketcdn.me/wp-content/uploads/2015/11/Entrada-Lobby-Departamento-Juriquilla-Tres-Vistas-Quer%C3%A9taro.jpg'
    ],
    area: 300.0,
    orientation: true,
    expenses: 200000,
    antique: 10,
    bathrooms: 3,
    garages: 3,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aspernatur corporis laboriosam maxime modi. Fugit dignissimos corporis nesciunt libero officiis iusto voluptates cupiditate dolore, veniam repudiandae provident sit explicabo facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aspernatur corporis laboriosam maxime modi. Fugit dignissimos corporis nesciunt libero officiis iusto voluptates cupiditate dolore, veniam repudiandae provident sit explicabo facilis.'
  },
  {
    id: 11,
    street: 'Serenity Street al 1200',
    zone: 'Capital Federal',
    neighboord: 'Merlo',
    subNeighboord: 'Las Cañitas',
    type: 'Casa',
    operation: 'Venta',
    ambients: 5,
    price: 9500,
    images: [
      'https://aws.revistavanityfair.es/prod/designs/v1/assets/1000x667/14641.jpg',
      'https://c5e6g5f8.rocketcdn.me/wp-content/uploads/2015/11/Entrada-Lobby-Departamento-Juriquilla-Tres-Vistas-Quer%C3%A9taro.jpg'
    ],
    area: 300.0,
    orientation: true,
    expenses: 200000,
    antique: 10,
    bathrooms: 3,
    garages: 3,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aspernatur corporis laboriosam maxime modi. Fugit dignissimos corporis nesciunt libero officiis iusto voluptates cupiditate dolore, veniam repudiandae provident sit explicabo facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aspernatur corporis laboriosam maxime modi. Fugit dignissimos corporis nesciunt libero officiis iusto voluptates cupiditate dolore, veniam repudiandae provident sit explicabo facilis.'
  },
  {
    id: 12,
    street: 'Vista Lane 3091',
    zone: 'Capital Federal',
    neighboord: 'Merlo',
    subNeighboord: 'Las Cañitas',
    type: 'Deposito',
    operation: 'Alquiler',
    ambients: 5,
    price: 9500,
    images: [
      'https://imagenesdecasasdelfuturo.com/wp-content/uploads/2017/04/390-1.jpg',
      'https://c5e6g5f8.rocketcdn.me/wp-content/uploads/2015/11/Entrada-Lobby-Departamento-Juriquilla-Tres-Vistas-Quer%C3%A9taro.jpg'
    ],
    featured: true,
    area: 300.0,
    orientation: true,
    expenses: 200000,
    antique: 10,
    bathrooms: 3,
    garages: 3,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aspernatur corporis laboriosam maxime modi. Fugit dignissimos corporis nesciunt libero officiis iusto voluptates cupiditate dolore, veniam repudiandae provident sit explicabo facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aspernatur corporis laboriosam maxime modi. Fugit dignissimos corporis nesciunt libero officiis iusto voluptates cupiditate dolore, veniam repudiandae provident sit explicabo facilis.'
  },
  {
    id: 13,
    street: 'Summer Route al 300',
    zone: 'Capital Federal',
    neighboord: 'Merlo',
    subNeighboord: 'Las Cañitas',
    type: 'Casa',
    operation: 'Compra',
    ambients: 5,
    price: 9500,
    images: [
      'https://1.bp.blogspot.com/-tQQIkfFme_k/UZvSNcaBXVI/AAAAAAAADpo/CxISj8DAM_I/s1600/Descargar+Pack+Bellos+Fondos+de+paisajes+HD+(136).jpg',
      'https://c5e6g5f8.rocketcdn.me/wp-content/uploads/2015/11/Entrada-Lobby-Departamento-Juriquilla-Tres-Vistas-Quer%C3%A9taro.jpg'
    ],
    area: 300,
    orientation: true,
    expenses: 200000,
    antique: 10,
    bathrooms: 3,
    garages: 3,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aspernatur corporis laboriosam maxime modi. Fugit dignissimos corporis nesciunt libero officiis iusto voluptates cupiditate dolore, veniam repudiandae provident sit explicabo facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aspernatur corporis laboriosam maxime modi. Fugit dignissimos corporis nesciunt libero officiis iusto voluptates cupiditate dolore, veniam repudiandae provident sit explicabo facilis.'
  }
]
const initialFormFilter = {
  type: null,
  operation: null,
  neighboord: null
}

export const AppProvider = ({ children }) => {
  const [properties, setProperties] = useState(dbProps)
  const [filterProperties, setFilterProperties] = useState([])
  const [pages, setPages] = useState({ page: 0, perPage: 6, cantTotal: 0 })
  const [propertiesView, setPropertiesView] = useState([])

  useEffect(() => {
    if (properties.length > 0) setFilterProperties(properties)
  }, [properties])

  useEffect(() => {
    //Cada vez que filterProperties cambia (por que se solicito algun tipo de filtro, se actualiza la pagina en 0 y la cantidad de Paginas dependiendo el tamaño de ese nuevo filterProperties)
    setPages({
      ...pages,
      page: 0,
      cantTotal: filterProperties.length / pages.perPage
    })
  }, [filterProperties])

  useEffect(() => {
    //Si filterProperties tiene un largo de 0, seteamos a las propiedades visibles vacia (esto puede ser al comienzo o en caso de que cuando se filtre no se encuentre coincidencia). En caso contrario, guardamos en propertiesView las propiedades visibles en tal pagina dependiendo cuantas se puedan ver por cada una.
    if (filterProperties.length > 0) {
      const totalMax = Number.isInteger(pages.cantTotal)
        ? pages.cantTotal - 1
        : Math.floor(pages.cantTotal)
      const aux = []

      const max =
        totalMax == pages.page
          ? filterProperties.length
          : (pages.page + 1) * pages.perPage

      for (let i = pages.page * pages.perPage; i < max; i++) {
        aux.push(filterProperties[i])
      }
      setPropertiesView(aux)
    } else {
      setPropertiesView([])
    }
  }, [pages])

  /**Paginacion**/

  const prevPage = () => {
    if (pages.page != 0) setPages({ ...pages, page: pages.page - 1 })
  }

  const nextPage = () => {
    //Cuando el numero de cantidad de Paginas es entero, significa que la page va a llegar hasta esa cantidad - 1, pero si no es entero, significa que va a llegar hasta el entero menor mas cercano. Ejemplo: si hay 12 productos y cada pagina se divide en 6: 12/6 = 2, page puede tomar los valores 0 y 1 (2 paginas, por eso 2 - 1 = 1). En caso de que haya 11 productos, 11/6 = 1.83, por lo tanto redondea al menor mas cercano que es 1... (ya que si hicieramos lo anteriro nos daria 0.83 al restarle 1 y no seria correcto)
    const max = Number.isInteger(pages.cantTotal)
      ? pages.cantTotal - 1
      : Math.floor(pages.cantTotal)

    if (pages.page != max) setPages({ ...pages, page: pages.page + 1 })
  }

  /**Filters**/
  const [formFilter, setFormFilter] = useState(initialFormFilter)

  const handleChangeFormFilter = e => {
    //Si el valor es alguno de los iniciales, lo seteamos en null, sino dejamos el valor que se haya elegido en la opcion
    let value =
      e.target.value === 'Tipo Propiedad' ||
      e.target.value === 'Operacion' ||
      e.target.value === 'Barrio o Localidad'
        ? null
        : e.target.value
    setFormFilter({ ...formFilter, [e.target.name]: value })
  }

  //Cada vez que se haga click en Buscar Propiedades, si alguno no es nullo va a llamar a filterAll, sino muestra todos
  const handleClickFilter = e => {
    e.preventDefault()
    if (!formFilter.neighboord && !formFilter.operation && !formFilter.type) {
      setFilterProperties(properties)
    } else {
      filterAll()
    }
  }

  const filterAll = () => {
    //Primero inicializamos filter con todas las propiedades, y luego vamos filtrando depende los atributos de formFilter que sean distintos de null. Al final seteamos filterProperties con ese resultado y lo mostramos en pantalla....
    let filter = properties

    if (formFilter.type) filter = filterType(filter)
    if (formFilter.operation) filter = filterOperation(filter)
    if (formFilter.neighboord) filter = filterNeighboord(filter)

    setFilterProperties(filter)
  }

  const filterType = (
    arrayToFilter //Filtra por TIPO
  ) => arrayToFilter.filter(el => el.type === formFilter.type)

  const filterOperation = (
    arrayToFilter //Filtra por OPERACION
  ) => arrayToFilter.filter(el => el.operation === formFilter.operation)

  const filterNeighboord = (
    arrayToFilter //Filtra por Barrio
  ) => arrayToFilter.filter(el => el.neighboord === formFilter.neighboord)

  const data = {
    properties,
    formFilter,
    handleChangeFormFilter,
    filterProperties,
    handleClickFilter,
    pages,
    prevPage,
    nextPage,
    propertiesView
  }
  return <AppContext.Provider value={data}>{children}</AppContext.Provider>
}

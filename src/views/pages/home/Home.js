import api from '../../../service/api';

const getRandomJokes = async () => {
  const request = await api.get('random')
  const response = request.data
  return response
}
const getJokesCategory = async () => {
  const request = await api.get('categories')
  return request.data
}

let Home = {
  is_private: false,
  
  render: async () => {
    const jokes = await getRandomJokes();
    const categories = await getJokesCategory();
    console.log(categories)
    categories.map(category => category)
      let view = `
          <div>
            <h1>Home</div>
            <img src="${jokes.icon_url}"/>
            <h3>
              Piada:
            </h3>
            <p>
              ${jokes.value}
            </p>
            <h3>
              Lista de categorias:
            </h3>
            <ul class="list">
            ${categories.map( (category, index) => (
              `<li class="item" key=${index}>${category}</li>`
            )).join('')}
            </ul>
          </div>
      `;

      return view
  },

  after_render: async () => {}
}

export default Home;
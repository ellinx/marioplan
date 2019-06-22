const initState = {
  projects: [
    {id: '1', title: "help tom's homework", content: '...bla bla' },
    {id: '2', title: 'go to buy milk', content: 'bla bla bla' },
    {id: '3', title: 'play with jerry', content: 'bla bla bla' },
  ]
}

const projectReducer = (state = initState, action) => {
  return state
}

export default projectReducer
import uuidv4 from 'uuid/v4'

export const posts = [
  {
    uid: uuidv4(),
    author: 'marty',
    title: 'where are you, doc?',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia in ullam sit ab architecto similique nesciunt. Fugiat officia quia ex ullam autem, iure minima commodi sint nam quod debitis mollitia?',
    time: Date.now()
  },
  {
    uid: uuidv4(),
    author: 'doc',
    title: 'taking einy for a walk',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia in ullam sit ab architecto similique nesciunt. Fugiat officia quia ex ullam autem, iure minima commodi sint nam quod debitis mollitia?',
    time: Date.now()
  },
  {
    uid: uuidv4(),
    author: 'jennifer',
    title: 'why did i wake up on the porch?',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia in ullam sit ab architecto similique nesciunt. Fugiat officia quia ex ullam autem, iure minima commodi sint nam quod debitis mollitia?',
    time: Date.now()
  },
  {
    uid: uuidv4(),
    author: 'biff',
    title: 'i hate manure!',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia in ullam sit ab architecto similique nesciunt. Fugiat officia quia ex ullam autem, iure minima commodi sint nam quod debitis mollitia?',
    time: Date.now()
  }
]

export const headlines = [
  {
    uid: uuidv4(),
    title: 'Strange Lightening Over Hill Valley',
  },
  {
    uid: uuidv4(),
    title: 'Tannen Opens New Casino',
  },
  {
    uid: uuidv4(),
    title: 'Doc Brown\'s New Capacitor',
  },
  {
    uid: uuidv4(),
    title: 'Updates From Enchantment Under The Sea',
  }
]

export const notifications = [
  {
    uid: uuidv4(),
    content: 'biff just posted a message',
    time: Date.now()
  },
  {
    uid: uuidv4(),
    content: 'marty just posted a message',
    time: Date.now()
  },
  {
    uid: uuidv4(),
    content: 'jennifer just joined JUMP!',
    time: Date.now()
  },
  {
    uid: uuidv4(),
    content: 'einstein just posted a message',
    time: Date.now()
  },
]

export const weather = {
  location: 'Hill Valley',
  icon: 'icon goes here',
  temperature: '72',
  description: 'sunny'
}

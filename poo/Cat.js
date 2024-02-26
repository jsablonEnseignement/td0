class Cat extends Animal {
    constructor(name) {
      super(name)
    }

    whatiam() {
      console.log(`Je suis un chat.`)
    }

    static cry() {
        console.log(`Meow !`)
      }

  }
class ApplicationError extends Error {
  constructor (...args) {
    super()
    Object.assign(this, ...args)
    this.name = this.constructor.name
  }
}

export { ApplicationError }

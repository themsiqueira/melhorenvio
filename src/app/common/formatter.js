export const successCallbackResponse = response => (message) => response.status(200).json(message)

export const errorCallbackResponse = (response, Logger) => error => {
  if (error.code) {
    return response.status(error.code)
      .json({
        error: error.errors
      })
  }

  Logger.error(error.cause)

  return response.status(500)
    .json({
      code: 500,
      error: 'Ocorreu um erro de conectividade com o melhor envio, favor tente mais tarde!'
    })
}

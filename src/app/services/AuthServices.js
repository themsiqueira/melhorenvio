class AuthServices { 
  constructor(OAuth) {
    this.OAuth = OAuth
  }

  async auth({
    client_id,
    redirect_uri,
    response_type,
    scope
  }) { 
      
    await this.OAuth.getAuthorization({
      client_id,
      redirect_uri,
      response_type,
      scope
    })
  }
  
  async tokenSolicitation({
    code, 
    clientId,
    clientSecret,
    redirectUri
  }) {
    const { token_type, access_token, refresh_token, expires_in } = await this.OAuth.getToken({
      clientId,
      clientSecret,
      redirectUri,
      code
    })
    return { token_type, access_token, refresh_token, expires_in }
  }

  async refreshToken({
    clientId,
    clientSecret,
    refreshToken
  }) {
    await this.OAuth.refreshToken({ 
      clientId,
      clientSecret,
      refreshToken
    })
  }

}

export default AuthServices

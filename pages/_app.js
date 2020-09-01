import { Auth0Provider } from "@auth0/auth0-react";

function MyApp({ Component, pageProps }) {
    return (
        <Auth0Provider
            domain="DOMAIN"
            clientId="CLIENT_ID"
            redirectUri="http://localhost:3000/login-success"
        >
            <Component {...pageProps}/>
        </Auth0Provider>
    )
}
  
export default MyApp
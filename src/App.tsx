import { ApolloProvider } from "@apollo/client";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Header } from "./components/organisms/Header/Header";
import { client } from "./graphql/queries";
import { Favorites } from "./pages/Favorites/Favorites";
import { Home } from "./pages/Home/Home";
import theme from "./theme/Theme";

function App() {
    return (
        <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/favorites" element={<Favorites />} />
                </Routes>
            </ThemeProvider>
        </ApolloProvider>
    );
}

export default App;

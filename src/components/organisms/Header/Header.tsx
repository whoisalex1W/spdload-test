import { Link, useLocation } from "react-router-dom";

import { Container } from "../../../App.style";
import Logo from "../../../assets/ImageLogoSpaceX.png";
import { Button } from "../../atoms/Button/Button";
import { FavorotesIcon } from "../../icons";
import {
    HeaderContainer,
    HeaderWrapper,
    List,
    ListItem,
    SignIn,
} from "./Header.style";

export const Header = () => {
    const location = useLocation();
    const isActive = location.pathname.includes("favorite");
    return (
        <HeaderContainer>
            <Container>
                <HeaderWrapper>
                    <Link to={"/"}>
                        <img src={Logo} />
                    </Link>

                    <List>
                        <Link to={"/"} style={{ textDecoration: "none" }}>
                            <ListItem>home</ListItem>
                        </Link>
                        <ListItem>tours</ListItem>
                        <ListItem>about</ListItem>
                        <ListItem>help</ListItem>
                    </List>
                    <SignIn>
                        <Link to={"/favorites"}>
                            <Button variant="icon" isActive={isActive}>
                                <FavorotesIcon isActive={isActive} />
                            </Button>
                        </Link>

                        <Button variant="primary" width={163}>
                            sign in
                        </Button>
                    </SignIn>
                </HeaderWrapper>
            </Container>
        </HeaderContainer>
    );
};

import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../hooks/useUserStore";
import {
  AuthHref,
  Img,
  Nav,
  NavContainer,
  NavItems,
  NavLink,
  DropDownMenu,
} from "./Style";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { firebaseAuth } from "../../firebase/firebaseConfig";

export default function NavBar() {
  const { currentUser, setCurrentUser } = useUserStore();
  const [showdropDown, setShowDropDown] = useState(false);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(firebaseAuth);
      setCurrentUser(null);
      navigate("/");
    } catch (error) {
      console.error("Error while sigining out", error);
    }
  };

  return (
    <NavContainer>
      <Nav>
        <NavItems>Snap Share</NavItems>
        <NavItems>
          {currentUser ? (
            <NavLink>
              <AuthHref onClick={handleSignOut}>SignOut</AuthHref>
              <Img
                src={currentUser?.photoURL || "/default_img.png"}
                alt="Avatar"
                onClick={() => setShowDropDown(!showdropDown)}
              />
              {showdropDown && (
                <DropDownMenu>
                  <AuthHref onClick={() => navigate("/image")}>Images</AuthHref>
                </DropDownMenu>
              )}
            </NavLink>
          ) : (
            <NavLink>
              <AuthHref onClick={() => navigate("/signin")}>SignIn</AuthHref>
              <Img
                src="/default_img.png"
                alt="Avatar"
              />
            </NavLink>
          )}
        </NavItems>
      </Nav>
    </NavContainer>
  );
}

import { useState } from "react";
import { styled } from "styled-components";
import SVG from "../assets/SVG";

function Header() {
  const navData = [
    { href: "/", text: "미니인턴 리스트" },
    { href: "/", text: "채용관" },
    { href: "/", text: "M클래스" },
    { href: "/", text: "해피폴리오" },
  ];

  const sectionData = [
    { href: "/", text: "Home" },
    { href: "/", text: "About" },
    { href: "/", text: "Contact" },
    { href: "/", text: "FAQ" },
  ];

  const [isHBtnClicked, setIsHBtnClicked] = useState<boolean>(false);

  const onClickHBtn = () => {
    setIsHBtnClicked((prev: boolean) => !prev);
  };

  return (
    <HeaderInner>
      <a href="/">
        <div className="visible-on-PC">
          <SVG name="miniintern-logo-PC" width={203} height={34} />
        </div>
        <div className="visible-on-mobile">
          <SVG name="miniintern-logo-mobile" width={135} height={24} />
        </div>
      </a>
      <nav className="visible-on-PC">
        <HeaderUl>
          {navData.map((ele) => {
            return (
              <li>
                <HeaderLiA href={ele.href}>{ele.text}</HeaderLiA>
              </li>
            );
          })}
        </HeaderUl>
      </nav>
      <HeaderRight>
        {isHBtnClicked && (
          <CloseButton className="visible-on-mobile" onClick={onClickHBtn}>
            <SVG name="close" width={20} height={20} />
          </CloseButton>
        )}
        {!isHBtnClicked && (
          <HamburgerButton className="visible-on-mobile" onClick={onClickHBtn}>
            <SVG name="hamburger-bar" width={28} height={28} />
          </HamburgerButton>
        )}
        {isHBtnClicked && (
          <>
            <HiddenNav>
              <HiddenUl>
                {sectionData.map((ele) => {
                  return (
                    <HiddenLi>
                      <HiddenLiA href={ele.href}>{ele.text}</HiddenLiA>
                    </HiddenLi>
                  );
                })}
              </HiddenUl>
            </HiddenNav>
            <HiddenBackground />
          </>
        )}
        <HeaderSection className="visible-on-PC">
          <HeaderUl>
            {sectionData.map((ele) => {
              return (
                <HeaderSectionLi>
                  <HeaderSectionA href={ele.href}>{ele.text}</HeaderSectionA>
                </HeaderSectionLi>
              );
            })}
          </HeaderUl>
        </HeaderSection>
      </HeaderRight>
    </HeaderInner>
  );
}

export default Header;

const HeaderInner = styled.header`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  width: 90rem;
  height: 60px;

  border-bottom: 1px solid rgb(229, 234, 234);
`;

const HeaderUl = styled.ul`
  display: flex;
  height: 100%;
`;

const HeaderSection = styled.section`
  height: 100%;
`;
const HeaderSectionLi = styled.li`
  margin-right: 10px;
  padding: auto;
`;

const HeaderLiA = styled.a`
  display: flex;
  font-size: 0.875rem;
  cursor: pointer;
  padding: 1.25rem 1rem;
  -webkit-box-align: center;
  align-items: center;
  color: rgb(171, 177, 177);
`;

// 굳이 앞에 prefix를 붙일 필요가 있을까?
const HeaderRight = styled.div`
  display: flex;
  position: relative;
  -webkit-box-align: center;
  vertical-align: center;
  align-items: center;
  margin-left: auto;
  padding-right: 24px;
  height: 100%;
`;

const HeaderSectionA = styled.a`
  display: flex;
  font-size: 0.875rem;
  cursor: pointer;
  padding: 1.25rem 1rem;
  -webkit-box-align: center;
  align-items: center;
  transition: color 0.2s ease-in-out 0s;
  font-weight: 500;
  color: rgb(23, 161, 255);
`;

const HamburgerButton = styled.button`
  background-color: transparent;
`;

const CloseButton = styled.button`
  background-color: transparent;
  z-index: 15;
`;

const HiddenNav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10;
  background-color: white;
  width: 260px;
  height: 200vh;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 10px 0px;
`;

const HiddenBackground = styled.div`
  position: fixed;
  inset: 0px;
  width: 100%;
  height: 100%;
  background-color: rgb(26, 27, 28);
  opacity: 0.4;
  z-index: 5;
`;

const HiddenUl = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 45px 0px 0px;
  padding: 0px 20px;
`;

const HiddenLi = styled.li`
  z-index: 10;
`;

const HiddenLiA = styled.a`
  display: flex;
  font-size: 0.875rem;
  cursor: pointer;
  padding: 1.25rem 1rem;
  -webkit-box-align: center;
  align-items: center;
  transition: color 0.2s ease-in-out 0s;
  font-weight: 500;
  color: rgb(23, 161, 255);
`;

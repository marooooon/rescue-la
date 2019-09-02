import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'
import media from 'styled-media-query';
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
`

const Header = styled.div`
  padding: 30px 80px;

  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    background: red;
  `}

  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    // background: green;
  `}

  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
    // background: blue;
  `}
`;

const HeaderList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
  `}

  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
  `}

  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
  `}
`;

const HeaderListLogo = styled.li`
  
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
  `}

  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
  `}

  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
  `}
`;

const HeaderListLink = styled.li`
  
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
  `}

  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
  `}

  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
  `}
`;

const HeaderLinkText = styled.a`

  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
  `}

  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
  `}

  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
  `}
`;

const MainVisual = styled.div`
width: 100%;
height: 400px;
background: #eee;

${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
  `}

  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
  `}

  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
  `}
`;

const MainContainer = styled.div`
margin-top: 80px;
padding: 0 80px;
width: 100%;

${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
  `}

  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
  `}

  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
  `}
`;

const ContentsList = styled.ul`
display: flex;
justify-content: space-between;

${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
  `}

  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
  `}

  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
  `}
`;

const ContentsListItem = styled.li`
width: 30%;

${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
  `}

  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
  `}

  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
  `}
`;

const RescueLink = styled.a`
display: block;

${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
  `}

  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
  `}

  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
  `}
`;

const RescueImg = styled.img`
width: 100%;
${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
  `}

  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
  `}

  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
  `}
`;

const RescueHr = styled.hr`
margin: 40px 0;
${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
  `}

  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
  `}

  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
  `}
`;



export default class Example extends Component {
    render() {
        return (
            <React.Fragment>
                <GlobalStyle />
                <Header>
                    <HeaderList>
                        <HeaderListLogo>
                            <HeaderLinkText href="/">Rescue</HeaderLinkText>
                        </HeaderListLogo>
                        <HeaderListLink>
                            <HeaderLinkText href="/">サインイン</HeaderLinkText>
                        </HeaderListLink>
                    </HeaderList>
                </Header>
                <MainVisual>
                </MainVisual>
                <MainContainer>
                    <ContentsList>
                        <ContentsListItem>
                            <RescueLink href="/">
                                <RescueImg src="http://placehold.jp/24/cccccc/ffffff/1000x565.png?text=placehold.jp" />
                            </RescueLink>
                        </ContentsListItem>
                        <ContentsListItem>
                            <RescueLink href="/">
                                <RescueImg src="http://placehold.jp/24/cccccc/ffffff/1000x565.png?text=placehold.jp" />
                            </RescueLink>
                        </ContentsListItem>
                        <ContentsListItem>
                            <RescueLink href="/">
                                <RescueImg src="http://placehold.jp/24/cccccc/ffffff/1000x565.png?text=placehold.jp" />
                            </RescueLink>
                        </ContentsListItem>
                    </ContentsList>
                    <RescueHr />
                    <ContentsList>
                        <ContentsListItem>
                            <RescueLink href="/">
                                <RescueImg src="http://placehold.jp/24/cccccc/ffffff/1000x565.png?text=placehold.jp" />
                            </RescueLink>
                        </ContentsListItem>
                        <ContentsListItem>
                            <RescueLink href="/">
                                <RescueImg src="http://placehold.jp/24/cccccc/ffffff/1000x565.png?text=placehold.jp" />
                            </RescueLink>
                        </ContentsListItem>
                        <ContentsListItem>
                            <RescueLink href="/">
                                <RescueImg src="http://placehold.jp/24/cccccc/ffffff/1000x565.png?text=placehold.jp" />
                            </RescueLink>
                        </ContentsListItem>
                    </ContentsList>
                </MainContainer>
            </React.Fragment>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}

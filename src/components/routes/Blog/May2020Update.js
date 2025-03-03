import { lazy, Suspense, useEffect } from "react";
import { Container } from "semantic-ui-react";
import { DiscussionEmbed } from "disqus-react";
import {
  AuthorHead, AuthorSec, AuthorSubHead, Body, BodyInner, Description, Heading, ListItem, UnorderedList, Date, LoaderDiv,
} from "./styles";
// import AdComponent from "../../AdComponent/AdComponent";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";

const AdComponent = lazy(() => import("../../AdComponent/AdComponent"));
const renderLoader = () => <LoaderDiv active inline="centered" size="big">Loading</LoaderDiv>;

function May2020Update() {
  //! IMP SECTION FOR COMMENTS
  const url = "https://direwolf-tech.disqus.com/may-2020-update";
  const identifier = "May 2020 Update";
  const title = "Project Sakura | May 2020 Update";
  useEffect(() => {
    document.title = "Project Sakura | May 2020 Update";
  }, []);
  return (
    <Body>
      <Navbar />
      <Container>
        <BodyInner>
          <Date>15 May 2020</Date>
          <Heading>Its summer and spring is almost gone, but we came with the May update.</Heading>
          <Description>
            Hello Everyone, Its May and we are here with another update of Project Sakura. This update took a while I know that but we added yet again many new changes that we are sure you
            are going to love.
          </Description>
          <Description>The changes that you will be seeing in this release are,</Description>
          <UnorderedList>
            <ListItem>May Security Patch r35.</ListItem>
            <ListItem>All the new Lineage OS changes.</ListItem>
            <ListItem>AOSPA style volume dialog.</ListItem>
            <ListItem>LTE to 4G icon switch.</ListItem>
            <ListItem>OOS style dismiss all to be used with R-Style nortification panel.</ListItem>
            <ListItem>Material Ocean Theme.</ListItem>
            <ListItem>Pitch black theme.</ListItem>
            <ListItem>Redesigned battery settings from upcoming DOT OS Q.</ListItem>
            <ListItem>Navigation handle length Improvements.</ListItem>
            <ListItem>And few more improvements..</ListItem>
          </UnorderedList>

          <Description>So this is all for the release. I really hope you guys will enjoy it and You can comment down to request any new feature for the next release. </Description>
          <Description>Until then, Stay home stay safe.</Description>
          <Suspense fallback={renderLoader()}>
            <AdComponent />
          </Suspense>
          <DiscussionEmbed
            shortname="direwolf-tech"
            config={{ url, identifier, title }}
          />
        </BodyInner>
        <AuthorSec>
          <AuthorHead>About Author</AuthorHead>
          <AuthorSubHead>LordShenron</AuthorSubHead>
          <Description>
            LordShenron is the lead developer of the project. He is also an IT Engg Student and he loves anime and Japanese pop music. When he is not online he is mostly sleeping or busy
            with some college work.
          </Description>
        </AuthorSec>
      </Container>
      <Footer />
    </Body>
  );
}
export default May2020Update;

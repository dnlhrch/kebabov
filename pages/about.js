import React from "react";
import styled from "styled-components";
import openAbout from "./index.js"

export default function About() {
  const Sho = styled.div`
    position: absolute;
    width: 100vw;
    height: 100%;
    z-index: 3;
  `;

  const Scroll = styled.div`
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
  `;

  const Column = styled.div`
    flex: 0 0 auto;
    width: 40vw;
    margin: 2vw;
  `;

  const Feet = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 96vw;
    position: absolute;
    bottom: 0;
    margin: 2vw;
  `;

  const Indent = styled.p`
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    text-indent: -6.5vw;
    padding-left: 6.5vw;
    white-space: pre-wrap;
  `;

  const Header = styled.h1`
    margin-bottom: 1.6vw !important;
  `;

  return (
    <Sho>
      <Scroll>
        <Column>
          <Header>Biography</Header>
          <p>
            Daniil was born in Vladivostok in 1991. Graduated from the Faculty
            of Fine Arts of The Far Eastern State Institute of Arts (2013,
            Vladivostok, Russia) and the School of Modern Art “Free Workshops of
            MMOMA" in Moscow (2018). In 2012 Daniil went to Japan with the aim
            of studying ceramic techniques from different masters. He lives and
            works in Moscow nowadays.
          </p>
        </Column>
        <Column>
          <Header>Artist statement</Header>
          <p>
            The artist combines contemporary materials with traditional ones,
            using their unusual properties in his works. Antropov explores
            alternative methods of the shaping of organisms in his attempt to
            visualize chaos as the major feature of modernity, at the same time
            pushing the boundaries of ceramics. Artist uses construction mesh
            and rods showing asymmetrical shapes, baring textures and combines
            the fluidity and impermanence of ceramics with a solid substance,
            covering his sculptures with bright glazes.
          </p>
        </Column>
        <Column>
          <Header>Education</Header>
          <Indent>2013{`\t`}Far Eastern State Institute of Arts- Major: Fine Arts, Vladivostok, Russia</Indent>
          <Indent>2018{`\t`}MMOMA – Free workshops, Moscow, Russia</Indent>
        </Column>
        <Column>
          <Header>Selected Group Exhibitions</Header>
          <Indent>2009{`\t`}Vladivostok Biennale of Visual Arts: Arseniev State Museum, Vladivostok, Russia</Indent>
          <Indent>2010{`\t`}Tokyo Designers Week 2010: Tokyo, Japan</Indent>
          <Indent>2011{`\t`}Plate Exhibition: Tokyo, Japan</Indent>
          <Indent>2011{`\t`}Vladivostok Biennale of Visual Arts: Arseniev State Museum, Vladivostok, Russia</Indent>
          <Indent>2012{`\t`}Decorative Spirit: Changjiang, China</Indent>
          <Indent>2015{`\t`}Flow Exhibition: Vladivostok, Russia</Indent>
          <Indent>2017{`\t`}Clay: Icheon, South Korea</Indent>
          <Indent>2018{`\t`}Performance society: Moscow, Russia</Indent>
          <Indent>2018{`\t`}MMOMA Workshops: Moscow, Russia</Indent>
          <Indent>2018{`\t`}Poligraficheskiy tsekh: Moscow, Russia</Indent>
          <Indent>2019{`\t`}Buro new cool: Moscow, Russia</Indent>
        </Column>
        <Column>
          <Indent>2019{`\t`}Cube Moscow – Visiting Valera: Moscow, Russia</Indent>
          <Indent>2019{`\t`}Azot gallery x betweenwindows: Moscow, Russia</Indent>
          <Indent>2019{`\t`}0.0.0.0: Moscow, Russia</Indent>
          <Indent>2020{`\t`}Nothing box : Moscow, Russia</Indent>
          <Indent>2020{`\t`}Triumph Gallery – A Wave of Dreams: Moscow, Russia</Indent>
          <Indent>2020{`\t`}Art Design Human Studio – blazar: Moscow, Russia</Indent>
          <Indent>2020{`\t`}Art Brut Gallery – bridge: Moscow, Russia</Indent>
          <Indent>2020{`\t`}London Connoisseur – Four Rooms: London, England</Indent>
          <Indent>2021{`\t`}Hidden Places – MaxArt Foundation: Moscow, Russia</Indent>
          <Indent>2021{`\t`}Group Therapy – Fabula Gallery: Moscow, Russia</Indent>
          <Indent>2021{`\t`}+33 – The Foundation of Vladimir Smirnov and Konstantine Sorokin: Moscow, Russia</Indent>
        </Column>
        <Column>
          <Indent>2021{`\t`}Moscow – Seoul: Shared Intentions – Museum of Moscow: Moscow, Russia</Indent>
          <Indent>2021{`\t`}Kurator macht blau – Anti-Festival – Academy of Fine Arts Vienna: Vienna, Austria</Indent>
          <Indent>2021{`\t`}1st Komi Biennale – The National Gallery of the Republic of Komi: Syktyvkar, Russian Federation</Indent>
          <Indent>2021{`\t`}Living Substance – The State Tretyakov Gallery : Moscow, Russia</Indent>
          <Indent>2021{`\t`}Cosmoscow – Futuro gallery: Moscow, Russia</Indent>
          <Indent>2021{`\t`}Lady Dior As Seen By – Ruarts Foundation: Moscow, Russia</Indent>
          <Indent>2021{`\t`}Le Cru Et Le Cuit – Russian Museum of Ethnography: St. Petersburg, Russia</Indent>
          <Indent>2021{`\t`}When shades overlap – Art Design Human: Moscow, Russia </Indent>
          <Indent>2021{`\t`}AAA – Hide Gallery: Moscow, Russia</Indent>
          <Indent>2021{`\t`}It Will Be Clear Tomorrow Morning – Triumph Gallery: Moscow, Russia</Indent>
        </Column>
        <Column>
          <Header>Personal exhibition</Header>
          <Indent>2019{`\t`}Devoid forms – Moscow museum of modern art: Moscow, Russia</Indent>
          <Indent>2021{`\t`}Tired Toys Are Sleeping – Nizhny Novgorod State Art Museum: Nizhny Novgorod, Russia</Indent>
        </Column>
        <Column>
          <Header>Awards</Header>
          <Indent>2020{`\t`}Nominee of the Sergey Kuryokhin Contemporary Art Award: St. Petersburg, Russia</Indent>
        </Column>
      </Scroll>
      <Feet>
        <h1 onClick={openAbout}>Close</h1>
        <h1>
          <a href="https://www.facebook.com/danya.antropov">FB</a>
          <a href="https://www.instagram.com/danyantropov/">IG</a>
        </h1>
      </Feet>
    </Sho>
  );
}

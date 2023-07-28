import SocialIcons from './SocialIcons'
import { Container } from './styles/Container.styled'
import { Flex } from './styles/Flex.styled'
import { StyledFooter } from './styles/Footer.styled'


import React from 'react'

const Footer = () => {
  return (
    <StyledFooter>

        <Container>
            <img src='./images/logo_white.svg' alt='' />

            <Flex>
                <ul>
                    <li>
                        The Huddle Is Real
                    </li>
                    <li>+1-800-555-1212</li>
                    <li>me@huddle.com</li>
                </ul>
                <ul>
                    <li>About Us</li>
                    <li>What We Do</li>
                </ul>
                <ul>
                    <li>Career</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                </ul>

                <SocialIcons />
            </Flex>

            <p>&copy; 2023 Huddle. All Rights Reserved.</p>
        </Container>
    </StyledFooter>
  )
}

export default Footer
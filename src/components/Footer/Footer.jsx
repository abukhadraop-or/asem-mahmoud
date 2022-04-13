import { Container } from 'components/Shared/shared-styles'
import React from 'react'
import FooterLogoIcon from 'assets/images/blue_square.svg'
import { APP } from 'components/Shared/constants'
import {
  FooterContent,
  FooterPrimaryItem,
  FooterSecondaryItem,
  FooterLogo,
  FooterTitle,
  FooterWrapper,
  FooterItems,
} from './footer-styles'

/**
 * Footer content.
 *
 * @return {JSX.Element}
 */
export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <FooterContent>
          <div>
            <FooterLogo src={FooterLogoIcon} />
            <FooterTitle>{APP.FOOTER.TITLE}</FooterTitle>
          </div>
          {APP.FOOTER.LIST.map(({ name, items }) => (
            <div key={name}>
              <FooterPrimaryItem>{name}</FooterPrimaryItem>
              <FooterItems>
                {items.map((item)=> (
                  <FooterSecondaryItem key={item}>{item}</FooterSecondaryItem>
                ))}
              </FooterItems>
            </div>
          ))}
        </FooterContent>
      </Container>
    </FooterWrapper>
  )
}

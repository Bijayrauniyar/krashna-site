import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share'

const ConcertShareButtons = ({ concertId, intl }) => {
  const iconSize = 40
  const url = `https://krashna.nl/concerts/${concertId}/`
  const title = intl.formatMessage({ id: `concerts.${concertId}.title` })

  return (
    <div className="text-center mb-3 share-buttons">
      <FacebookShareButton url={url} quote={title}>
        <FacebookIcon size={iconSize} round />
      </FacebookShareButton>
      <TwitterShareButton url={url} title={title}>
        <TwitterIcon size={iconSize} round />
      </TwitterShareButton>
      <WhatsappShareButton url={url} title={title}>
        <WhatsappIcon size={iconSize} round />
      </WhatsappShareButton>
      <EmailShareButton url={url} subject={title} body={url}>
        <EmailIcon size={iconSize} round />
      </EmailShareButton>
      <TelegramShareButton url={url} title={title}>
        <TelegramIcon size={iconSize} round />
      </TelegramShareButton>
    </div>
  )
}

export default injectIntl(ConcertShareButtons)

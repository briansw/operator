import React from 'react'
import { Container, Row, Col } from 'styled-bootstrap-grid'
import {
  OperatorStyles,
  Console,
  SquareButton,
  SmallButton,
  WideButton,
  SellLotValue,
  BidHistory,
  InputButton
} from './OperatorStyles'

export default function OperatorLayout() {
  return <OperatorStyles>
      <div className="utilities">
        <img className="artsy-logo" alt="" src="/img/artsy-logo.svg" height="26" />
        <div className="CurrentLot">
          <img className="LotIcon" alt="" src="/img/artwork-thumb-a.png" />
          <div className="LotTitle">
            Lot 874<br />
            Ugo Rondinone
          </div>
        </div>

        <div className="min-max-wrapper">
          <div className="min">
            <span className="min-value">2,000</span>
            <span className="min marker">Min</span>
          </div>
          <div className="max">
            <span className="max-value">3,000</span>
            <span className="max marker">Max</span>
          </div>
        </div>
        <SmallButton className="Undo">Undo</SmallButton>
      </div>

      <Console>
        <div className="footing-wrapper right">
          <img className="current-footing-marker" alt="" src="/img/marker-alt.svg" />
          <div className="footing">
            <div className="foot left on">1,000</div>
            <div className="foot right on">1,100</div>
            <div className="foot left">1,200</div>
            <div className="foot right on">1,300</div>
            <div className="foot left">1,400</div>
            <div className="foot right on">1,500</div>
            <div className="foot left">1,600</div>
            <div className="foot right on">1,700</div>
            <div className="foot left">1,800</div>
            <div className="foot right on">1,900</div>
            <div className="foot left">2,000</div>
            <div className="foot right min">2,200</div>
            <div className="foot left">2,400</div>
            <div className="foot right on">2,600</div>
            <div className="foot left">2,800</div>
            <div className="foot right max">3,000</div>
            <div className="foot left">3,200</div>
            <div className="foot right on">3,500</div>
            <div className="foot left">3,800</div>
            <div className="foot right on">4,000</div>
            <div className="foot left">4,200</div>
            <div className="foot right on">4,500</div>
            <div className="foot left">4,800</div>
            <div className="foot right on">5,000</div>
          </div>
        </div>

        <div className="ActivityPanel">
          <InputButton className="CurrentAsk Typing">
            <span className="InputButtonLabel">Current ask</span>
            <span className="InputButtonValue">1,000</span>
            <span className="InputButtonPlaceholder">1,000</span>
            <div className="ActionButtons">
              <SmallButton className="Cancel">Cancel</SmallButton>
              <SmallButton className="Floor">Floor</SmallButton>
              <SmallButton className="Ok">Ok</SmallButton>
            </div>
          </InputButton>

          <InputButton className="CurrentIncrement">
            <span className="InputButtonLabel">Increment</span>
            <span className="InputButtonValue">100</span>
            <span className="InputButtonPlaceholder">100</span>
            <div className="ToggleButtons">
              <SmallButton className="Toggle Active Default">
                Default
              </SmallButton>
              <SmallButton className="Toggle TwoFiveEight">2-5-8</SmallButton>
              <SmallButton className="Toggle Manual">Manual</SmallButton>
            </div>
            <div className="ActionButtons">
              <SmallButton className="Cancel">Cancel</SmallButton>
              <SmallButton className="Ok">Ok</SmallButton>
            </div>
          </InputButton>

          <BidHistory>
            <div className="LineItem highest-bid">
              <span className="description">#935848</span>
              <span className="value">1,300</span>
            </div>
            <div className="LineItem">
              <span className="description">Floor</span>
              <span className="value">1,200</span>
            </div>
            <div className="LineItem rejected">
              <span className="description">#310622</span>
              <span className="value">1,200</span>
            </div>
            <div className="LineItem">
              <span className="description">#547687</span>
              <span className="value">1,100</span>
            </div>
            <div className="LineItem">
              <span className="description">Floor</span>
              <span className="value">1,000</span>
            </div>
            <div className="LineItem rejected">
              <span className="description">#483897</span>
              <span className="value">1,000</span>
            </div>
          </BidHistory>
        </div>

        <div className="ControlPanel">
          <SquareButton className="Floor" />
          <SquareButton className="Artsy Disabled" />
          <SquareButton className="Warning" />
          <SquareButton className="Ending" />

          <WideButton className="SellLot">
            <SellLotValue>&ndash;</SellLotValue>
          </WideButton>
          <WideButton className="PassLot" />
        </div>
      </Console>
      <div className="VersionNumber">Sotheby's v2.0.1</div>
    </OperatorStyles>
}

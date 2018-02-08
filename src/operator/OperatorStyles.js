import { injectLayoutBaseCSS } from 'styled-bootstrap-grid'
import styled, { injectGlobal } from 'styled-components'

const colors = {
  white: '#fff',
  black: '#000',
  gray333: '#333',
  gray666: '#666',
  gray777: '#777',
  grayccc: '#ccc',
  graye5: '#e5e5e5',
  green: '#0EDA83',
  purple: '#6E1FFF',
  light_purple: 'rgba(98,46,236,.5)',
  red: '#F7625A',
  yellow: '#F1CD39'
}

const fontsize = {
  xsmall: '8px',
  small: '12px',
  large: '22px'
}

injectGlobal`
  @import url("http://fast.fonts.com/t/1.css?apiType=css&projectid=f7f47a40-b25b-44ee-9f9c-cfdfc8bb2741");
  @font-face{
    font-family: "avant-garde";
    src:url("/fonts/b74e5f86-4477-435a-abdf-32d8215f21bc.eot?iefix") format("eot");}
  @font-face{
    font-family: "avant-garde";
    src:url("/fonts/b74e5f86-4477-435a-abdf-32d8215f21bc.eot?iefix");
    src:url("/fonts/c18aee57-7585-4a8b-9a1c-69d226301d73.woff") format("woff"),
        url("/fonts/44ccbb2b-0fbc-4d95-b1da-0aa73bd26fb0.ttf") format("truetype"),
        url("/fonts/f2de529c-11d2-43b7-be7c-05c5aaeaf133.svg#f2de529c-11d2-43b7-be7c-05c5aaeaf133") format("svg");
  }
  
  body { 
    margin: 0;
    padding: 0;
    font-size: 0;
    font-family: 'avant-garde', Helvetica, arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    background: ${colors.black};
    text-transform: uppercase;
  }
`

injectLayoutBaseCSS()

export const Console = styled.div`
  width: 884px;
  height: 500px;
  margin: 0 auto;
`

export const SquareButton = styled.div`
  margin: 10px;
  width: 140px;
  height: 140px;
  border: 2px solid #000;
  display: inline-block;
  font-size: ${fontsize.large};
  position: relative;
  cursor: pointer;
  &:after { 
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  &:hover { border-color: ${colors.white}; }
  &:active { background: ${colors.black} !important; }
`

export const WideButton = styled.div`
  border: 2px solid ${colors.black};
  font-size: ${fontsize.large};
  margin: 10px;
  position: relative;
  width: 300px;
  height: 60px;
  cursor: pointer;
  display: inline-block;
  &:after { 
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  &:hover { border-color: ${colors.white}; }
  &:active { background: ${colors.black} !important; }
`

export const InputButton = styled.div`
  border: 2px solid ${colors.black};
  margin: 10px !important;
  position: relative;
  width: 300px;
  background: ${colors.white};
`

export const SellLotValue = styled.div`
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  position: absolute;
`

export const SmallButton = styled.div`
  border: 2px solid transparent;
  font-size: ${fontsize.small};
  position: relative;
  background: ${colors.white};
  display: inline-block;
  height: 38px;
  min-width: 96px;
  cursor: pointer;
  padding: 12px 10px 10px 10px;
  margin-left: 2px;
  text-align: center;
  &:hover { border-color: inherit; }
  &:active { background: ${colors.black} !important; }
`

export const BidHistory = styled.div`
  width: 268px;
  height: 220px;
  overflow: hidden;
  margin: 7px 0 0 25px;
`

export const OperatorStyles = styled.div`
  * { box-sizing: border-box; vertical-align: top; }
  
  .utilities {
    position: relative;
    width: 880px;
    margin: 15px auto;
    color: #fff;
    height: 38px;

      .artsy-logo {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
      }

      .current-lot-wrapper {
        position: absolute;
        top: 50%;
        left: 100px;
        transform: translateY(-50%);
      }

      .Undo {
        position: absolute;
        right: 0;
        top: 0;
        background: ${colors.gray666};
      }

      .min-max-wrapper {
        position: absolute;
        top: 50%;
        right: 360px;
        font-size: 12px;
        color: #fff;
        transform: translateY(-50%);
        text-align: right;
        .min-value, .max-value { position: relative; top: 2px; }
        .marker {
          width: 32px;
          font-size: ${fontsize.xsmall};
          line-height: 1;
          text-transform: uppercase;
          padding: 5px 0 3px 0;
          text-align: center;
          display: inline-block;
          color: ${colors.black};
          margin: 0 0 3px 10px;
          &.min { background: ${colors.yellow}; }
          &.max { background: ${colors.red}; }
        }
      }
  }

  .footing-wrapper {
    background: ${colors.gray333} url('/img/divider.svg') repeat-y 100px 0;
    height: 100%;
    position: relative;
    width: 200px;
    display: inline-block;
    margin-right: 2px;
    &.left, &.right { background: #333 url('../img/foot-highlighter.svg') no-repeat; }
    &.left { background-position: 0 0; }
    &.right { background-position: 99px 0; }
    .footing {
      overflow: scroll;
      height: 100%;
      padding-top: 69px;
      &::-webkit-scrollbar { display: none; }
    }
    .current-footing-marker {
      width: 200px;
      position: absolute;
      top: 78px;
      left: 0;
    }
    .foot {
      font-size: 12px;
      color: ${colors.gray666};
      padding: 10px 0;
      text-align: center;
      position: relative;
      transition: color 300ms ease;
      &.right { padding-left: 100px; }
      &.left { padding-right: 100px; }
      &.on, &.min, &.max { color: ${colors.white}; }
      &:after {
        width: 40px;
        font-size: ${fontsize.xsmall};
        line-height: 1;
        padding: 5px 0 3px 0;
        text-align: center;
        display: inline-block;
        position: absolute;
        color: ${colors.black};
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        border: 4px solid ${colors.gray333};
      }
      &.min:after { content: 'Min'; background: ${colors.yellow}; }
      &.max:after { content: 'Max'; background: ${colors.red}; }
    }
  }

  .ControlPanel, .ActivityPanel {
    width: 340px;
    display: inline-block;
    height: 100%;
  }

  .ActivityPanel {
    background: ${colors.gray333};
    padding: 10px 20px 10px 10px;
    margin-right: 2px;

    .InputButtonLabel {
      position: absolute;
      top: 15px;
      left: 15px;
      font-size: ${fontsize.small};
    }

    .InputButtonPlaceholder {
      color: ${colors.light_purple};
      display: none;
      &:after {
        position: absolute;
        content: '';
        display: inline-block;
        top: -1px;
        width: 2px;
        height: 100%;
        animation: 1000ms cursor_caret step-end infinite;
      }
      @keyframes cursor_caret {
        from, to { background: ${colors.purple}; }
        50% { background: transparent; }
      }
    }

    .ToggleButtons,
    .ActionButtons {
      position: absolute;
      right: 2px;
      bottom: 2px;
    }

    .Cancel {
      border-color: ${colors.graye5};
      color: ${colors.gray666};
      &:hover { border-color: ${colors.graye5} !important; }
      &:active { color: ${colors.black}; border-color: ${colors.black} !important; }
    }

    .ActionButtons { display: none; }

    .CurrentAsk {
      height: 140px;
      &:hover { cursor: pointer; }

      .InputButtonValue,
      .InputButtonPlaceholder {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 15px;
        font-size: ${fontsize.large};
      }
    }

    .CurrentIncrement {
      height: 86px;
      .InputButtonValue,
      .InputButtonPlaceholder {
        position: absolute;
        top: 15px;
        right: 15px;
        font-size: ${fontsize.small};
        &:before { content: '+'; }
      }

      .Toggle { 
        background: ${colors.graye5}; 
        color: ${colors.gray666};
        &:hover { border-color: ${colors.black}; }
        &:active { color: ${colors.black}; }
        &.Active { 
          background: ${colors.black}; 
          color: ${colors.white}; 
          cursor: default;
          &:hover { border-color: ${colors.black}; }
        }
      }
    }

    .Floor { background: ${colors.green}; }
    .Ok { background: ${colors.purple}; }

    


    .LineItem {
      font-size: ${fontsize.small};
      color: ${colors.gray666};
      position: relative;
      margin: 0 0 20px 0;
      .value {
        position: absolute;
        right: 0;
        top: 0;
      }
      &.highest-bid { color: ${colors.white}; }
      &.rejected span { color: ${colors.gray666}; text-decoration: line-through; }
    }
  }

  .ControlPanel {
    background: #666;
    padding: 10px;
    position: relative;
    .Floor { 
      background: ${colors.green}; 
      &:after { content: 'Floor'; }
    }

    .Artsy { 
      background: ${colors.purple}; 
      &:after { content: 'Artsy'; }
      &.Disabled {
        background: transparent;
        cursor: default;
        border-color: ${colors.gray777};
        color: ${colors.gray777};
        &:active { background: transparent !important; }
      }
    }
    
    .Warning { 
      background: ${colors.yellow}; 
      &:after { content: 'Warning'; }
    }

    .Ending { 
      background: ${colors.red}; 
      &:after { content: 'Ending'; }
    }

    .SellLot {
      background: ${colors.black};
      color: ${colors.white};
      &:after { 
        content: 'Sell'; 
        left: 20px;
        transform: translateY(-50%);
      }
      &:active { color: ${colors.black}; }
    }
    
    .PassLot {
      background: ${colors.grayccc};
      &:after { content: 'Pass lot' }
    }
  }

  .VersionNumber {
    font-size: ${fontsize.small};
    color: ${colors.gray666};
    text-align: right;
    width: 884px;
    margin: 5px auto 0 auto;
  }
`

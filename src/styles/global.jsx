import { createGlobalStyle } from 'styled-components'

const wave = '4px solid rgba(108, 99, 255, 0.5)';
const colorMain = '#6c63ff';
const animSpeed = '5000ms';

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: inherit;
  }
  html {
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    background-color: #161719;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  a {
    color: #e07628;
    text-decoration: none;
  }

.wrap {
  display: flex;
  justify-content: center;
  position: fixed;
  left: 75%;
  top: calc(50% - 110px);
}

.magnetar {
  animation: spin ${animSpeed} linear infinite;
  background: ${colorMain};
  opacity: .5;
  box-shadow: 50px 10px 29px 0px rgba(108, 99, 255, 0.6), -50px -10px 29px 0px rgba(133, 15, 107, 0.6);
  border-radius: 50%;
  position: absolute;
  height: 100px;
  width: 100px;
  z-index: 1;
  top: 110px;
  left: 50%;
  &::before {
    content: '';
    box-shadow: 0px 10px 10px 5px rgba(108, 99, 255, 0.9);
    border: 1px solid ${colorMain};
    height: 170vh;
    position: absolute; 
    z-index: 3;
    bottom: 50px;
    left: 50px; 
  }
  &::after {
    content: '';
    box-shadow: 0px 10px 10px 5px rgba(108, 99, 255, 0.9);
    border: 1px solid ${colorMain};
    height: 170vh;
    position: absolute; 
    z-index: 3;
    top: 50px;
    left: 50px;
  }
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}

.pulse {
  border-radius: 50%;
  height: 1px;
  width: 1px;
  &:after,
  &:before {
    content: '';
    display: block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
}

.pulse:after {
  border: ${wave};
  animation: pulse 1500ms linear infinite;
}

.pulse-2:after {
  border: ${wave};
  animation: pulse 5000ms linear infinite;
}

.pulse-3:after {
  border: ${wave};
  animation: pulse 2500ms linear infinite;
}

.pulse-4:after {
  border: ${wave};
  animation: pulse 3000ms linear infinite;
}

.pulse-5:after {
  border: ${wave};
  animation: pulse 3500ms linear infinite;
}

.pulse-6:after {
  border: ${wave};
  animation: pulse 2000ms linear infinite;
}

.pulse-7:after {
  border: ${wave};
  animation: pulse 4500ms linear infinite;
}

.pulse-8:after {
  border: ${wave};
  animation: pulse 8000ms linear infinite;
}

.pulse-9:after {
  border: ${wave};
  animation: pulse 6000ms linear infinite;
}

.pulse-10:after {
  border: ${wave};
  animation: pulse 6500ms linear infinite;
}

@keyframes pulse {
  0% {
    transform: scale(0.01);
    opacity: (1);
  }
  100% {
    transform: scale(7);
    opacity: (0);
  }
}
`

export default GlobalStyle

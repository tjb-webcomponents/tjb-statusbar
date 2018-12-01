import WebComponent from 'https://tjb-webcomponents.github.io/tjb-webcomponent/tjb-wc.min.js';
import html from 'https://tjb-webcomponents.github.io/html-template-string/html.min.js';

class StatusBar extends WebComponent() {
  // CSS
  ////////////////////////////////////////////////////////////

  CSS() {
    return html `
      <style>
        :host {
          --statusbar-width: 100%;
          --statusbar-height: 5px;
          --statusbar-position: absolute;
          --statusbar-left: 0;
          --statusbar-bottom: 0;
          --statusbar-top: auto;
          --statusbar-right: auto;
          --status-loading: linear-gradient(
            to right,
            #4cd964,
            #007aff,
            #ff2d55,
            #5856d6,
            #4cd964
          );
          --status-alert: #fa354c;
          --status-success: #4cd964;
          --status-info: #007aff;
        }

        .statusbar {
          width: var(--statusbar-width);
          height: var(--statusbar-height);
          box-sizing: border-box;
          position: var(--statusbar-position);
          max-height: 0;
          overflow: hidden;
          left: var(--statusbar-left);
          bottom: var(--statusbar-bottom);
          top: var(--statusbar-top);
          right: var(--statusbar-right);
          transition: max-height 250ms linear;
        }

        .status {
          max-height: var(--statusbar-height);
        }

        .loading {
          background: var(--status-loading);
          background-size: 300% 100%;
          animation: loading 2s linear infinite;
        }

        .alert {
          background: var(--status-alert);
          animation: blink 250ms linear 2;
        }

        .success {
          background: var(--status-success);
          animation: blink 250ms linear 2;
        }

        .info {
          max-height: var(--statusbar-height);
          background: var(--status-info);
          animation: blink 250ms linear 2;
        }

        @keyframes loading {
          0% {
            background-position: 0% 100%;
          }

          100% {
            background-position: 300% 100%;
          }
        }

        @keyframes blink {
          50% {
            background: transparent;
          }
        }
      </style>
    `;
  }

  // Markup
  ////////////////////////////////////////////////////////////

  HTML() {
    return html `
      <div class="statusbar"></div>
    `;
  }

  // Attribute Handling
  ////////////////////////////////////////////////////////////
  static get observedAttributes() {
    return ['status'];
  }

  // Logic
  ////////////////////////////////////////////////////////////

  handleStatusChange(newValue) {
    this.statusbarClassHandler(newValue);
  }

  statusbarClassHandler(name) {
    this.domNode.className = `statusbar status ${name}`;
  }

}

customElements.define("tjb-statusbar", StatusBar);

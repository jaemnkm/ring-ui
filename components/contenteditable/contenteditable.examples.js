import React from 'react';

import reactDecorator from '../../.storybook/react-decorator';

import ContentEditable from './contenteditable';

export default {
  title: 'Components|ContentEditable',
  decorators: [reactDecorator()],

  parameters: {
    notes: 'Provides a ContentEditable component.'
  }
};

export const basic = () => (
  <div>
    <ContentEditable className="my-input">
      <span>
        text <b>bold text</b> text
      </span>
    </ContentEditable>
    <ContentEditable className="my-input" disabled>
      <span>
        text <b>bold text</b> text
      </span>
    </ContentEditable>
  </div>
);

basic.story = {
  name: 'basic',

  parameters: {
    storyStyles: `
  <style>
      .my-input {
        padding-left: 4px;
      }

      .my-input[disabled] {
        border: 1px solid var(--ring-border-disabled-color);
        background-color: var(--ring-disabled-color);
      }
  </style>`
  }
};

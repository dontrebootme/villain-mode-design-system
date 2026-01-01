import React from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import clsx from 'clsx';

const customTheme = {
  plain: {
    color: '#E0E0E0',
    backgroundColor: '#080A1A',
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: '#A0A8B8',
        fontStyle: 'italic',
      },
    },
    {
      types: ['keyword', 'storage', 'tag', 'boolean', 'number', 'constant', 'symbol', 'deleted'],
      style: {
        color: '#00F0FF', // Electric Cyan
      },
    },
    {
      types: ['string', 'char', 'attr-value', 'builtin', 'inserted'],
      style: {
        color: '#F5A623', // Amber
      },
    },
    {
      types: ['function', 'class-name'],
      style: {
        color: '#B026FF', // Magenta
      },
    },
    {
      types: ['operator', 'entity', 'url'],
      style: {
        color: '#00C3E3', // Cyan Dark
      },
    },
    {
      types: ['attr-name', 'variable'],
      style: {
        color: '#FFD700', // Gold
      },
    },
    {
      types: ['selector', 'regex', 'important'],
      style: {
        color: '#FF003C', // Red
      },
    },
  ],
};

const CodeBlock = ({
  code,
  language = 'javascript',
  className,
  ...props
}) => {
  return (
    <Highlight theme={customTheme} code={code} language={language}>
      {({ className: highlightClassName, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={clsx(
            'font-code text-sm p-6 overflow-x-auto',
            'border-l-4 border-amber',
            'bg-[#080A1A]',
            className
          )}
          style={style}
          {...props}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;

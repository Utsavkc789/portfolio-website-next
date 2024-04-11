import {
  Html,
  Head,
  Main,
  NextScript
} from 'next/document';

export default function Document() {
  return (
    <Html
      style={{
        backgroundColor: 'white',
        height: '100%',
        width: '100%'
      }}
      lang="en"
    >
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

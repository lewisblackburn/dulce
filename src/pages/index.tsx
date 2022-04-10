import Head from 'next/head';
import Editor from '@monaco-editor/react';

export default function Home() {
  return (
    <div>
      <Head>
        <title>TypeScript starter for Next.js</title>
        <meta
          name="description"
          content="TypeScript starter for Next.js that includes all you need to build amazing apps"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Editor
        width="50vw"
        height="100vh"
        defaultLanguage="csharp"
        defaultValue=""
        theme="vs-dark"
        loading=""
      />
    </div>
  );
}

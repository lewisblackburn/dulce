import Head from 'next/head';
import Editor from '@monaco-editor/react';
import { useState } from 'react';

const supportedLanguages = [
  { id: 1, name: `apex` },
  { id: 2, name: `azcli` },
  { id: 3, name: `bat` },
  { id: 4, name: `c` },
  { id: 5, name: `clojure` },
  { id: 6, name: `coffeescript` },
  { id: 7, name: `cpp` },
  { id: 8, name: `csharp` },
  { id: 9, name: `csp` },
  { id: 10, name: `css` },
  { id: 11, name: `dockerfile` },
  { id: 12, name: `fsharp` },
  { id: 13, name: `go` },
  { id: 14, name: `graphql` },
  { id: 15, name: `handlebars` },
  { id: 16, name: `html` },
  { id: 17, name: `ini` },
  { id: 18, name: `java` },
  { id: 19, name: `javascript` },
  { id: 20, name: `json` },
  { id: 21, name: `kotlin` },
  { id: 22, name: `less` },
  { id: 23, name: `lua` },
  { id: 24, name: `markdown` },
  { id: 25, name: `msdax` },
  { id: 26, name: `mysql` },
  { id: 27, name: `objective-c` },
  { id: 28, name: `pascal` },
  { id: 29, name: `perl` },
  { id: 30, name: `pgsql` },
  { id: 31, name: `php` },
  { id: 32, name: `plaintext` },
  { id: 33, name: `postiats` },
  { id: 34, name: `powerquery` },
  { id: 35, name: `powershell` },
  { id: 36, name: `pug` },
  { id: 37, name: `python` },
  { id: 38, name: `r` },
  { id: 39, name: `razor` },
  { id: 40, name: `redis` },
  { id: 41, name: `redshift` },
  { id: 42, name: `ruby` },
  { id: 43, name: `rust` },
  { id: 44, name: `sb` },
  { id: 45, name: `scheme` },
  { id: 46, name: `scss` },
  { id: 47, name: `shell` },
  { id: 48, name: `sol` },
  { id: 49, name: `sql` },
  { id: 50, name: `st` },
  { id: 51, name: `swift` },
  { id: 52, name: `tcl` },
  { id: 53, name: `typescript` },
  { id: 54, name: `vb` },
  { id: 55, name: `xml` },
  { id: 56, name: `yaml` },
];

export default function Home() {
  const [language, setLanguage] = useState(`javascript`);

  return (
    <div className="flex flex-col h-screen text-white">
      <Head>
        <title>TypeScript starter for Next.js</title>
        <meta
          name="description"
          content="TypeScript starter for Next.js that includes all you need to build amazing apps"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex items-center justify-between w-full h-12 px-5 bg-brand">
        <h1>Ducle</h1>
        <div>
          <button onClick={() => setLanguage(`typescript`)}>change</button>
          <button>download</button>
        </div>
      </div>
      <Editor
        options={{
          fontSize: 20,
          minimap: {
            enabled: false,
          },
          padding: {
            top: 40,
          },
          lineHeight: 40,
          formatOnPaste: true,
        }}
        width="100vw"
        height="100%"
        defaultLanguage="javascript"
        language={language}
        defaultValue=""
        theme="vs-dark"
        loading=""
      />
    </div>
  );
}

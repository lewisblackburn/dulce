import Head from 'next/head';
import { useRouter } from 'next/router';
import Editor from '@monaco-editor/react';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

export const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function File() {
  const [code, setCode] = useState(``);
  const [language, setLanguage] = useState(`typescript`);
  const { query } = useRouter();

  const { data } = useSWR(`/api/${query.slug}`, fetcher);

  useEffect(() => {
    if (query.slug) {
      setLanguage(query.slug.toString().split(`.`)[1] ?? `typescript`);
    }
  }, [query, language]);

  useEffect(() => {
    if (data) setCode(data.value);
  }, [data]);

  if (data) {
    return (
      <div className="flex flex-col h-screen bg-brand">
        <Head>
          <title>Dulce</title>
          <meta name="description" content="" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
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
          language={language}
          value={code?.toString()}
          width="100vw"
          height="100%"
          theme="vs-dark"
          loading=""
          onMount={(editor, _monaco) => {
            editor.focus();
          }}
          onChange={(value) => {
            setCode(value ?? ``);
          }}
        />
        <div className="flex items-center justify-between bg-brand text-white p-5">
          <button
            onClick={() => {
              if (query.slug) {
                fetch(`/api/set`, {
                  method: `POST`,
                  body: JSON.stringify({
                    name: query.slug,
                    text: code,
                  }),
                });
              }
            }}
          >
            save
          </button>
          <p>{language}</p>
        </div>
      </div>
    );
  }

  return null;
}

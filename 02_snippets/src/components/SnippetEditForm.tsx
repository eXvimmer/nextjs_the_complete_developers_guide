"use client";
import { Editor, OnChange } from "@monaco-editor/react";
import type { Snippet } from "@prisma/client";
import { useState } from "react";
import * as actions from "@/actions";

function SnippetEditForm({ snippet }: { snippet: Snippet }) {
  const [code, setCode] = useState(snippet.code);
  const handleCodeChange: OnChange = (val, _e) => {
    if (!val) {
      return;
    }
    setCode(val);
  };

  const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code);

  return (
    <div>
      <Editor
        height="40vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.code}
        onChange={handleCodeChange}
        options={{
          minimap: {
            enabled: false,
          },
        }}
      />
      <form action={editSnippetAction}>
        <button type="submit" className="rounded border p-2">
          Save
        </button>
      </form>
    </div>
  );
}

export default SnippetEditForm;

"use client"

import { useActionState } from "react";
import PageTitle from "../pagetitle";
import toast from "react-hot-toast";

type FormSubmitState = {
  title: string;
  content: string;
  author: string;
};

const defaultFormSubmitState = {title: "", content: "", author: ""}

async function newPostSubmit(previousState: FormSubmitState, formData: FormData): Promise<FormSubmitState> {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const result: FormSubmitState = defaultFormSubmitState

  const isError: boolean = false;

  if (isError) {
    result.title = formData.get("title")?.toString() ?? ""
    result.content = formData.get("content")?.toString() ?? ""
    result.author = formData.get("author")?.toString() ?? ""

    toast.error("Při zasílaní příspěvku se naskytla chyba!")
  }
  else {
    toast.success("Příspěvek byl vytvořen úspěšne!")
  }
  
  return result
}

export default function PostsNew() {
  const [state, action, isLoading] = useActionState(newPostSubmit, defaultFormSubmitState);

  return (
    <div className="flex flex-col">
      <PageTitle title="Přidání článku" />
      <div className="p-10 flex justify-center items-center">
        <form action={action} className="flex flex-col max-w-xl w-full items-baseline">
          <label htmlFor="titleinput" className="text-sm">Titulek</label>
          <input
            className="bg-white border-1 border-[#00000021] rounded-sm w-full mb-6 h-13 p-2"
            defaultValue={state.title}
            required
            minLength={3}
            id="titleinput"
            name="title"
            type="text" />
          <label htmlFor="contentinput" className="text-sm">Obsah</label>
          <textarea
            className="bg-white border-1 border-[#00000021] rounded-sm w-full mb-6 h-55 p-2 resize-none"
            title="Obsah musí mít alespon 10 znakú"
            defaultValue={state.content}
            required
            minLength={10}
            id="contentinput"
            name="content" />
          <label htmlFor="authorinput" className="text-sm">Autor</label>
          <input
            className="bg-white border-1 border-[#00000021] rounded-sm w-full mb-6 h-13 p-2"
            type="text"
            defaultValue={state.author}
            id="authorinput"
            name="author" />
          <button
            className="bg-[var(--inverse-background)] text-[var(--text-inverse)] text-lg font-bold rounded-sm w-54 py-3 hover:cursor-pointer hover:bg-[var(--inverse-background-hover)] active:bg-[var(--inverse-background-pressed)]"
            type="submit">
            {isLoading ? "Odesílám..." : "Odeslat"}
          </button>
        </form>
      </div>
    </div>
  );
}
import { useState } from "react";

function AiChat({
  attachMode,
  setAttachMode,
  selectedItems,
  setSelectedItems,
}) {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hey" },
    {
      role: "assistant",
      content:
        "Click on paperclip icon to activate 'Attach Mode' and select the items to chat about",
    },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = {
      role: "user",
      content: input,
      attachments: selectedItems,
    };
    setMessages((prev) => [...prev, userMsg]);
    setSelectedItems([]);
    setInput("");
    setAttachMode(false);

    setTimeout(() => {
      const aiMsg = {
        role: "assistant",
        content: "This is a response from AI.",
      };
      setMessages((prev) => [...prev, aiMsg]);
    }, 1000);
  };

  return (
    <section className="bg-white flex flex-col gap-2 items-center p-2.5 rounded-lg border border-border h-full">
      <h1 className="text-xl font-bold text-dark-blue">AI Assistant</h1>
      <div className="grow content-center w-full flex flex-col justify-end gap-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`max-w-3/4 w-fit flex flex-col gap-1 ${msg.role === "user" ? "self-end" : ""}`}
          >
            <div
              className={`py-1 px-3 rounded-lg ${
                msg.role === "user"
                  ? "bg-bg text-grey border border-border"
                  : "bg-dark-blue text-white"
              }`}
            >
              {msg.content}
            </div>
            {msg.attachments && msg.attachments.length > 0 && (
              <div className="w-fit self-end text-xs px-2 rounded-full bg-border font-semibold">
                {selectedItems.length} files added
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="w-full border border-border p-2.5">
        {selectedItems.length > 0 && (
          <div className="text-sm bg-border w-fit px-2 rounded-full flex items-center gap-1">
            {selectedItems.length} files
            <i
              className="bx bx-x cursor-pointer"
              onClick={() => setSelectedItems([])}
              title="Clear Attachments"
            />
          </div>
        )}
        <div className="w-full flex items-center gap-2">
          <input
            type="text"
            placeholder="Enter any questions"
            className="grow overflow-y-scroll max-h-full"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            className={`flex items-center justify-center p-1.5 rounded-lg hover:bg-dark-blue/75 ${attachMode ? "bg-dark-blue" : "bg-dark-blue/45"}`}
            onClick={() => {
              setAttachMode(!attachMode);
              setSelectedItems([]);
            }}
          >
            <i className="bx bx-paperclip text-lg -rotate-45 text-white" />
          </button>
          <button
            className="bg-dark-blue/45 hover:bg-dark-blue flex items-center justify-center p-1.5 rounded-lg"
            onClick={sendMessage}
          >
            <i className="bx bxs-send text-lg -rotate-45 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default AiChat;

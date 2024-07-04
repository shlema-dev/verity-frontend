const parseHtml = (html: string): React.ReactNode[] => {
  const result: React.ReactNode[] = [];
  let currentTag: string | null = null;
  let currentContent: React.ReactNode[] = [];
  let key = 0;

  const createElement = (
    tag: string,
    content: React.ReactNode | React.ReactNode[]
  ) => {
    switch (tag) {
      case "ul":
        return (
          <ul key={key++} className="">
            {content}
          </ul>
        );
      case "li":
        return (
          <li key={key++} className="mb-4 text-gray-11">
            {content}
          </li>
        );
      case "strong":
        return (
          <strong key={key++} className="font-semibold">
            {content}
          </strong>
        );
      case "br":
        return <br key={key++} />;
      default:
        return content;
    }
  };

  const processContent = (content: string): React.ReactNode => {
    const parts = content.split(/<strong>|<\/strong>/);
    return parts.map((part, index) =>
      index % 2 === 1 ? (
        <strong key={index} className="font-semibold">
          {part}
        </strong>
      ) : (
        part
      )
    );
  };

  for (let i = 0; i < html.length; i++) {
    if (html[i] === "<") {
      const closeIndex = html.indexOf(">", i);
      if (closeIndex !== -1) {
        const tag = html.slice(i + 1, closeIndex);
        if (tag[0] === "/") {
          if (currentTag) {
            const content =
              currentContent.length === 1 ? currentContent[0] : currentContent;
            result.push(createElement(currentTag, content));
            currentTag = null;
            currentContent = [];
          }
        } else {
          currentTag = tag;
          currentContent = [];
        }
        i = closeIndex;
      }
    } else if (currentTag) {
      let textContent = "";
      while (i < html.length && html[i] !== "<") {
        textContent += html[i];
        i++;
      }
      i--; // Adjust for the loop increment
      if (textContent.trim()) {
        currentContent.push(processContent(textContent));
      }
    }
  }

  return result;
};

export const formatTakeaways = (takeaways: string): React.ReactNode[] => {
  const cleanedTakeaways = takeaways.replace(/\n/g, "");
  return parseHtml(cleanedTakeaways);
};

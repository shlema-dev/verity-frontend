const parseHtml = (html: string): React.ReactNode[] => {
  const result: React.ReactNode[] = [];
  const stack: { tag: string; content: React.ReactNode[] }[] = [];
  let key = 0;

  const createElement = (
    tag: string,
    content: React.ReactNode | React.ReactNode[]
  ): React.ReactNode => {
    switch (tag) {
      case "h2":
        return (
          <h2 key={key++} className="text-3xl font-bold mb-8 text-gray-12">
            {content}
          </h2>
        );
      case "h3":
        return (
          <h3
            key={key++}
            className="text-2xl font-semibold mt-12 mb-8 text-gray-12"
          >
            {content}
          </h3>
        );
      case "p":
        return (
          <p key={key++} className="mb-4 text-gray-11">
            {content}
          </p>
        );
      case "strong":
        return (
          <strong key={key++} className="font-semibold text-gray-12">
            {content}
          </strong>
        );
      case "em":
        return (
          <em key={key++} className="italic text-gray-12">
            {content}
          </em>
        );
      case "blockquote":
        return (
          <blockquote
            key={key++}
            className="my-8 pl-4 border-l-4 border-primary-10 text-gray-12 text-lg lg:text-xl"
          >
            {content}
          </blockquote>
        );
      case "br":
        return <br key={key++} />;
      default:
        return content;
    }
  };

  const regex = /(<\/?[^>]+>)/g;
  const parts = html.split(regex);

  parts.forEach((part) => {
    if (part.startsWith("<")) {
      const tagMatch = part.match(/<\/?([a-zA-Z0-9]+)/);
      if (tagMatch) {
        const tag = tagMatch[1];

        if (part.startsWith("</")) {
          // Closing tag
          const last = stack.pop();
          if (last) {
            const content =
              last.content.length === 1 ? last.content[0] : last.content;
            if (stack.length > 0) {
              stack[stack.length - 1].content.push(createElement(tag, content));
            } else {
              result.push(createElement(tag, content));
            }
          }
        } else {
          // Opening tag
          stack.push({ tag, content: [] });
        }
      }
    } else {
      // Text content
      if (stack.length > 0) {
        stack[stack.length - 1].content.push(part);
      } else {
        result.push(part);
      }
    }
  });

  return result;
};

export const formatArticleContent = (content: string): React.ReactNode[] => {
  return parseHtml(content);
};

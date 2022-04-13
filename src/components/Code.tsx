type PropType = {
  code: string;
  spanContainer: any;
};

const Code = (props: PropType) => {
  return (
    <p ref={props.spanContainer}>
      {props.code.split("").map((c, index) => {
        if (c === "\n") {
          return <br key={index} />;
        }
        if (c === "\t") return <span className="tab">spa</span>;
        return <span key={index}>{c}</span>;
      })}
    </p>
  );
};

export default Code;

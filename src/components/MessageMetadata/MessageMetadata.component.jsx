import "./MessageMetadat.styles.scss";



export function MessageMetadata(props) {
  return (
    <span className="message-metadat">
        <span className="message-metadata__display-name">
            {props.displayName}
        </span>
        <span className="message-metadat__time">
            {props.time}
        </span>
    </span>

  );
}
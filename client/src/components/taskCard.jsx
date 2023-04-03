import { useState } from "react";
import { useDataLayervValue } from "../config/dataLayer";
import { CardDataDescription } from "./CardDescription";

export const TaskCard = ({
  image,
  id,
  tag,
  description,
  title,
  tags,
  comments,
}) => {
  const [CardDescription, setCardDescription] = useState(false);
  const [{ users }] = useDataLayervValue();
  const handleCardDescription = () => {
    setCardDescription(!CardDescription);
  };

  const handleToggle = (toggle) => {
    setCardDescription(toggle);
  };
  return (
    <>
      <div className="taskCard" onClick={handleCardDescription}>
        {image !== null || undefined || "" ? (
          <img className="taskImage" src={image} alt="pic" />
        ) : null}
        {title !== null || undefined ? (
          <h2 className="taskTitle">{title}</h2>
        ) : null}
        <div className="tags">
          {tags?.map((tag) => (
            <div
              className="tagNameTable"
              style={{
                color: tag.bg,
                backgroundColor: tag.fontColor,
              }}
            >
              {tag.tagName}
            </div>
          ))}
        </div>
        <div className="users">
          <div className="usersHolder">
            {users.slice(0, 3).map((user) => (
              <div className="imageHolder">
                {user.photoURL ? (
                  <>
                    <img
                      className="userImage image"
                      src={user?.photoURL}
                      height={70}
                      width={70}
                      alt="userImage"
                    />
                    {user?.id === users[2]?.id && (
                      <div className="dataUserOverlay">0</div>
                    )}
                  </>
                ) : (
                  <div className="userImg">{user?.username.slice(0, 2)}</div>
                )}
              </div>
            ))}
          </div>
          {comments !== null ? (
            <div className="comments">
              <span class="material-symbols-rounded">comment</span>
              <p>0</p>
            </div>
          ) : null}
        </div>
      </div>
      {CardDescription && (
        <CardDataDescription
          id={id}
          image={image}
          title={title}
          handleToggle={handleToggle}
          tag={tag}
          description={description}
          tags={tags}
          zz
          comments={comments}
        />
      )}
    </>
  );
};

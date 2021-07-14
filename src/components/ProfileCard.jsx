import { useState } from "react";

const ProfileCard = ({ img }) => {
  const [def, setDef] = useState(false);
  return (
    <>
      <div className="col4">
        <div className="profile-pic">
          {!def ? (
            <img
              src={img || "./images/placeholer.jpg"}
              className="img-fluid d-block m-auto"
              alt="Set-Profile-Pic"
            />
          ) : (
            <img
              src={"./images/placeholer.jpg"}
              className="img-fluid d-block m-auto"
              alt="Set-Profile-Pic"
            />
          )}
        </div>
        <div className="list_text">
          <button
            style={{
              borderRadius: "50px",
              transform: "translateX(50px)",
              fontSize: "14px",
            }}
            onClick={() => {
              setDef(!def);
            }}
            className="btn btn-success"
          >
            {def ? "Set Selected" : "Upload Profile"}
          </button>
        </div>

        <div className="list_text">
          <ul>
            <li className="active">
              <a>
                <span>1</span> Create account
              </a>
            </li>
            <li>
              <a>
                <span>2</span> Education
              </a>
            </li>
            <li>
              <a>
                <span>3</span> Skills
              </a>
            </li>
            <li>
              <a>
                <span>4</span> Assesments
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;

import React, { useState } from "react";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import Avatar from "@material-ui/core/Avatar";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
const Show = ({ photo, id }) => {
  const [mod, setmod] = useState(false);
  const [singlephoto, setsinglephoto] = useState("");

  const styles = mod ? { display: "inline" } : { display: "none" };
  function showmodal(item) {
    setmod(!mod);

    setsinglephoto(item);
  }

  return (
    <div className="showineer">
      {photo?.data?.map((item) => {
        return (
          
        <div className="card" key={item.id} onClick={() => showmodal(item)}>
            <div className="cardimg" role="img" style={{backgroundImage: `url(${item.urls.thumb})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                {/* <img
                    alt={item.alt_description}
                    src={item.urls.thumb}
                    /> */}
                </div>
                <div className="cardinfo">
                    <p className="created__at"> created At : {item.created_at.substr(0, 10)}</p>
                    <p className="description">{item.alt_description}</p>
                    <div className="user__info">
                        <div className="avatar__img">
                            <Avatar
                                alt={item.user.name}
                                src={item.user.profile_image.small}
                            />
                        </div>
                        <div className="avatar__info">
                            <span className="avatar__name">{item.user.name}</span>
                            <div className="rating">
                                <div className="item__likes">
                                    <span>{item.likes}</span>
                                </div>
                                <div className="thumb__outline">
                                    <ThumbUpIcon style={{color: "red"}} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal" style={styles}>
                    <div className="modal-content">
                        <span className="close">&times;</span>
                        <div>
                        <img src={singlephoto?.urls?.regular} className="modalimg" />
                        </div>
                        <div className="modalinfo">
                        <div className="modalnames">
                            <div className="modalavatarinfo">
                            <Avatar
                                alt={singlephoto?.user?.name}
                                src={singlephoto?.user?.profile_image.large}
                                style={{ width: 100, height: 100 }}
                            />
                            </div>
                            <div className="modellinks">
                            <p>{singlephoto?.user?.name}</p>
                            {singlephoto?.user?.instagram_username ? (
                                <p>
                                <InstagramIcon color="Primary" />
                                <span>@{singlephoto?.user?.instagram_username}</span>
                                </p>
                            ) : null}

                            {singlephoto?.user?.twitter_username ? (
                                <p>
                                <TwitterIcon color="Primary" />
                                <span>@{singlephoto?.user?.twitter_username}</span>
                                </p>
                            ) : null}

                            {singlephoto?.user?.portfolio_url ? (
                                <p>{singlephoto?.user?.portfolio_url}</p>
                            ) : null}
                            </div>
                        </div>
                        <div className="modalcardinfo">
                            <ThumbUpIcon style={{ color: "red" }} />
                            <p>{singlephoto?.likes}</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    })}
    </div>
  );
};

export default Show;

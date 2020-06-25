export const allFollows = () => {
  return $.ajax({
    method: "GET",
    url: `/api/followings`,
  });
};

export const currentUserFollowing = (userId) => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${userId}/following`,
    data: { userId },
  });
};

export const follow = (userId) => {
  return $.ajax({
    method: "POST",
    url: `/api/users/${userId}/followings`,
    data: { userId },
  });
};

export const deleteFollow = (follow) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/followings`,
    data: { follow },
  });
};

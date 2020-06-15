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

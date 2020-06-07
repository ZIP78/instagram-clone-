export const follow = (userId) => {
  return $.ajax({
    method: "POST",
    url: `/api/users/${userId}/followers`,
    data: { userId },
  });
};

export const deleteFollow = (follow) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/followers`,
    data: { follow },
  });
};

export const fetchUsers = () =>
  $.ajax({
    method: `GET`,
    url: `api/users`,
  });

export const login = (user) =>
  $.ajax({
    method: "POST",
    url: "/api/session",
    data: { user },
  });

export const signup = (user) =>
  $.ajax({
    method: "POST",
    url: "/api/users",
    data: { user },
  });

export const logout = () =>
  $.ajax({
    method: "DELETE",
    url: "/api/session",
  });

// export const profilePic = (pic) =>
//   $.ajax({
//     method: "PATCH",
//     url: "/api/users",
//     data: pic,
//     contentType: false,
//     processData: false,
//   });

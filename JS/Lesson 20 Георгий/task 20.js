$(document).ready(function() {
    const userList = $("#user-list");
    const userInfo = $("#user-info");
    const userName = $("#user-name");
    const userUsername = $("#user-username");
    const userEmail = $("#user-email");
    const userAddress = $("#user-address");
    const userCompany = $("#user-company");
  
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/users",
      success: function(data) {
        for (let i = 0; i < data.length; i++) {
          const user = data[i];
          const userButton = `
            <button type="button" class="list-group-item list-group-item-action" data-user="${user.id}">
              ${user.name}
            </button>
          `;
          userList.append(userButton);
        }
  
        userList.on("click", ".list-group-item", function() {
          const userId = $(this).data("user");
          const activeUser = $(".list-group-item.active");
  
          activeUser.removeClass("active");
          $(this).addClass("active");
  
          $.ajax({
            url: `https://jsonplaceholder.typicode.com/users/${userId}`,
            success: function(data) {
              userName.text(data.name);
              
              userUsername.text(`@${data.username}`);
              userEmail.html(`<a href="mailto:${data.email}">${data.email}</a>`);
              userAddress.text(`${data.address.city}, ${data.address.street}, ${data.address.suite}`);
              userCompany.text(data.company.name);
            }
          });
        });
  
        userList.find(".list-group-item:first-child").click();
      }
    });
  });
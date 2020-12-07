function uploadPic() {
    $(".upload-button").hide();
    $("#uploaded").show();
}

function submitDesign() {
    sessionStorage.setItem("uploaded", true);
    Swal.fire({
        position: 'bottom-end',
        icon: 'success',
        title: 'Your design has been submited',
        showConfirmButton: false,
        timer: 1500
      }).then(function() {
          goToUserArea();
      });
}

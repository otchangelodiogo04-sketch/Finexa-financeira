function openModal(title, content) {
  document.getElementById("modalTitle").innerHTML = title;
  document.getElementById("modalBody").innerHTML = content;
  document.getElementById("contentModal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("contentModal").classList.add("hidden");
}

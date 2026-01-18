const GOOGLE_CLIENT_ID = "SUA_CLIENT_ID_AQUI";

window.onload = () => {
  if (!document.getElementById("googleBtn")) return;

  google.accounts.id.initialize({
    client_id: GOOGLE_CLIENT_ID,
    callback: handleGoogleLogin
  });

  google.accounts.id.renderButton(
    document.getElementById("googleBtn"),
    { theme: "outline", size: "large" }
  );
};

function handleGoogleLogin(response) {
  const data = jwt_decode(response.credential);

  const user = {
    name: data.name,
    email: data.email,
    provider: "google"
  };

  localStorage.setItem("finexa_user", JSON.stringify(user));
  sessionStorage.setItem("finexa_auth", "true");

  window.location.href = "dashboard.html";
}

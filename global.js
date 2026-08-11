// Ye function har page pe navbar aur footer ko partials/ se fetch karke
// #site-header aur #site-footer ke andar daal deta hai.
// Future me sirf partials/nav.html ya partials/footer.html change karo,
// sab pages apne aap update ho jayenge.

async function loadPartial(url, targetId) {
  const target = document.getElementById(targetId);
  if (!target) return;
  try {
    const res = await fetch(url);
    target.innerHTML = await res.text();
  } catch (err) {
    console.error("Partial load failed:", url, err);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadPartial("partials/nav.html", "site-header");
  loadPartial("partials/footer.html", "site-footer");
});

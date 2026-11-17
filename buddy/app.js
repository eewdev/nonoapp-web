(() => {
  const de = (navigator.language || "en").toLowerCase().startsWith("de");
  const t = de ? {
    title: "Eine Anfrage für dich",
    subtitle: "Gib deine NoNoApp-PIN ein, um die Anfrage zu öffnen.",
    pin: "Deine PIN", open: "Anfrage öffnen", opening: "Wird geöffnet …",
    wrong: "Falsche PIN. Versuch es noch einmal.",
    unlock: (app, m) => `Anfrage: ${app} für ${m} Minuten`,
    change: "Anfrage: Vertrauensperson wechseln",
    hintUnlock: "Wenn das für dich okay ist, schick diesen Code zurück:",
    hintChange: "Nur wenn du einverstanden bist, dass du nicht mehr die Vertrauensperson bist, schick diesen Code zurück:",
    decide: "Wenn nicht, schick einfach keinen Code. Dann kann eine neue Anfrage mit weniger Zeit kommen.",
    expired: "Diese Anfrage ist abgelaufen. Bitte um eine neue.",
    invalidTitle: "Link unvollständig",
    invalidBody: "Dieser Link ist unvollständig oder beschädigt. Bitte um eine neue Anfrage."
  } : {
    title: "A request for you",
    subtitle: "Enter your NoNoApp PIN to open the request.",
    pin: "Your PIN", open: "Open request", opening: "Opening …",
    wrong: "Wrong PIN. Please try again.",
    unlock: (app, m) => `Request: ${app} for ${m} minutes`,
    change: "Request: change trusted person",
    hintUnlock: "If that's okay with you, send back this code:",
    hintChange: "Only if you agree to no longer be the trusted person, send back this code:",
    decide: "If not, just don't send a code. A new request with less time can follow.",
    expired: "This request has expired. Please ask for a new one.",
    invalidTitle: "Incomplete link",
    invalidBody: "This link is incomplete or damaged. Please ask for a new request."
  };
  document.documentElement.lang = de ? "de" : "en";
  const $ = (id) => document.getElementById(id);
  $("title").textContent = t.title;
  $("subtitle").textContent = t.subtitle;
  $("pin-label").textContent = t.pin;
  $("submit").textContent = t.open;

  const b64url = (s) => {
    const base = s.replace(/-/g, "+").replace(/_/g, "/");
    const bin = atob(base + "===".slice((base.length + 3) % 4));
    return Uint8Array.from(bin, (c) => c.charCodeAt(0));
  };

  const showInvalid = () => {
    $("pin-view").classList.add("hidden");
    $("invalid-view").classList.remove("hidden");
    $("invalid-title").textContent = t.invalidTitle;
    $("invalid-body").textContent = t.invalidBody;
  };
  const parts = location.hash.replace(/^#/, "").split(".");
  if (parts.length !== 5 || parts[0] !== "v1" || !window.crypto || !crypto.subtle) {
    showInvalid();
    return;
  }
  let salt, iterations, iv, data;
  try {
    salt = b64url(parts[1]);
    iterations = parseInt(parts[2], 10);
    iv = b64url(parts[3]);
    data = b64url(parts[4]);
    if (!(iterations > 0 && iterations <= 5000000)) throw new Error("iterations");
  } catch (e) {
    showInvalid();
    return;
  }

  async function decrypt(pin) {
    const base = await crypto.subtle.importKey("raw", new TextEncoder().encode(pin), "PBKDF2", false, ["deriveKey"]);
    const key = await crypto.subtle.deriveKey(
      { name: "PBKDF2", salt, iterations, hash: "SHA-256" },
      base, { name: "AES-GCM", length: 256 }, false, ["decrypt"]
    );
    const plain = await crypto.subtle.decrypt({ name: "AES-GCM", iv, tagLength: 128 }, key, data);
    return JSON.parse(new TextDecoder().decode(plain));
  }

  $("form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const button = $("submit");
    button.disabled = true;
    button.textContent = t.opening;
    $("error").textContent = "";
    try {
      const request = await decrypt($("pin").value.trim());
      $("pin-view").classList.add("hidden");
      $("code-view").classList.remove("hidden");
      const isChange = request.k === "change";
      $("request").textContent = isChange ? t.change : t.unlock(request.t, request.m);
      if (request.e && Date.now() > request.e) {
        $("hint").textContent = t.expired;
        return;
      }
      $("hint").textContent = isChange ? t.hintChange : t.hintUnlock;
      $("code").textContent = request.c;
      $("decide").textContent = t.decide;
    } catch (e) {
      $("error").textContent = t.wrong;
      button.disabled = false;
      button.textContent = t.open;
    }
  });
})();

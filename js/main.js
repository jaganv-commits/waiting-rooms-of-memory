/* Behaviour only. Content lives in data.js (loaded first). */
const $ = (s, r = document) => r.querySelector(s);

function chips(id, keys, cb) {
  const box = $(id); box.innerHTML = "";
  keys.forEach(k => {
    const b = document.createElement("button");
    b.className = "chip"; b.textContent = k;
    b.onclick = () => { [...box.children].forEach(c => c.classList.remove("on")); b.classList.add("on"); cb(k); };
    box.appendChild(b);
  });
}

chips("#memChips", Object.keys(MEM), k => { $("#memYes").textContent = MEM[k][0]; $("#memNo").textContent = MEM[k][1]; });

HOT.forEach((q, i) => {
  const b = document.createElement("button"); b.textContent = "Question " + (i + 1);
  b.onclick = () => { [...$("#hot").children].forEach(c => c.classList.remove("on")); b.classList.add("on"); $("#hotQ").textContent = q; };
  $("#hot").appendChild(b);
});

chips("#propChips", Object.keys(PROP), k => { $("#propBody").textContent = PROP[k]; });
$("#propChips").firstChild.click();

ITEMS.forEach(it => {
  const d = document.createElement("div"); d.className = "card item"; d.tabIndex = 0;
  d.innerHTML = `<span class="tag">${it[0]}</span><h3 style="margin-top:8px">${it[1]}</h3>
  <div class="more"><p><b>What it is:</b> ${it[2]}</p><p><b>Why it matters:</b> ${it[3]}</p><p><b>Whose memory:</b> ${it[4]}</p>
  <p class="small">Access tier: [public / family-only / private] · Consent: [pending]</p></div>`;
  const toggle = () => d.classList.toggle("open");
  d.onclick = toggle; d.onkeydown = e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); } };
  $("#items").appendChild(d);
});

function showSw(v) {
  $("#swList").innerHTML = SW[v].map(x => `<li>${x}</li>`).join("");
  document.querySelectorAll("#sw button").forEach(b => b.classList.toggle("on", b.dataset.v === v));
}
document.querySelectorAll("#sw button").forEach(b => b.onclick = () => showSw(b.dataset.v));
showSw("record");

chips("#refl", Object.keys(REFL), k => { $("#reflOut").textContent = REFL[k]; });

/* ---------- photo slots ---------- */
let curSlot = null;
function setImg(el, src, alt) {
  let i = $("img", el);
  if (!i) { i = document.createElement("img"); i.loading = "lazy"; el.prepend(i); }
  i.alt = alt || "";
  i.onerror = () => { i.remove(); el.classList.remove("has"); };   // missing file -> placeholder
  i.onload = () => el.classList.add("has");
  i.src = src;
}
function makeSlot(el) {
  const t = document.createElement("div"); t.className = "tools";
  t.innerHTML = '<button class="btn">Upload</button><button class="btn" style="background:#fff;color:#2a2622">URL</button>';
  t.children[0].onclick = () => { curSlot = el; $("#file").click(); };
  t.children[1].onclick = () => { const u = prompt("Paste an image URL:"); if (u) setImg(el, u.trim(), ""); };
  el.appendChild(t);
}
$("#file").onchange = e => {
  const f = e.target.files[0]; if (!f || !curSlot) return;
  const r = new FileReader(); r.onload = () => setImg(curSlot, r.result, ""); r.readAsDataURL(f); e.target.value = "";
};

$("#gallery").innerHTML = GALLERY.map(g =>
  `<figure><div class="slot"><div class="ph">PLACEHOLDER<br>${g.caption}<br><span class="small">add ${g.src}</span></div></div>
   <figcaption data-edit>${g.caption} — location, date (replace me)</figcaption></figure>`).join("");
document.querySelectorAll(".slot").forEach(makeSlot);
document.querySelectorAll("#gallery .slot").forEach((s, i) => setImg(s, GALLERY[i].src, GALLERY[i].caption));
setImg($("#absenceSlot"), ABSENCE_IMG.src, ABSENCE_IMG.alt);

/* ---------- sources ---------- */
function addSrc(text, url) {
  const li = document.createElement("li");
  li.innerHTML = `<span data-edit>${text}</span> <a target="_blank" rel="noopener">↗ open</a> <button class="btn alt edit-only" style="display:none;padding:2px 8px">set link</button>`;
  const a = $("a", li), b = $("button", li);
  const upd = u => { if (u) { a.href = u; a.style.display = ""; } else { a.removeAttribute("href"); a.style.display = "none"; } };
  upd(url);
  b.onclick = () => { const u = prompt("Paste the link for this source (empty to remove):", a.getAttribute("href") || "https://"); if (u !== null) { const v = u.trim(); upd(v === "https://" ? "" : v); } };
  $("#srcList").appendChild(li);
}
SRC.forEach(s => addSrc(s[0], s[1]));
$("#addSrc").onclick = () => { addSrc("New source — edit me", ""); setEdit(true); };

/* ---------- edit mode (live preview only) ---------- */
function setEdit(on) {
  document.body.classList.toggle("edit", on);
  document.querySelectorAll("[data-edit]").forEach(e => e.contentEditable = on ? "true" : "false");
  document.querySelectorAll(".edit-only").forEach(e => e.style.display = on ? "" : "none");
  $("#editBtn").textContent = on ? "✓ Done editing" : "✎ Edit mode";
}
$("#editBtn").onclick = () => setEdit(!document.body.classList.contains("edit"));

/* Snapshot: downloads the page as one file. Note: browser edits are NOT written back to your repo files. */
$("#saveBtn").onclick = () => {
  const was = document.body.classList.contains("edit"); setEdit(false);
  const html = "<!DOCTYPE html>\n" + document.documentElement.outerHTML;
  const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([html], { type: "text/html" }));
  a.download = "waiting-rooms-snapshot.html"; a.click(); if (was) setEdit(true);
};

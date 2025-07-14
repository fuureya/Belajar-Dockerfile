const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const name = req.query.name;

  if (!name) {
    return res.send("Harap sertakan parameter ?name=namamu");
  }

  const message = `Selamat datang, ${name}!\n`;
  const log = `${name} sedang akses web\n`;

  res.send(message);

  try {
    fs.writeFileSync("log.txt", log, { flag: "a" }); // 'a' = append mode
    console.log("Log berhasil ditulis.");
  } catch (err) {
    console.error("Gagal menulis log:", err);
  }
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});

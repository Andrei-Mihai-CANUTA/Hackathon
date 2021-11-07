const bcrypt = require("bcrypt");

async function hashPassword(password) {
  const salt = await bcrypt.genSalt();
  const hashedPassword = bcrypt.hash(hashedPassword, salt);
}

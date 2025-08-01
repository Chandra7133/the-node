const express = require("express");
const os = require("os");
const app = express();
const PORT = 9526;

app.use(express.json());

app.get("/", (req, res) => {
 res.json({ msg: "welcome working fine!!!!" });
});

// Helper function to get local IP address
function getLocalIPAddress() {
 const interfaces = os.networkInterfaces();
 for (const name of Object.keys(interfaces)) {
  for (const iface of interfaces[name]) {
   if (iface.family === "IPv4" && !iface.internal) {
    return iface.address;
   }
  }
 }
 return "localhost";
}

app.listen(PORT, () => {
 const ip = getLocalIPAddress();
 console.log(`Server is running at: http://${ip}:${PORT}`);
});

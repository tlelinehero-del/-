const http = require('http');

// กำหนด Port ที่ Render ต้องการ (ปกติ Render จะส่งค่านี้มาให้)
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  // ตั้งค่า Header ให้รองรับภาษาไทย และส่งสถานะ 200 (Success)
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  
  // แก้ไขรหัสและชื่อของคุณตรงนี้ได้เลยครับ!
  res.end('<h1>รหัสนักศึกษา: 69319011719 <br> ธนดล แสงทอง: [ไตเติ้ล]</h1>');
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

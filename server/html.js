
let html = (body) => {
  return (
    `<!DOCTYPE html>
    <html>
    <head>
      <title>HackBnB</title>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" crossorigin="anonymous">
      <link href="https://use.fontawesome.com/releases/v5.0.7/css/all.css" rel="stylesheet">
      <link rel="stylesheet" type="text/css" href="./styles.css">
    </head>
    <body>
      ${body}
    </body>
    </html>`
  );
};

module.exports = html;
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  // Your verify token. Should be a random string.
  // const VERIFY_TOKEN = process.env.VERIFY_TOKEN;

  // Parse the query params
  // let mode = req.query['hub.mode'];
  // let token = req.query['hub.verify_token'];
  // let challenge = req.query['hub.challenge'];

  // // Checks if a token and mode is in the query string of the request
  // if (mode && token) {

  //   // Checks the mode and token sent is correct
  //   if (mode === 'subscribe' && token === "verifytoken") {

  //     // Responds with the challenge token from the request
  //     console.log('WEBHOOK_VERIFIED');
  //     res.status(200).send(challenge);

  //   } else {
  //     // Responds with '403 Forbidden' if verify tokens do not match
  //     res.sendStatus(403);
  //   }
  // }
  res.status(200).json({ name: 'John Doe' })
}

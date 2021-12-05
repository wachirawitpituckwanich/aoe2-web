import micro from "micro-cors";

function MyApi(req, res) {
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  
}

const cors = micro();

export default cors(MyApi);
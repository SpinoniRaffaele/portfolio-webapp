import request from "request";

export default function handler(req: any, res: any) {
  const BASE_PATH = 'https://www.7timer.info/bin/api.pl';

  request({url: BASE_PATH + '?' + req.url.split('?')[1], json: true}, function(err, response, json) {
    if (err) {
      throw err;
    }
    res.send(JSON.stringify(json));
  });
}
